import styled from "styled-components";
import { cores } from "../../styles";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.73;
`;

export const CartContaner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${cores.coral};
  padding: 32px 8px 0 8px;
  z-index: 1;

  p {
    padding-top: 40px;
    color: ${cores.creme};
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 16px;

    span {
      margin-left: 204px;
    }
  }
`;

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.creme};
  padding: 8px 8px 12px;
  margin-bottom: 16px;
  position: relative;

  h3 {
    font-size: 18px;
    color: ${cores.coral};
    margin-bottom: 16px;
  }

  span {
    color: ${cores.coral};
    font-size: 14px;
  }
`;

export const ImageMain = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 8px;
`;

export const Lixeria = styled.img`
  width: 16px;
  height: 16px;
  object-fit: cover;
  position: absolute;
  top: 76px;
  right: 8px;
`;

export const ButtonCart = styled.button`
  display: block;
  width: 100%;
  font-size: 14px;
  padding: 4px 0;
  font-weight: bold;
  color: ${cores.coral};
  border: none;
  cursor: pointer;
`;
