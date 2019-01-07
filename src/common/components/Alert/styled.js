import styled, { css } from "styled-components";
import { Box } from "../Grid";
import { theme } from "withStyles";

export const StyledAlert = styled(Box)(
  {
    backgroundColor: "white",
    padding: "12px 16px",
    overflow: "hidden",
    display: "flex",
    position: "relative",
  },
  css`
    border-radius: 3px;
    box-shadow: inset 0 0 0 1px ${theme.color.scales.N4A};
    &:before {
      content: "";
      width: 3px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: ${props => theme.color.intent[props.intent]};
    }
  `,
);
