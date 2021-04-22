import { parse } from "toml";
import * as log from "logger";

export const data: Map<string, string[]> = new Map();

for await (const fileEntry of Deno.readDir("data")) {

	if (fileEntry.isDirectory) continue;

	const file = parse(await Deno.readTextFile("data/" + fileEntry.name))

	log.debug("loading " + fileEntry.name)

	Object.keys(file).forEach(key => {
		if (!file[key]) return;

		data.set(key, file[key] as string[])
	})
}