import { regex } from 'src/chatbot/regexVerifier.ts'
import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";

const userInput = "how are you?"

Deno.test({
	name: "check if regex verifies matches correctly",
	fn: () => {

		const assertRegexMatches = (input: string, expected: string = userInput) => assertEquals(input.replace(regex, ""), userInput)

		assertRegexMatches(`ok cepi ${userInput}`, userInput)
		assertRegexMatches(`ok cepi, ${userInput}`, userInput)

		assertRegexMatches(`hey cepi ${userInput}`, userInput)
		assertRegexMatches(`hey cepi, ${userInput}`, userInput)

		assertRegexMatches(`cepi ${userInput}`, userInput)
		assertRegexMatches(`cepi, ${userInput}`, userInput)

	},
});