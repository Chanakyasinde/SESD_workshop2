const chalk = require("chalk");

class MultiplyCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('multiply <n1> <n2>')
            .description("Multiply two numbers")
            .action((n1, n2) => this.multiply(n1, n2))
    }

    multiply(n1, n2) {
        if (isNaN(Number(n1)) || isNaN(Number(n2))) {
            console.log(chalk.red("Error: Please enter valid numbers"));
            return;
        }
        console.log(chalk.green("Result: " + (Number(n1) * Number(n2))));
    }
}

module.exports = MultiplyCommand;

export {};
