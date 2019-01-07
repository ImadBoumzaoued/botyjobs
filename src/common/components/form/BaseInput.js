import React from "react";
import styled, { css } from "styled-components";

const Root = styled.div`
  margin-bottom: 30px;
  max-width: 500px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.div`
  font-size: ${props => props.theme.unit.getRem(14)};
  color: ${props => props.theme.color.black};
  font-weight: 400;
  margin-bottom: 6px;
  display: block;
`;

const Help = styled.div`
  font-size: ${props => props.theme.unit.getRem(13)};
  color: ${props => props.theme.color.gray};
  margin-bottom: 10px;
`;

const ErrorText = styled.div`
  font-size: ${props => props.theme.unit.getRem(12)};
  color: ${props => props.theme.color.danger};
  opacity: 0;
  transition-duration: 0.3s;
  margin-top: 5px;
  height: 18px;
  margin-bottom: -18px;

  ${props =>
    props.form &&
    props.form.touched[props.field.name] &&
    props.form.errors[props.field.name] &&
    css`
      opacity: 1;
    `};
`;

const BaseInput = ({ children, label, help, ...props }) => (
  <Root>
    {label && <Label>{label}</Label>}
    {help && <Help>{help}</Help>}
    {children}
    <ErrorText {...props}>
      {props.form && props.form.errors[props.field.name]}
    </ErrorText>
  </Root>
);

export default BaseInput;
