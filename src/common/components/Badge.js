import styled from "styled-components";
import PropTypes from "prop-types";
import { space } from "styled-system";
import { getColor } from "../utils/themeHelpers";

const Badge = styled.div`
  padding: 2px 6px;
  ${space};
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 13px;
  color: ${props => (props.isSolid ? "white" : getColor(props.color, "dark"))};
  background-color: ${props =>
    getColor(props.color, props.isSolid ? "base" : "light")};
`;

Badge.propTypes = {
  isSolid: PropTypes.bool,
};

export default Badge;
