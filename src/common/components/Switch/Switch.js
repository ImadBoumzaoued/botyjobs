import React, { PureComponent } from "react";
import styled from "styled-components";
import {
  flex,
  background,
  border,
  position,
  space,
  fontSize,
  fontWeight,
  fontFamily,
  fontStyle,
} from "styled-system";
import { Box } from "../Grid";
import { baseTransition, getColor } from "../../utils/themeHelpers";

const StyledSwitch = styled(Box)`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 24px;
  .switch-wrapper {
    width: 50px;
    height: 24px;
    border-radius: 34px;
    background-color: ${getColor("scales", "N5")};
    overflow: hidden;
    cursor: pointer;
    border-width: 0;
    border-color: ${getColor("neutral", "dark")};
    border-style: solid;
    transition: ${baseTransition()};
    font-size: 9px;
    font-weight: 800;
  }
  input:focused + .switch-wrapper {
    outline: 0;
    box-shadow: 0 0 2px ${({ appearance }) => getColor(appearance)};
  }
  input:checked + .switch-wrapper {
    background-color: ${({ appearance }) => getColor(appearance, "light")};
    border-color: transparent;
    .switch-content {
      transform: translateX(0);
    }
    .switch-ball {
      background-color: ${({ appearance }) => getColor(appearance)};
    }
  }
  input:disabled + .switch-wrapper {
    opacity: 0.5;
  }
  .switch-ball {
    flex-shrink: 0;
    background-color: ${getColor("scales", "N7")};
    border-radius: 50%;
    width: 18px;
    height: 18px;
    transition: ${baseTransition()};
  }
  .switch-content {
    display: flex;
    align-items: center;
    height: 23px;
    transition: ${baseTransition()};
    transform: translateX(-23px);
  }
  .switch-label {
    flex-shrink: 0;
    width: 27px;
    text-align: center;
    user-select: none;
    &.switch-label-on {
      color: ${({ appearance }) => getColor(appearance)};
    }
    &.switch-label-off {
      color: ${getColor("scales", "N7")};
    }
    ${fontFamily};
    ${fontSize};
    ${fontStyle};
    ${fontWeight};
    ${space};
    ${flex};
    ${background};
    ${position};
    ${border};
  }
`;

const isControlled = component => {
  return {}.hasOwnProperty.call(component.props, "checked");
};

class Switch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };
  }

  handleChange = value => {
    if (isControlled(this)) {
      this.props.onChange(value);
    } else {
      this.setState(prevState => ({ checked: !prevState.checked }));
      this.props.onChange(value);
    }
  };

  render() {
    const {
      id,
      name,
      onLabel,
      offLabel,
      labeled,
      disabled,
      checked: propsChecked,
      defaultChecked,
      ...props
    } = this.props;

    const checked = isControlled(this) ? propsChecked : this.state.checked;

    return (
      <StyledSwitch as="label" position="relative" {...props}>
        <Box
          as="input"
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onChange={this.handleChange}
          css={{ display: "none" }}
        />
        <div className="switch-wrapper">
          <div className="switch-content">
            <span className="switch-label switch-label-on">
              {labeled ? onLabel : ""}
            </span>
            <div className="switch-ball" />
            <span className="switch-label switch-label-off">
              {labeled ? offLabel : ""}
            </span>
          </div>
        </div>
      </StyledSwitch>
    );
  }
}

Switch.defaultProps = {
  onChange: () => {},
  hasCheckIcon: true,
  disabled: false,
  appearance: "primary",
};

export default Switch;
