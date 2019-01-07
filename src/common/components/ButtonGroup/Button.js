import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Box } from "../Grid";
import Text from "../typography";
// import { theme } from "withStyles";

const Label = styled(Text)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  flex: 1;
  cursor: pointer;
  margin-left: -1px;
  &:first-child ${Label} {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:last-child ${Label} {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`;

const Offscreen = styled.input`
  overflow: hidden;
  position: absolute;
  height: 1px;
  width: 1px;
  padding: 0;
  margin: -1px;
  border: 0;
  clip: rect(0 0 0 0);
`;

class GroupButton extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    isFirstItem: PropTypes.bool,
    isLastItem: PropTypes.bool,
    id: PropTypes.string,
  };

  render() {
    const {
      id,
      name,
      label,
      value,
      checked,
      onChange,
      isFirstItem,
      isLastItem,
    } = this.props;

    return (
      <Wrapper
        data-active={checked}
        {...(isFirstItem
          ? {
              borderRadius: "3 0 0 3",
            }
          : {})}
        {...(isLastItem
          ? {
              borderRadius: "0 3 3 0",
            }
          : {})}
      >
        <Offscreen
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={e => onChange(e.target.value)}
        />
        <Label as="label" cursor="pointer" htmlFor={id} fontWeight={500}>
          {label}
        </Label>
      </Wrapper>
    );
  }
}

export default GroupButton;
