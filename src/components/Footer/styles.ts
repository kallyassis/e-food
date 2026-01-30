import styled from "styled-components";
import { cores } from "../../styles";

export const Rodape = styled.footer`
  background-color: ${cores.bege};
  padding-top: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${cores.coral};
    width: 470px;
    font-size: 10px;
    text-align: center;
    margin: 80px 0 40px;
    line-height: 15px;
  }
`;

export const Logo = styled.img`
  width: 125px;
`;

export const BoxUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  margin-top: 32px;
`;
