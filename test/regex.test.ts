import { regex } from 'src/chatbot/regexVerifier.ts'
import { assertEquals, assertMatch, assertNotMatch } from "asserts";

const assertRegexReplacement = (input: string) => {
	assertEquals(input.replace(regex, ""), userInput)
	assertMatch(input, regex)
}

const userInput = "how are you?"

Deno.test({
	name: "check if regex verifies matches correctly",
	fn: () => {

		assertRegexReplacement(`ok cepi ${userInput}`)
		assertRegexReplacement(`ok cepi, ${userInput}`)

		assertRegexReplacement(`hey cepi ${userInput}`)
		assertRegexReplacement(`hey cepi, ${userInput}`)

		assertRegexReplacement(`cepi ${userInput}`)
		assertRegexReplacement(`cepi, ${userInput}`)

		assertNotMatch("i love cepi", regex)

		assertNotMatch("what is cepi", regex)

	},
});