#!/usr/bin/env node

const cli_engine = require("./cli_engine/cli_engine")
const greet_command = require("./commands/greetCommand")
const add_command = require("./commands/addCommand")
const subtract_command = require("./commands/subtractCommand")
const joke_command = require("./commands/jokeCommand")

const engine = new cli_engine()

engine.registerCommands([greet_command, add_command, subtract_command, joke_command])

engine.run()