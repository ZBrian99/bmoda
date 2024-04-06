import styled from 'styled-components';
import { useEffect } from 'react';
import { randomNumber } from '../utils/randomNumber';

const Container = styled.div`
	margin-bottom: 200rem;
`;
export const RandomTest = () => {
	useEffect(() => {
		for (let i = 0; i < 100; i++) {
			console.log('Número aleatorio:', randomNumber(-1230, 2024, 10));
		}
	}, []);
	return (
		<Container>
			<div></div>
		</Container>
	);
};
