import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { ImageOverlay } from "./components/visuals/ImageOverlay.jsx";
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <ImageOverlay imagen="src/assets/images/boda.jpg" />
      </div>
    </ThemeProvider>
  )
}

