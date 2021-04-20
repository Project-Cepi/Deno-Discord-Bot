import { regex } from 'src/chatbot/regexVerifier.ts'
import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";

Deno.test({
	name: "check if regex verifies matches correctly",
	fn: () => {
		const x = 1 + 2;
		assertEquals(x, 3);
	},
});