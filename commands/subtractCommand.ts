const chalk = require("chalk");

class SubtractCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('subtract <n1> <n2>')
            .description("Subtract second number from first")
            .action((n1, n2) => this.subtract(n1, n2))
    }

    subtract(n1, n2) {
        if (isNaN(Number(n1)) || isNaN(Number(n2))) {
            console.log(chalk.red("Error: Please enter valid numbers"));
            return;
        }
        console.log(chalk.green("Result: " + (Number(n1) - Number(n2))));
    }
}

module.exports = SubtractCommand;

export { };