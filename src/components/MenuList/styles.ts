import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  padding: 56px 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  list-style: none;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.72);
  }
`;

export const ModaContent = styled.div`
  max-width: 1024px;
  height: 310px;
  display: flex;
  padding: 32px;
  background-color: ${colors.coral};
  width: 100%;
  position: relative;
  z-index: 1;

  div {
    max-width: 280px;
    margin-right: 24px;
  }
`;

export const Image = styled.img`
  display: block;
  height: 240px;
  width: 100%;
`;

export const Close = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.cream};

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0 40px 0;
    width: 640px;
  }
`;

export const Button = styled.button`
  width: 218px;
  padding: 4px 6px;
  margin-top: 30px;
  font-size: 14px;
  color: ${colors.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
