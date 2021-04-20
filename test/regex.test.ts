import { regex } from 'src/chatbot/regexVerifier.ts'
import { assertEquals, assertMatch, assertNotMatch } from "asserts";

const assertRegexReplacement = (input: string, expected: string = userInput) => {
	assertEquals(input.replace(regex, ""), userInput)
	assertMatch(input, regex)
}

const userInput = "how are you?"

Deno.test({
	name: "check if regex verifies matches correctly",
	fn: () => {

		assertRegexReplacement(`ok cepi ${userInput}`, userInput)
		assertRegexReplacement(`ok cepi, ${userInput}`, userInput)

		assertRegexReplacement(`hey cepi ${userInput}`, userInput)
		assertRegexReplacement(`hey cepi, ${userInput}`, userInput)

		assertRegexReplacement(`cepi ${userInput}`, userInput)
		assertRegexReplacement(`cepi, ${userInput}`, userInput)

		assertNotMatch("i love cepi", regex)

		assertNotMatch("what is cepi", regex)

	},
});