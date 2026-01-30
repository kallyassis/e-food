import styled from "styled-components";
import fundo from "../../assets/fundo.png";
import { cores } from "../../styles";

export const Container = styled.header`
  height: 384px;
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;

  .container{
    position: relative;
  }
`;

export const Image = styled.img`
position: absolute;
top: 64px;
right: 450px;
`

export const TextoInicial = styled.p`
  color: ${cores.coral};
  font-size: 36px;
  font-weight: bold;
  width: 539px;
  position: absolute;
  top: 260px;
  right: 243px;
  padding-bottom: 40px;
  text-align: center;
`