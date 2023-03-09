import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme; //guardando as propriedades de defaultTheme em uma variável

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
} //fica mais fácil de acessar as propriedades, integrando TS e styledcomponents => sobrescrever tipagens de uma biblioteca já existente
