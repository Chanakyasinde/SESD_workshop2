const chalk = require("chalk");

class TimeCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("time")
            .description("Display the current time")
            .action(() => this.showTime())
    }

    showTime() {
        const now = new Date();

        const time = now.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

        console.log(chalk.cyan(`Time: ${time}`));
    }
}

module.exports = TimeCommand;

export { };