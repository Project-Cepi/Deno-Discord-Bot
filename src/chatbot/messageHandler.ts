import type { Message } from "discordeno";
import { createMessage } from './messageCreation.ts'

const writeEmoji = "📝"
const questionEmoji = "❓"

export async function handleMessage(processedText: string, originalMessage: Message) {

	await originalMessage.addReaction(writeEmoji)

	const response = await createMessage(processedText)

	if (!response) originalMessage.addReaction(questionEmoji)
	else await originalMessage.channel?.send({
		mentions: {
			repliedUser: false
		},
		replyMessageID: originalMessage.id,
		content: response
	})

	await originalMessage.removeReaction(writeEmoji)
	
}