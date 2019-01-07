import React from "react";
import { css, withStyles } from "withStyles";

const DragHandle = ({ styles, visible }) => (
  <div {...css(styles.container, visible && styles.visible)}>
    <div {...css(styles.col)}>
      <div {...css(styles.circle)} />
      <div {...css(styles.circle)} />
      <div {...css(styles.circle)} />
    </div>
    <div {...css(styles.col)}>
      <div {...css(styles.circle)} />
      <div {...css(styles.circle)} />
      <div {...css(styles.circle)} />
    </div>
  </div>
);

const styled = withStyles(({ color }) => ({
  container: {
    alignSelf: "flex-start",
    width: 15,
    marginTop: 3,
    opacity: 0,
    cursor: "grab",
    height: 12,
    display: "flex",
    verticalAlign: "middle",
    marginRight: 10,
    justifyContent: "center",
  },
  visible: {
    opacity: 1,
  },
  col: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    ":first-child": {
      marginRight: 3,
    },
  },
  circle: {
    height: 2,
    width: 2,
    borderRadius: 1,
    backgroundColor: color.gray5,
  },
}));

export default styled(DragHandle);
