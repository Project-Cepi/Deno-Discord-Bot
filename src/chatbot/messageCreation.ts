
import { data } from './dataProcessor.ts';
import { matchPercentage } from './utils/closestMatch.ts'

/**
 * Creates a response from the given input
 * 
 * @param text The user input as a string
 * 
 * @return The response if any (null if none)
 */
export function createMessage(text: string): string | null {
	const matchedKey = [...data.keys()] // iterator -> array
		.sort((a, b) => matchPercentage(a, text) - matchPercentage(b, text)) // sort to closest text
		[0] // get first element

	if (!matchedKey) { // make sure there is a key
		return null
	}

	const match = data.get(matchedKey)

	if (!match) { // make sure there is data
		return null
	}

	return match[Math.floor(Math.random() * match.length)] // get a random match
	
}