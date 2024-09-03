import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PageButton = styled.button<{
  active?: boolean,
  borderradius: string,
  bgcolor?: string,
  hoverbgcolor?: string,
  activecolor?: string,
  disablecolor?: string,
  disablebgcolor?: string,
  disablehovercolor?: string
}>`
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  border-radius: ${(props) => (props.borderradius)};
  background-color: ${(props) => (props.active ? props.bgcolor : props.disablebgcolor)};
  color: ${(props) => (props.active ? props.activecolor : props.disablecolor)};
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) => (props.active ? props.hoverbgcolor : props.disablehovercolor)};
  }
`;