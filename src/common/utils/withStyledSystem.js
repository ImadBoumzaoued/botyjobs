import React from "react";
import styled from "styled-components";
import { color, fontSize, space, width } from "styled-system";
import { arrayOf, number, oneOfType, string } from "prop-types";
import { getDisplayName } from "recompose";

const prop = oneOfType([number, string, arrayOf(oneOfType([number, string]))]);

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop,
};

const withStyledSystem = child => {
  const Base = styled(child)`
    ${space} ${width} ${fontSize} ${color};
  `;

  Base.displayName = getDisplayName(child);
  Base.propTypes = propTypes;
  // eslint-disable-next-line
  return props => <Base {...props} />;
};

export default withStyledSystem;
