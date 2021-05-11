import Fuse from 'fuse';

const options = {
	keys: [
		"title",
	]
}

export function closestMatch(input: string, possibleStrings: string[]): string {

	const fuse = new Fuse(possibleStrings, options, null)

	const searchResult = fuse.search(input)

	if (searchResult.length === 0) return "aaaaaaaaaaaa"

	return searchResult[0].item
}