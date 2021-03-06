import { startBot, botID } from "discordeno";
import { handleMessage } from './chatbot/messageHandler.ts';
import * as log from "logger";

import config from './config/index.ts'
import { regex } from './chatbot/regexVerifier.ts'

startBot({
	token: config.token,
	intents: ["GUILDS", "GUILD_MESSAGES"],
	eventHandlers: {
		ready() {
			log.info(`Successfully connected ${botID} to gateway`);
		},
		async messageCreate(message) {

			if (
				(regex.test(message.content) && !message.author.bot)
				|| message.mentions.includes(botID)
			) {
				const content = message.content.replace(regex, "") // remove the cepi prefix

				await handleMessage(content, message)
			}
		},
	},
});