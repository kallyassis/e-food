import styled from "styled-components";
import { cores } from "../../styles";

export const Container = styled.div`
  padding: 32px 0;
  background-color: ${cores.creme};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;
