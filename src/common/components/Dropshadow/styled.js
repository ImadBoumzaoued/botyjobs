import styled from "styled-components";

const pointerEvents = props => (props.canClickThrough ? "none" : "initial");
const backgroundColor = props => props.theme.color.scales.N5A;

export default styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 1;
  pointer-events: ${pointerEvents};
  background: ${backgroundColor};
`;
