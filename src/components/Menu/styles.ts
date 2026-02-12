import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  background-color: ${cores.coral};
  width: 320px;
  padding: 8px;
  margin-bottom: 32px;

  img {
    max-width: 304px;
    height: 167px;
    width: 100%;
  }
`;

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.creme};
`;

export const Descricao = styled.p`
  font-size: 14px;
  color: ${cores.creme};
  line-height: 22px;
  margin: 8px 0 8px;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
`;
