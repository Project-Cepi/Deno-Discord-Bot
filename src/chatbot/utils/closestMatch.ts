import fuse from 'fuse';

export function matchPercentage(first: string, second: string): number {
	if (first.length == 0) return first.length
	if (second.length == 0) return second.length 

	first = first.toLowerCase()
	second = second.toLowerCase()

	const matrix = [];

	// increment along the first column of each row
	for (let i = 0; i <= second.length; i++){
		matrix[i] = [i];
	}

	// increment each column in the first row
	for (let j = 0; j <= first.length; j++){
		matrix[0][j] = j;
	}

	// Fill in the rest of the matrix
	for (let i = 1; i <= second.length; i++){
		for (let j = 1; j <= first.length; j++){
			if (second.charAt(i - 1) == first.charAt(j - 1)){
				matrix[i][j] = matrix[i-1][j-1];
			} else {
				matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
					Math.min(matrix[i][j-1] + 1, // insertion
					matrix[i-1][j] + 1)); // deletion
			}
		}
	}

	return matrix[second.length][first.length];
}