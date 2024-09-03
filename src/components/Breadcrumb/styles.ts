import styled from 'styled-components';

export const BreadCrumbContainer = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }
`;

export const BreadCrumbSeparator = styled.span`
  margin: 0 5px;
`;

export const BreadCrumbItem = styled.li`
  margin-right: 5px;
  font-family:  Poppins, Helvetica, "sans-serif";

  &:last-child {
    margin-right: 0;
  }

  a {
    text-decoration: none;
    color: #007bff;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;