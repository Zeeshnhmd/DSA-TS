// Not Case sensetive count occurrences
export const countOccurrences = (str: string, char: string): number => {
	let count: number = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}
	return count;
};

// Case sensetive count occurrences
export const caseSenseCountOccurrences = (
	str: string,
	char: string
): number => {
	let value = str.toLowerCase();
	let count: number = 0;
	for (let i = 0; i < value.length; i++) {
		if (value[i] === char) {
			count++;
		}
	}
	return count;
};

// Using split method
export const splitMethod = (str: string, char: string): number =>
	str.split(char).length - 1;
