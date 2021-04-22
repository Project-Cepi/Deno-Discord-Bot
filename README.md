# Discord Bot
Discord bot, written in deno.

## Start

To start the bot, just do `deno run --allow-net --allow-read=.env.defaults,.env,data --import-map import_map.json src/bot.ts`

| Permission                              | Why is it needed?                         |
|-----------------------------------------|-------------------------------------------|
| --allow-net                             | To load APIs and libraries                |
| --allow-read=.env                       | To read .env for TOKEN and PREFIX         |
| --allow-read=.env.defaults              | To read .env.defaults for PREFIX fallback |
| --allow-read=data                       | To read all conversation data             |

## Test

To test all of the bot's functions, do `deno test --import-map import_map.json test/`