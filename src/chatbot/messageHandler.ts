import type { Message } from "discordeno";
import { data } from './dataProcessor.ts';

export async function handleMessage(processedText: string, originalMessage: Message) {

	await originalMessage.addReaction("📝")

	await originalMessage.reply(processedText);

	data
	
}