import Fuse from 'fuse';

const unknownResponse = [
	"I didn't get that.",
	"What?",
	"Sorry, I didn't catch that.",
	"Can you repeat that differently?"
]

const options = {
	keys: [
		"title",
	]
}

export function closestMatch(input: string, possibleStrings: string[]): string {

	const fuse = new Fuse(possibleStrings, options, null)

	const searchResult = fuse.search(input)

	if (searchResult.length === 0)
		return unknownResponse[Math.floor(Math.random() * unknownResponse.length)]

	return searchResult[0].item
}