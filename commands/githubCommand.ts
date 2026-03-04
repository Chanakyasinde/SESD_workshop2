const axios = require("axios");
const chalk = require("chalk");

class GithubCommand {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command("github <username>")
            .description("Fetch GitHub user profile information")
            .action((username) => this.fetchUser(username))
    }

    async fetchUser(username) {
        try {
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const user = res.data;

            console.log(chalk.green("Name:"), chalk.white(user.name || "N/A"));
            console.log(chalk.green("Profile:"), chalk.blue(user.html_url));
        } catch (err) {
            console.log(chalk.red("Error: Could not find GitHub user '" + username + "'"));
        }
    }
}

module.exports = GithubCommand;

export { };
