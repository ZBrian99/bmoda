import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Hola</div>
    </ThemeProvider>
  )
}

