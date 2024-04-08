export const randomNumber = (arg1 = 0, arg2, arg3) => {
	let min, max, decimals;

	if (typeof arg1 === 'number') {
		if (typeof arg2 === 'number') {
			min = arg1;
			max = arg2;
			decimals = typeof arg3 === 'number' ? arg3 : 0;
		} else {
			min = 0;
			max = arg1;
		}
		decimals = typeof arg3 === 'number' ? arg3 : 0;
	} else {
		throw new Error('Los valores deben ser numeros');
	}

	if (min >= max) {
		throw new Error('El valor de min debe ser menor que el valor de max');
	}

	const randomValue = Math.random() * (max - min + 1) + min;
	const roundedValue = decimals ? randomValue.toFixed(decimals) : Math.floor(randomValue);

	return roundedValue;
};
