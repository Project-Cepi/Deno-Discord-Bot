import type { PreProcessor } from './preprocessor.ts'

export const dadJokePreProcessor: PreProcessor = function(str: string) {
	return str.replace("{joke}", "")
}