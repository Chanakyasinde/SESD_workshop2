const chalk = require("chalk");

class CountCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("count <text>")
        .action((text) => this.countText(text));
    }

    countText(text) {
        const characters = text.length;

        const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;

        console.log(chalk.green(`Words: ${words}`));
        console.log(chalk.yellow(`Characters: ${characters}`));
    }
}

module.exports = CountCommand;

export {};