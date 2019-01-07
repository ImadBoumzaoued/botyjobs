import styled from "styled-components";
import { Box } from "../Grid";
import { getColor } from "../../utils/themeHelpers";
import { fontSize, fontWeight, maxWidth } from "styled-system";

export default styled(Box)`
  color: ${props => getColor("text", (props.color = "muted"))};
  ${maxWidth};
  ${fontSize};
  ${fontWeight};
`;
