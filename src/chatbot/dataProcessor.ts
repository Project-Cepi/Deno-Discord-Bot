import { parse } from "toml";

export const data: Map<string, string[]> = new Map();

for await (const fileEntry of Deno.readDir("data")) {

	if (fileEntry.isDirectory) continue;

	const file = parse(await Deno.readTextFile("data/" + fileEntry.name))

	Object.keys(file).forEach(key => {
		if (!file[key]) return;

		data.set(key, file[key] as string[])
	})
}