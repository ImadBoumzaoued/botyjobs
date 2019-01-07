import React from "react";
import styled, { css } from "styled-components";
import BaseInput from "common/components/form/BaseInput";

const StyledInput = styled.input`
  display: block;
  border: solid 1px ${props => props.theme.color.gray2};
  border-radius: 4px;
  max-width: 350px;
  height: 35px;
  transition-duration: 0.3s;
  width: 100%;
  color: ${props => props.theme.color.black};
  padding: 0px 10px;
  font-size: ${props => props.theme.unit.getRem(14)};
  &:focus {
    box-shadow: none;
    outline: none;
    border: solid 1px ${props => props.theme.color.primary};
  }

  @media (max-width: 575px) {
    max-width: calc(100% - 22px);
  }

  ${props =>
    props.size === "small" &&
    css`
      width: 150px;
    `} ${props =>
    props.form &&
    props.form.touched[props.field.name] &&
    props.form.errors[props.field.name] &&
    css`
      border-color: ${props => props.theme.color.danger};
      &:focus {
        border-color: ${props => props.theme.color.danger};
      }
    `};
`;

const Input = ({ ...props }) => (
  <BaseInput {...props}>
    <StyledInput {...props} {...props.field} />
  </BaseInput>
);

export default Input;
