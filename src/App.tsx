import { AppWrapper } from "./AppStyled";
import { Form } from "./components/Form/Form";
import { ReactComponent as Icon } from "./assets/svg/icon.svg";
import { IconStyled } from "./assets/svg/IconStyled";

export const App = () => {
  return (
    <AppWrapper>
      <IconStyled>
        <Icon />
      </IconStyled>
      <Form />
    </AppWrapper>
  );
};
