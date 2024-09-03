import Input from "../Input";
import Tag from "../Tag";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { DropdownSearchProps, InputProps, TagProps } from "./interfaces";

export const Container = styled.div<DropdownSearchProps>`
  width: ${(props) => props.containerwidth || "12.5rem"};
  background-color: ${(props) => props.containebgcolor};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const InputWrapper = styled.div<InputProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  gap: 0.25rem;

  &:hover {
    border: 0.0775rem solid #333333;
    border-radius: 0.5rem;
  }

  input {
    padding-left: ${(props) => props.paddingleft || "1rem"};
  }
`;

export const ExistingInput = styled(Input)<InputProps>`
  background-color: ${(props) => props.backgroundcolor || "transparent"};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderradius || "0.5rem"};
  padding: ${(props) => props.padding || "0.5rem 1rem"};
  padding-left: 4rem;
  border: ${(props) => props.border || "none"};
  width: ${(props) => props.width || "100%"};
  outline: ${(props) => props.outlineinput || "none"};

  &:focus {
    outline: ${(props) => props.outlinefocus || "none"};
  }
`;

export const ExistingTag = styled(Tag)<TagProps>`
  justify-content: center;
  align-items: center;
  display: ${(props) => props.display || "flex"};
  font-weight: ${(props) => props.fontweight};
  font-size: ${(props) => props.fontsizetag || "12px"};
  font-family: Poppins, Helvetica, "sans-serif";
  border-radius: 0.5rem;
  border: none;
  transition: background-color 0.3s ease;
  width: ${(props) => props.width || "6rem"};
  height: ${(props) => props.height || "1.5rem"};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgcolor || "#000"};
  color: ${(props) => props.textcolor || "#333333"};
  margin-left: 0.5rem;
  padding-left: 0.5rem;

  &:hover {
    border: none;
  }

  .remove-button {
    display: flex;
    font-size: 13px;
    margin-left: ${(props) => props.marginleftremovebutton || "auto"};
    margin-right: 0.25rem;
    color: #333333;

    &:hover {
      background-color: ${(props) => props.hoverbgcolorremovebutton || "red"};
      color: white;
      border-radius: 0.25rem;
    }
  }
`;

export const ClearAllTag = styled.span<DropdownSearchProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  cursor: default;
  display: flex;
  align-items: center;
  color: #cccccc;
  font-size: ${(props) => props.fontsizeclearall || "16px"};
`;

export const ClearAllIcon = styled(FaTimes)`
  margin-right: 2.65rem;
  transition: 0.2s;

  &:hover {
    color: #2774b3;
  }
`;

export const Separator = styled.div`
  position: absolute;
  right: 1.875rem;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 90%;
  background-color: #ccc;
`;

export const ArrowIconWrapper = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.25rem;
  cursor: default;
  transition: 0.5s;
  color: #cccccc;

  &:hover {
    color: #2774b3;
  }
`;

export const List = styled.ul`
  position: absolute;
  font-family: Poppins, Helvetica, "sans-serif";
  width: 100%;
  max-height: 9.375rem;
  overflow-y: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 9999;
  border-radius: 0.5rem;

  /* Estilizando a barra de rolagem */
  &::-webkit-scrollbar {
    width: 0.5rem; /* Largura da barra de rolagem */
  }

  /* Estilizando o polegar da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #bbb; /* Cor do polegar */
    border-radius: 0.5rem; /* Bordas arredondadas do polegar */
  }

  /* Mudando a cor da barra de rolagem quando o mouse está sobre ela */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999; /* Cor do polegar quando hover */
  }

  /* Estilizando a borda da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 0.5rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 0.5rem;

  &:hover {
    background-color: #f0f0f0;
    color: #2774b3;
    font-weight: bold;
    font-size: 16px;
  }
`;
