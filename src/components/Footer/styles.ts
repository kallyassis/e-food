import styled from "styled-components";
import { colors } from "../../styles";

export const Rodape = styled.footer`
  background-color: ${colors.beige};
  padding-top: 40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${colors.coral};
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
