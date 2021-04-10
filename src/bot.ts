import { startBot } from "discordeno/mod.ts";
import * as log from "logger";

import config from './config/index.ts'

startBot({
	token: config.token,
	intents: ["GUILDS", "GUILD_MESSAGES"],
	eventHandlers: {
		ready() {
			log.info("Successfully connected to gateway");
		},
		messageCreate(message) {
			if (message.content.startsWith(config.prefix)) {

				const command = message.content.substring(config.prefix.length)

				console.log(command)
			}
		},
	},
});