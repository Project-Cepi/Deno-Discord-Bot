import { parse } from "toml";

export const data: Map<string, string[]> = new Map();

const greetings = parse(await Deno.readTextFile("data/greetings.toml"))

for (const key in Object.keys(greetings)) {

	console.log(key)

	if (!greetings[key]) continue;

	data.set(key, greetings[key] as string[])
}

data.forEach(item => console.log(item))