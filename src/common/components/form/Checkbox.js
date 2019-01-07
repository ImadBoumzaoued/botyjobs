import React, { PureComponent } from "react";
import { withStyles, css } from "withStyles";

import whiteCheckmark from "common/assets/white-checkmark.svg";

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked || false,
    };
  }

  handleCheckToggled = () => {
    const newVal = !this.state.isChecked;
    this.setState({
      isChecked: newVal,
    });
    this.props.onChange && this.props.onChange(newVal);
  };

  render() {
    const { styles, label, disabled } = this.props;
    const { isChecked } = this.state;
    return (
      <div
        {...css(styles.root)}
        onClick={disabled ? null : this.handleCheckToggled}
      >
        <div {...css(styles.box, isChecked && styles.checked)} />
        <div {...css(styles.label)}>{label}</div>
      </div>
    );
  }
}

const styled = withStyles(({ color, unit }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transitionDuration: "0.3s",
    backgroundColor: "white",
    transition: "background-color 300ms linear",
  },
  checked: {
    ":before": {
      content: '""',
      opacity: 1,
    },
  },
  label: {
    flex: 1,
    color: color.black,
    fontSize: unit.getRem(14),
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 3,
    marginRight: 8,
    border: `solid 1px ${color.borderGray}`,
    position: "relative",
    ":before": {
      content: '""',
      borderRadius: 3,
      left: -1,
      top: -1,
      width: 20,
      height: 20,
      border: `solid 1px ${color.primary.base}`,
      position: "absolute",
      transitionDuration: "0.3s",
      backgroundColor: color.primary.base,
      opacity: 0,
      zIndex: 4,
    },
    ":after": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${whiteCheckmark})`,
      backgroundSize: "100%",
      backgroundPosition: "center",
      width: 14,
      height: 14,
      top: "calc(50% - 7px)",
      left: "calc(50% - 7px)",
      zIndex: 5,
    },
  },
}));

export default styled(Checkbox);
