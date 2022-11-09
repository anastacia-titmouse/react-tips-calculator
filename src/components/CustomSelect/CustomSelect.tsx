import { CustomSelectStyled } from "./CustomSelectStyled";

export const CustomSelect = () => {
  return (
    <CustomSelectStyled defaultValue={"10%"}>
      <option>10%</option>
      <option>15%</option>
      <option>20%</option>
    </CustomSelectStyled>
  );
};
