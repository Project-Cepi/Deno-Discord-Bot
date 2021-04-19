import { startBot } from "discordeno/mod.ts";
import * as log from "logger";

import config from './config/index.ts'

const regex = /^(hey|ok)? ?cepi[, ]? */

startBot({
	token: config.token,
	intents: ["GUILDS", "GUILD_MESSAGES"],
	eventHandlers: {
		ready() {
			log.info("Successfully connected to gateway");
		},
		messageCreate(message) {
			if (regex.test(message.content) && !message.author.bot) {

				const content = message.content.replace(regex, "") // remove the cepi prefix

				message.reply(content)
			}
		},
	},
});