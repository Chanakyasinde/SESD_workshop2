const { Command } = require("commander")

class CLI_Engine {
    program;

    constructor() {
        this.program = new Command()
        this.program.version("1.0.0")
        this.program.description("MyCLI - A custom command line tool built with Node + TypeScript")
    }

    registerCommands(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register()
        });
    }

    run() {
        this.program.parse();
    }
}

module.exports = CLI_Engine;