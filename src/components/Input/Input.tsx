import { ChangeEvent } from "react";
import { inputPlaceholder } from "../../types/inputPlaceholder";
import { InputStyled } from "./InputStyled";

interface IProps {
  value: string;
  onChange: (value: string) => void;
  label: inputPlaceholder;
}

export const Input = ({ value, onChange, label }: IProps) => {
  const handleValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <InputStyled
      value={value}
      onChange={handleValue}
      placeholder={label}
      type="number"
    />
  );
};
