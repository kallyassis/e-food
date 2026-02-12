import styled from "styled-components";
import { cores } from "../../styles";

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
  display: flex;
  height: 344px;
  padding: 32px;
  background-color: ${cores.coral};
  width: 100%;
  position: relative;
  z-index: 1;
`;

export const Image = styled.img`
  width: 280px;
  height: 280px;
  margin-right: 24px;
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
  color: ${cores.creme};

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`;

export const Button = styled.button`
  width: 218px;
  padding: 4px 6px;
  margin-top: 16px;
  font-size: 14px;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
  font-weight: bold;
`;
