import { startBot } from "https://deno.land/x/discordeno/mod.ts";

const prefix = "t!"

startBot({
	token: "NzI2MTA1MzY5ODMwNzUyMzU4.XvYcUg.2R23IfQh8rCefRk7Xfub8rXyf90",
	intents: ["GUILDS", "GUILD_MESSAGES"],
	eventHandlers: {
		ready() {
			console.log("Successfully connected to gateway");
		},
		messageCreate(message) {
			if (message.startsWith(prefix)) {

				const command = message.substring(prefix.length)

				message.reply("Pong using Discordeno!");
			}
		},
	},
});