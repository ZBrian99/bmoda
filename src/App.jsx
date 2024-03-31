import { GlobalStyles } from "./styles/GlobalStyles"
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme.js';
import { ImageOverlay } from "./components/visuals/ImageOverlay.jsx";
export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div><ImageOverlay imagen="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZ3xlbnwwfDB8MHx8fDA%3D"/></div>
    </ThemeProvider>
  )
}

