class DivisionCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
        .command("divide <n1> <n2>")
        .action((n1, n2) => this.divide(n1, n2))
    }

    divide(n1, n2) {
        console.log(Number(n1) / Number(n2))
    }
}

module.exports = DivisionCommand;