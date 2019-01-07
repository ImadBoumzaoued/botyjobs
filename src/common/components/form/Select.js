import React from "react";
import styled, { css } from "styled-components";

import BaseInput from "common/components/form/BaseInput";

const StyledSelect = styled.select`
  display: block;
  border: solid 1px ${props => props.theme.color.gray2};
  background-color: white;
  border-radius: 4px;
  max-width: 372px;
  height: 35px;
  transition-duration: 0.5s;
  width: 100%;
  color: ${props => props.theme.color.black};
  padding: 0px 10px;
  font-size: ${props => props.theme.unit.getRem(14)};
  &:focus {
    box-shadow: none;
    outline: none;
  }

  ${props =>
    props.size === "small" &&
    css`
      width: 150px;
    `} ${props =>
    props.meta &&
    props.meta.touched &&
    props.meta.error &&
    css`
      border-color: ${props => props.theme.color.danger};
      &:focus {
        border-color: ${props => props.theme.color.danger};
      }
    `};
`;

const Select = ({ ...props }) => (
  <BaseInput {...props}>
    <StyledSelect {...props} {...props.input}>
      {props.options.map(option => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  </BaseInput>
);

export default Select;
