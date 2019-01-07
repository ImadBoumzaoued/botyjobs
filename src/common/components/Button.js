import React from "react";
import styled, { css } from "styled-components";
import get from "lodash/get";
import { space } from "styled-system";
import { Box } from "./Grid";
import Icon from "./Icon";
import Spinner from "./Spinner";
import { theme } from "withStyles";

const variation = props => {
  const color = get(theme.color, props.color, theme.color.neutral);
  return css`
    background-color: ${color.base};
    border: 1px solid ${color.base};
    &:hover {
      background-color: ${props => (props.disabled ? null : color.dark)};
      border-color: ${color.dark};
    }
  `;
};

const isLoadingStyle = css`
  transition: opacity 0.3s;
  opacity: ${({ isLoading }) => (isLoading ? 0.6 : 1)};
`;

const size = props => {
  switch (props.size) {
    case "sm":
      return css`
        font-size: 12px;
        padding: 5px;
      `;
    case "md":
      return css`
        font-size: 14px;
        padding: 9.5px 18px;
      `;
    case "lg":
      return css`
        font-size: 16px;
        padding: 12px 22px;
      `;
    case "xl":
      return css`
        font-size: 20px;
        padding: 15px 26px;
      `;
    default:
      return css`
        font-size: 14px;
        padding: 9.5px 18px;
      `;
  }
};

const BaseButton = styled(Box)(
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "inherit",
    textDecoration: "none",
    backgroundColor: "none",
  },
  css`
    -webkit-font-smoothing: antialiased;
    vertical-align: middle;
    text-decoration: none;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    border-radius: 3px;
    color: white;
    border-style: solid;
    font-size: 13px;
    transition-property: color, background, border-color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in;
    outline: none;
    &:disabled {
      opacity: 0.25;
      pointer-events: none;
    }
    ${props => props.isLoading && isLoadingStyle(props)}
      ${props =>
        props.fit &&
        css`
          width: 100%;
          justify-content: center;
        `}
    ${variation};
    ${space};
    ${size};
  `,
);

BaseButton.defaultProps = {
  as: "button",
  fontSize: "inherit",
  fontWeight: "bold",
  m: 0,
  px: 3,
  py: 2,
  color: "neutral",
  bg: "blue",
  border: 0,
  borderRadius: 4,
};

const OutlineButton = styled(BaseButton)`
  color: ${props => theme.color[props.color].base};
  background: transparent;
  border: 1px solid ${props => theme.color[props.color].base};
  &:hover {
    background: ${props => theme.color[props.color].base};
    color: white;
    border-color: ${props => theme.color[props.color].base};
  }
`;

const MinimalButton = styled(BaseButton)`
  ${props =>
    props.active
      ? ``
      : css`
          color: ${theme.color[props.color].base};
          background: none;
        `};
  border: none;
  &:hover {
    background: ${props => theme.color[props.color].light};
  }
`;

const getStyledButton = ({ outline, minimal }) => {
  if (outline) {
    return OutlineButton;
  }
  if (minimal) {
    return MinimalButton;
  }
  return BaseButton;
};

const Button = ({ icon, children, isLoading, render, ...props }) => {
  const StyledButton = getStyledButton(props);

  return (
    <StyledButton {...props}>
      {icon && !render && (
        <React.Fragment>
          <Icon size={13} icon={icon} />
        </React.Fragment>
      )}
      {!render && (
        <Box
          css={{ display: "flex" }}
          justifyContent="space-between"
          alignItems={"center"}
        >
          {/* TODO: work more on loading state */}
          {isLoading && <Spinner size={20} />}
          {children}
        </Box>
      )}
      {render && render()}
    </StyledButton>
  );
};

export default Button;
