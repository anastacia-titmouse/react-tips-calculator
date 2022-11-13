import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  width: 40%;

  @media screen and (max-width: 743px) {
    gap: 20px;
    width: 60%;
    height: 50%;
  }

  @media screen and (max-width: 414px) {
    gap: 15px;
    width: 80%;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;

  @media screen and (max-width: 743px) {
    font-size: 24px;
  }

  @media screen and (max-width: 414px) {
    font-size: 24px;
  }
`;
export const Subtitle = styled.h5`
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  color: rgba(117, 108, 108, 0.57);

  @media screen and (max-width: 743px) {
    font-size: 24px;
  }

  @media screen and (max-width: 414px) {
    font-size: 24px;
  }
`;
export const Total = styled.p`
  font-weight: 600;
`;
