import React from "react";
import { compose } from "redux";
import { css, withStyles } from "withStyles";

const FormSection = ({ styles, children }) => (
  <div {...css(styles.root)}>{children}</div>
);

const enhance = compose(
  withStyles(({ color }) => ({
    root: {
      paddingBottom: 30,
      marginBottom: 30,
      borderBottom: `solid 1px ${color.borderGray}`,
    },
  })),
);

export default enhance(FormSection);
