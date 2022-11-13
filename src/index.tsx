import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Container } from "./styles/containerStyled";
import { Global } from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Global />
    <Container>
      <App />
    </Container>
  </>
);
