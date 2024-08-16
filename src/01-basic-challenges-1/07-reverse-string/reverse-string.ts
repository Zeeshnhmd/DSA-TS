export const reverseStringM1 = (str: string): string => {
	return str.split('').reverse().join('');
};

export const reverseStringM2 = (str: string): string => {
	let reversed: string = '';
	for (let i = str.length - 1; i >= 0; i--) {
		reversed += str[i];
	}
	return reversed;
};
