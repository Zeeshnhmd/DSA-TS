import {
	countOccurrences,
	caseSenseCountOccurrences,
	splitMethod,
} from './count-occurrences';

const result = countOccurrences('hellLo world', 'l');
const result2 = caseSenseCountOccurrences('hellLo world', 'l');
const result3 = splitMethod('hellLo world', 'l');

console.log(result, result2, result3);
