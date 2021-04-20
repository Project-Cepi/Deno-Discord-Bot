import type { Message } from "discordeno";
import { data } from './dataProcessor.ts';
import { matchPercentage } from './utils/closestMatch.ts'

export async function handleMessage(processedText: string, originalMessage: Message) {

	await originalMessage.addReaction("📝")

	const matchedKey = [...data.keys()].sort((a, b) => matchPercentage(a, processedText) - matchPercentage(b, processedText))[0]

	if (!matchedKey) {
		await originalMessage.reply("For some reason, no keys were found?")
		return;
	}

	const match = data.get(matchedKey)

	if (!match) {
		await originalMessage.reply("This shouldn't happen.")
		return;
	}

	const randomMatch = match[Math.floor(Math.random() * match.length)]; // "random match"

	await originalMessage.reply(randomMatch);
	
}