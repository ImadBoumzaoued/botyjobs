import React from "react";
import { compose } from "redux";

import { css, withStyles, theme } from "withStyles";
import Icon from "./Icon";

const Panel = ({ title, styles, children }) => (
  <div {...css(styles.root)}>
    {title}
    <div {...css(styles.contentPadding)}>{children}</div>
  </div>
);

const styled = withStyles(({ color, unit }) => ({
  root: {
    backgroundColor: "white",
    maxWidth: 760,
    margin: "0 auto 20px",
    borderRadius: 4,
    boxShadow: `0 10px 40px 0 rgba(18, 106, 211, 0.07),
  0 2px 9px 0 rgba(18, 106, 211, 0.06)`,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    padding: "20px 50px",
    fontSize: unit.getRem(20),
    fontWeight: 500,
    borderBottom: "1px solid rgba(234,243,253, .7)",
    color: color.text.default,
    "@media (max-width: 575px)": {
      padding: "20px",
    },
  },
  titleIcon: {
    marginRight: 15,
  },
  contentPadding: {
    padding: "30px 50px",
    "@media (max-width: 575px)": {
      padding: 20,
    },
  },
}));

const enhance = compose(styled);

Panel.Title = styled(({ styles, icon, label }) => (
  <div {...css(styles.titleContainer)}>
    <span {...css(styles.titleIcon)}>
      <Icon size={30} color={theme.color.text.selected} icon={icon} />
    </span>
    {label}
  </div>
));

export default enhance(Panel);
