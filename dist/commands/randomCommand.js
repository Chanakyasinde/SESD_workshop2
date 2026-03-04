"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class RandomCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("random <min> <max>")
            .description("Generate a random number between min and max")
            .action((min, max) => this.generate(min, max));
    }
    generate(min, max) {
        min = Number(min);
        max = Number(max);
        if (isNaN(min) || isNaN(max)) {
            console.log(chalk.red("Please enter valid numbers"));
            return;
        }
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(chalk.green(`Random Number: ${randomNumber}`));
    }
}
module.exports = RandomCommand;
