"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
class Greet_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("greet <name>")
            .description("Greet a user by name")
            .option("-u, --uppercase", "Greet in uppercase")
            .action((name, options) => this.sayHello(name, options));
    }
    sayHello(name, options) {
        let message = `Hello ${name}`;
        if (options.uppercase) {
            message = message.toUpperCase();
        }
        console.log(chalk.green(message));
    }
}
module.exports = Greet_Command;
