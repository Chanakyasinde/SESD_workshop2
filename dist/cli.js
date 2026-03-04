#!/usr/bin/env node
const cli_engine = require("./cli_engine/cli_engine");
const greet_command = require("./commands/greetCommand");
const add_command = require("./commands/addCommand");
const subtract_command = require("./commands/subtractCommand");
const joke_command = require("./commands/jokeCommand");
const multiply_command = require("./commands/multiplyCommand");
const division_command = require("./commands/divisionCommand");
const time_command = require("./commands/timeCommand");
const random_command = require("./commands/randomCommand");
const count_command = require("./commands/countCommand");
const password_command = require("./commands/passwordCommand");
const check_port_command = require("./commands/portCheckCommand");
const engine = new cli_engine();
engine.registerCommands([greet_command, add_command, subtract_command, joke_command, multiply_command, division_command, time_command, random_command, count_command, password_command, check_port_command]);
engine.run();
