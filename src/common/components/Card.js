import styled, { css } from "styled-components";
import { space, position, overflow } from "styled-system";
import { theme } from "withStyles";

const Card = styled.div`
  ${space};
  ${position};
  ${overflow};
  background: white;
  display: flex;
  border-radius: 0.5rem;
  font-size: ${theme.unit.getRem(14)};
  box-shadow: 0 10px 40px 0 rgba(18, 106, 211, 0.07),
    0 2px 9px 0 rgba(18, 106, 211, 0.06);
  ${props =>
    props.col &&
    css`
      flex-direction: column;
    `}
`;

export default Card;
