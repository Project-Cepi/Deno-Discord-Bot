import { config } from "config";

const configObject = config()

export default {
	prefix: configObject.PREFIX,
	token: configObject.TOKEN
}