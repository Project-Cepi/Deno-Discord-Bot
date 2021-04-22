import type { PreProcessor } from './preprocessor.ts'

export const dadJokePreProcessor: PreProcessor = async function(str: string) {

	const response = await fetch("https://icanhazdadjoke.com/", {
		headers: { 
			"Accept": "application/json"
		}
	})

	const json = await response.json()

	const joke = json.joke

	return str.replace("{joke}", joke)
}