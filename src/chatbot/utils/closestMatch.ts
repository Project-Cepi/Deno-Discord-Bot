import Fuse from 'fuse';

const options = {
	keys: [
		"title",
	]
}

export function closestMatch(input: string, possibleStrings: string[]): string {

	const fuse = new Fuse(possibleStrings, options, null)

	console.log(fuse.search(input))

	return fuse.search(input)[0].item
}