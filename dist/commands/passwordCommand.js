"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const chalk = require("chalk");
class PasswordCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("password <length>")
            .action((length) => this.generatePassword(length));
    }
    generatePassword(length) {
        const passwordLength = Number(length);
        if (isNaN(passwordLength) || passwordLength <= 0) {
            console.log(chalk.red("Please enter a valid number for password length"));
            return;
        }
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
        let password = "";
        const randomBytes = crypto.randomBytes(passwordLength);
        for (let i = 0; i < passwordLength; i++) {
            const index = randomBytes[i] % characters.length;
            password += characters[index];
        }
        console.log(chalk.green("Generated Password:"), chalk.yellow(password));
    }
}
module.exports = PasswordCommand;
