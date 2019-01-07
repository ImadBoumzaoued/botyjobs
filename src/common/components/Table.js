import styled, { css } from "styled-components";
import { textAlign } from "styled-system";

export const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  ${props =>
    props.table &&
    css`
      display: table;
    `}
`;

export const TD = styled.td`
  ${textAlign};
  font-weight: 400;
  color: ${props => props.theme.color.scales.N9};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${props => props.theme.color.scales.N4};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 3.8125rem;
`;

export const TR = styled.tr`
  ${props =>
    props.onClick &&
    css`
      cursor: pointer;
    `};
  &:hover ${TD} {
    background-color: ${props => props.theme.color.primary.lightest};
  }
`;

export const TH = styled.th`
  ${textAlign};
  background-color: ${props => props.theme.color.scales.N2};
  font-weight: 600;
  font-size: 0.75rem;
  color: ${props => props.theme.color.scales.N8};
  text-transform: uppercase;
  border-bottom-width: 2px;
  border-color: ${props => props.theme.color.scales.N5};
  padding: 0.75rem;
  letter-spacing: 0.05em;
`;

export const TableFooter = styled.div`
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: ${props => props.theme.color.primary.lightest};
  padding: 0.75rem 1rem;
`;
