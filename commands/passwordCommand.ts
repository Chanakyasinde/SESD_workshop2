const crypto = require("crypto");
const chalk = require("chalk");

class PasswordCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("password <length>")
            .description("Generate a random secure password")
            .action((length, options) => this.generatePassword(length, options));
    }

    generatePassword(length, options) {
        const passwordLength = Number(length);

        if (isNaN(passwordLength) || passwordLength <= 0) {
            console.log(chalk.red("Please enter a valid number for password length"));
            return;
        }

        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        if (options.symbols !== false) {
            characters += "!@#$%^&*()_+";
        }

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

export { };