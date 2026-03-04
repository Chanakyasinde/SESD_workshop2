class MultiplyCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('multiply <n1> <n2>')
            .action((n1, n2) => this.multiply(n1, n2));
    }
    multiply(n1, n2) {
        console.log(Number(n1) * Number(n2));
    }
}
module.exports = MultiplyCommand;
