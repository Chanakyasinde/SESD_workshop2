class SubtractCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('subtract <n1> <n2>')
            .action((n1, n2) => this.subtract(n1, n2));
    }
    subtract(n1, n2) {
        console.log(Number(n1) - Number(n2));
    }
}
module.exports = SubtractCommand;
