"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const chalk = require("chalk");
class PortCheckCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("port-check <port>")
            .action((port) => this.checkPort(port));
    }
    checkPort(port) {
        const server = net.createServer();
        server.once("error", () => {
            console.log(chalk.red(`Port ${port} is already in use`));
        });
        server.once("listening", () => {
            server.close();
            console.log(chalk.green(`Port ${port} is available`));
        });
        server.listen(port);
    }
}
module.exports = PortCheckCommand;
