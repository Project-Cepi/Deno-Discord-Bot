import { config } from "https://deno.land/x/dotenv/mod.ts";

const configObject = config()

export default {
	prefix: configObject.PREFIX,
	token: configObject.TOKEN
}