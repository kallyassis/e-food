import styled from "styled-components";
import { colors } from "../../styles";

export const CartContaner = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-visible {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
`;

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.coral};
  padding: 32px 8px 0 8px;
  z-index: 1;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${colors.cream};
    margin-bottom: 16px;
  }
`;
