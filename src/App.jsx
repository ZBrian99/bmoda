import { GlobalStyles } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.js';
import { ImageOverlay } from './components/visuals/ImageOverlay.jsx';
import { RandomTest } from './components/RandomTest.jsx';
import { InViewAnimation } from './components/InViewAnimation.jsx';
import { TestCard } from './components/TestCard.jsx';
import { TestCardNew } from './components/TestCardNew.jsx';
import { HorizontalScroll } from './components/HorizontalScroll.jsx';
// import { ScrollExample } from './components/ScrollExample.jsx';
export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{/* <RandomTest /> */}
			{/* <InViewAnimation/> */}
			{/* <TestCardNew/> */}
			{/* <ScrollExample></ScrollExample> */}
			<HorizontalScroll></HorizontalScroll>
			{/* <ImageOverlay imagen='src/assets/images/boda.jpg' /> */}
		</ThemeProvider>
	);
};
