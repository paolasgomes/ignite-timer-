import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Button } from "./components/Button";
import { Router } from "./components/Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button color="primary" />

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};

/*Syled components => estilização utilizando javascript
Só usamos a extensão tsX ou jsX quando existe componente dentro, ou seja, HTML como return */
