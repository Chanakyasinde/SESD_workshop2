const { execSync } = require("child_process");
class init_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init_ts <folderName>")
            .action((folderName) => this.initializeTS(folderName));
    }
    initializeTS(folderName) {
        console.log(chalk.green("Initialize Typescript Project"));
        this.run(`mkdir ${folderName}`);
        this.run(`cd ${folderName} && npm init -y`);
        this.run(`cd ${folderName} && npm install -D typescript ts-node nodemon @types/node`);
        this.run(`cd ${folderName} && tsc --init`);
        console.log(chalk.blue("Typescript Project Created"));
    }
    run(command) {
        execSync(command, { stdio: "inherit" });
    }
}
