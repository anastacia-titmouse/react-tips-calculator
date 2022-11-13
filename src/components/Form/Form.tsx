import { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, Subtitle, Title, Total } from "./FormStyled";

export const Form = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [bill, setBill] = useState<string>("");
  const [persons, setPersons] = useState<string>("");
  const [total, setTotal] = useState<number>(0);
  const [tips, setTips] = useState<string>("10");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalTips = (+bill * +tips) / 100;
    const totalBill = +bill + totalTips;
    setTotal(+(totalBill / +persons));
  };
  useEffect(() =>
    bill && persons && tips && +bill > 0
      ? setIsDisabled(false)
      : setIsDisabled(true)
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input value={bill} onChange={setBill} label="Enter bill" />
      <Input value={persons} onChange={setPersons} label="Enter persons" />
      <CustomSelect value={tips} onSelect={setTips} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
