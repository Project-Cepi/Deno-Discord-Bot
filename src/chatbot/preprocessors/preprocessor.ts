import { dadJokePreProcessor } from './dadJokePreprocessor.ts'

export async function process(str: string): Promise<string> {
	return await dadJokePreProcessor(str)
}

export type PreProcessor = (str: string) => Promise<string>;