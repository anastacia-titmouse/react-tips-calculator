import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm } from "./FormStyled";

export const Form = () => {
  return (
    <StyledForm>
      <h1>Welcome to App</h1>
      <h5>Let’s go calculate your tips</h5>
      <Input label={"Enter bill"} />
      <Input label={"Enter persons"} />
      <CustomSelect />
      <p>Total: 0.00$</p>
      <Button />
    </StyledForm>
  );
};
