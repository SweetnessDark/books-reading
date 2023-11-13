import { createGlobalStyle } from "styled-components";

import AbrilFatface from "../assets/fonts/AbrilFatface/AbrilFatface-Regular.ttf";
import Montserrat from "../assets/fonts/Montserrat";
import Roboto from "../assets/fonts/Roboto";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "AbrilFatface";
    src: local("AbrilFatface"), url(${AbrilFatface}) format("truetype");
  }
  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"), url(${Montserrat}) format("truetype");
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"), url(${Roboto}) format("truetype");
  }
`;

export default FontStyles;
