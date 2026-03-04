"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios");
const chalk = require("chalk");
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .action(() => this.joke());
    }
    async joke() {
        try {
            const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
            console.log(chalk.green(res.data.setup));
            console.log(chalk.yellow(res.data.punchline));
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = JokeCommand;
