import { colors } from "./../../styles";
import { Link } from "react-router-dom";
import styled from "styled-components";

import fundo from "../../assets/fundo.png";

interface ImageProps {
  $background: string;
}

export const Container = styled.header`
  padding: 64px 0 0;
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
  color: ${colors.coral};
  font-weight: bold;
  cursor: pointer;
`;

export const Image = styled.div<ImageProps>`
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 65px;

  background-image: url(${(props) => props.$background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .container {
    position: relative;
  }
`;

export const Linnk = styled(Link)`
  text-decoration: none;
`;
export const Box = styled.div`
  position: relative;
`;
export const TextType = styled.p`
  position: absolute;
  top: 24px;
  left: 333px;
  z-index: 1;
  font-size: 32px;
  font-weight: 100;
  color: ${colors.cream};
`;
export const NameRestaurant = styled.p`
  position: absolute;
  top: 230px;
  left: 333px;
  z-index: 1;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.cream};
`;
