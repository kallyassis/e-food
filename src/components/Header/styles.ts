import { Link } from "react-router-dom";
import styled from "styled-components";
import { cores } from "../../styles";

import fundo from "../../assets/fundo.png";

export const Container = styled.header`
  padding: 64px 0 64px;
  background-image: url(${fundo});
`;

export const BoxUl = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.li`
  font-size: 18px;
  color: ${cores.coral};
  font-weight: bold;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Linnk = styled(Link)`
  text-decoration: none;
`;
