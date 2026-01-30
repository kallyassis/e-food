import styled from "styled-components";
import { cores } from "../../styles";

export const Card = styled.div`
  margin-top: 80px;
  position: relative;
`;

export const TextBox = styled.div`
  width: 456px;
  padding: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Titulo = styled.h3`
  color: ${cores.coral};
  font-size: 18px;
  margin-top: 8px;
`;

export const Rating = styled.span`
  color: ${cores.coral};
  font-size: 18px;
  font-weight: bold;
  padding-right: 8px;
`;

export const Star = styled.img`
  width: 21px;
  height: 21px;
`;

export const Descricao = styled.p`
  color: ${cores.coral};
  font-size: 14px;
  line-height: 22px;
  margin: 16px 0 16px;
`;

export const BotaoLink = styled.a`
  width: 82px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  color: ${cores.creme};
  background-color: ${cores.coral};
  padding: 4px 6px;
`;

export const Infos = styled.div`
display: flex;
gap: 8px;
position: absolute;
top: 16px;
right: 50px;
`