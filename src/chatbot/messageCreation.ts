
import { data } from './dataProcessor.ts';
import { matchPercentage } from './utils/closestMatch.ts'

export function createMessage(text: string): string | null {
	const matchedKey = [...data.keys()].sort((a, b) => matchPercentage(a, text) - matchPercentage(b, text))[0]

	if (!matchedKey) {
		return null
	}

	const match = data.get(matchedKey)

	if (!match) {
		return null
	}

	return match[Math.floor(Math.random() * match.length)] // "random match"
	
}