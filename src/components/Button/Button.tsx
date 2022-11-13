import { ButtonStyled } from "./ButtonStyled";

interface IProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IProps) => {
  return (
    <ButtonStyled disabled={isDisabled} type="submit">
      Ohhhoooo 🍻
    </ButtonStyled>
  );
};
