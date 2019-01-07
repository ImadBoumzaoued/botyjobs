import React from "react";
import styled, { css } from "styled-components";

import BaseInput from "./BaseInput";

const StyledTextarea = styled.textarea`
  resize: none;
  border: solid 1px ${props => props.theme.color.gray2};
  width: 100%;
  height: 100px;
  border-radius: 4px;
  transition-duration: 0.5s;
  font-size: ${props => props.theme.unit.getRem(14)};
  padding: 10px;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.color.primary};
  }

  @media (max-width: 575px) {
    max-width: calc(100% - 22px);
  }
  ${props =>
    props.touched[props.name] &&
    props.errors[props.name] &&
    css`
      border-color: ${props => props.theme.color.danger};
      &:focus {
        border-color: ${props => props.theme.color.danger};
      }
    `};
`;

const Textarea = ({ ...props }) => {
  const inputMeta = { ...props.field, ...props.form };
  return (
    <BaseInput {...props}>
      <StyledTextarea {...inputMeta} />
    </BaseInput>
  );
};

export default Textarea;
