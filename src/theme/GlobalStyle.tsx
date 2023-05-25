import {createGlobalStyle} from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    font-family: 'Ubuntu',sans-serif;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
  #root {
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  `