import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 20px;
  outline: none;
  border: none;

  &::placeholder {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    color: rgba(117, 108, 108, 0.6);
  }
`;
