
import { getData } from './dataProcessor.ts';
import { closestMatch } from './utils/closestMatch.ts'
import { process } from './preprocessors/preprocessor.ts'

function cleanMessage(message: string): string {
	return message
}

/**
 * Creates a response from the given input
 * 
 * @param text The user input as a string
 * 
 * @return The response if any (null if none)
 */
export async function createMessage(text: string): Promise<string | null> {

	text = cleanMessage(text)

	const matchedKey = closestMatch(text, 
		[...getData().keys()] // iterator -> array
			.map(string => cleanMessage(string))
		)

	if (!matchedKey) { // make sure there is a key
		return null
	}

	const match = getData().get(matchedKey)

	if (!match) { // make sure there is data
		return null
	}

	return await process(match[Math.floor(Math.random() * match.length)]) // get a random match
	
}