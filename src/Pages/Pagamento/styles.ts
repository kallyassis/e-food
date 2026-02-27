import styled from "styled-components";
import { colors } from "../../styles";

type GrupInputProps = {
  maxWidth?: string;
};

export const BoxInput = styled.div`
  margin-bottom: 24px;
  label {
    display: block;
    color: ${colors.cream};
    font-size: 14px;
    font-weight: bold;
    margin: 8px 0;
  }

  input {
    width: 100%;
    height: 32px;
    border: 1px solid ${colors.coral};
    padding: 8px;
    outline: none;
  }
`;

export const GrupInput = styled.div`
  display: flex;
  gap: 30px;
`;

export const SmallBoxInput = styled.div<GrupInputProps>`
  max-width: ${(props) => props.maxWidth || "auto"};
  width: 90%;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.coral};
  border: none;
  cursor: pointer;
`;
