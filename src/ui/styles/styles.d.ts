import defaultTheme from "./theme";

declare module "styled-components" {
  type TypeTheme = typeof defaultTheme;
  export interface DefaultTheme extends TypeTheme {}
}
