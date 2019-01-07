import styled from "styled-components";

export default styled.div`
  font-size: ${props => props.theme.unit.getRem(18)};
  color: ${props => props.theme.color.black};
  margin-bottom: 30px;
  font-weight: 600;
`;
