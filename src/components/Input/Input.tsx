import { InputPlaceholder } from "../../types/inputPlaceholder";
import { InputStyled } from "./InputStyled";

interface IProp {
  label: InputPlaceholder;
}

export const Input = ({ label }: IProp) => {
  return <InputStyled placeholder={label} type="number" />;
};
