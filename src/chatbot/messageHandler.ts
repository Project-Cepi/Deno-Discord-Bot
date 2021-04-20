import type { Message } from "discordeno";

export async function handleMessage(processedText: string, originalMessage: Message) {

	await originalMessage.addReaction("📝")

	await originalMessage.reply(processedText);
}