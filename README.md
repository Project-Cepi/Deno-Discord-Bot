# Discord Bot
Discord bot, written in deno.

## Start

To start the bot, just do `deno run --allow-net=deno.land,gateway.discord.gg,discord.com --allow-read=.env.defaults,.env --import-map import_map.json src/bot.ts`

| Permission                                           | Why is it needed?                         |
|------------------------------------------------------|-------------------------------------------|
| --allow-net=[deno.land](deno.land)                   | To load libraries from deno               |
| --allow-net=[gateway.discord.gg](gateway.discord.gg) | To connect to discord (gateway)           |
| --allow-net=[discord.com](discord.com)               | To connect to discord (hooks)             |
| --allow-read=.env                                     | To read .env for TOKEN and PREFIX         |
| --allow-read=.env.defaults                            | To read .env.defaults for PREFIX fallback |

## Test

To test all of the bot's functions, do `deno test --import-map import_map.json test/`