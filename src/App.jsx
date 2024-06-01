import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme.js';
import { HorizontalScroll } from './components/HorizontalScroll.jsx';
import { MenuCategory } from './components/MenuCategory.jsx';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<MenuCategory />
				<Routes>
					<Route path='/' element={<HorizontalScroll />} />
					<Route path='/boda' element={<HorizontalScroll />} />
					<Route path='/recuerdos' element={<HorizontalScroll />} />
					<Route path='/sitios' element={<HorizontalScroll />} />
					<Route path='/amigos' element={<HorizontalScroll />} />
					<Route path='/fotos' element={<HorizontalScroll />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
