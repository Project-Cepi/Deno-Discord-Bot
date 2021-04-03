import { startBot } from "https://deno.land/x/discordeno/mod.ts";
import * as log from "https://deno.land/std@0.92.0/log/mod.ts";

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