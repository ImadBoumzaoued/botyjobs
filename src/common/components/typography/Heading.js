import React, { memo } from "react";
import { theme } from "withStyles";
import { Box } from "../Grid";

const styles = {
  "600": {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "24px",
    letterSpacing: " -0.07px",
    color: theme.color.text.dark,
  },
  "500": {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.05px",
    color: theme.color.text.dark,
  },
  "400": {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "20px",
    color: theme.color.text.dark,
  },
  "300": {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0",
    color: theme.color.text.dark,
  },
  "200": {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "16px",
    color: theme.color.text.muted,
  },
};

const Heading = ({ size, children, ...rest }) => {
  const style = styles[size];

  return (
    <Box as="h2" css={style} {...rest}>
      {children}
    </Box>
  );
};

Heading.defaultProps = {
  size: 500,
};

export default memo(Heading);
