import styled from 'styled-components';
import { TabProps } from './types';

export const TabContainer = styled.div<TabProps>`
  display: flex;
  flex-direction: column;
  font-family: Poppins, Helvetica, "sans-serif";
  align-items: ${(props) => props.alignitems};
  color: ${(props) => props.containertextcolor};
`;

export const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 5px;
`;

export const TabListItem = styled.li<TabProps>`
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? props.activebgcolor || '#2774b3' : props.bgcolor || '#d6e0f7')};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid transparent;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.37);
  margin-left: 10px;
  margin-right: 10px;
  font-family: Poppins, Helvetica, "sans-serif";
  letter-spacing: 1px;
  color: ${(props) => (props.active ? '#FFF' : props.textcolor || '#000')};

  &:hover {
    background-color: ${(props) => (props.active ? props.activebgcolor || '#2774b3' : props.hoverbgcolor || props.bgcolor || '#d6e0f7')};
    color: ${(props) => (props.active ? '#FFF' : props.textcolor || '#000')};
  }
`;

export const TabContent = styled.div`
  padding: 1.875rem;
`;