import { startBot } from "https://deno.land/x/discordeno/mod.ts";
import * as log from "https://deno.land/std@0.92.0/log/mod.ts";

import { config } from "https://deno.land/x/dotenv/mod.ts";

const prefix = config().PREFIX

startBot({
	token: config().TOKEN,
	intents: ["GUILDS", "GUILD_MESSAGES"],
	eventHandlers: {
		ready() {
			log.info("Successfully connected to gateway");
		},
		messageCreate(message) {
			if (message.content.startsWith(prefix)) {

				const command = message.content.substring(prefix.length)

				console.log(command)
			}
		},
	},
});