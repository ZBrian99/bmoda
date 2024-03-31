import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    
    font-family: ${({theme})=>theme.fonts.desc};
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({theme})=>theme.fonts.titulo};
  }
  
  p,input {
  font-family: ${({theme})=>theme.fonts.desc};
}
  span {
    font-family: ${({theme})=>theme.fonts.aux};
  }
  button{
    font-family: ${({theme})=>theme.fonts.sub};
  }
`;
