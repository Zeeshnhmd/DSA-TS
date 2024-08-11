// Method one
export const findMaxNumber = (arr: number[]): number => {
	return Math.max(...arr);
};

// Method Two
export const findMaxNumberM2 = (arr: number[]): number => {
	let max: number = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}

	return max;
};
