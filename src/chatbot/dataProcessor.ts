import { parse } from "toml";

export const data: Map<string, string[]> = new Map();

const greetings = parse(await Deno.readTextFile("data/greetings.toml"))

Object.keys(greetings).forEach(key => {
	if (!greetings[key]) return;

	data.set(key, greetings[key] as string[])
})