import styled from "styled-components";
import { colors } from "../../styles";

type InputGrupMaxProps = {
  maxWidth?: string;
};

export const GrupInput = styled.div`
  margin-bottom: 24px;
  label {
    display: block;
    font-size: 14px;
    color: ${colors.cream};
    margin: 8px 0;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid ${colors.coral};
  }
`;

export const BoxInput = styled.div`
  display: flex;
  gap: 34px;
`;

export const Label = styled.div<InputGrupMaxProps>`
  max-width: ${(props) => props.maxWidth || "auto"};
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  color: ${colors.coral};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
