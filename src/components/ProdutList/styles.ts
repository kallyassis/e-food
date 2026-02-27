import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.div`
  padding: 32px 0;
  background-color: ${colors.cream};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`;
