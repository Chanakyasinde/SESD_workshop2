const chalk = require("chalk");

class AddCommand {
    program;
    constructor(program) {
        this.program = program
    }

    register() {
        this.program
            .command('add <n1> <n2>')
            .description("Add two numbers together")
            .action((n1, n2) => this.add(n1, n2))
    }

    add(n1, n2) {
        if (isNaN(Number(n1)) || isNaN(Number(n2))) {
            console.log(chalk.red("Error: Please enter valid numbers"));
            return;
        }
        console.log(chalk.green("Result: " + (Number(n1) + Number(n2))));
    }
}

module.exports = AddCommand;

export {}