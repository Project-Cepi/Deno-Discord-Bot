import type { Message } from "discordeno";
import { createMessage } from './messageCreation.ts'

const writeEmoji = "📝"
const questionEmoji = "❓"

export async function handleMessage(processedText: string, originalMessage: Message) {

	await originalMessage.addReaction(writeEmoji)

	const response = createMessage(processedText)

	if (!response) originalMessage.addReaction(questionEmoji)
	else await originalMessage.reply(response)

	await originalMessage.removeReaction(writeEmoji)
	
}