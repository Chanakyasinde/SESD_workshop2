#!/usr/bin/env node
const { Command } = require('commander');
const axios = require("axios");
const program = new Command();
program
    .command("greet <name>")
    .action((name) => console.log(`Hello ${name}`));
program
    .command("add <n1> <n2>")
    .description("Add two numbers")
    .action((n1, n2) => console.log(Number(n1) + Number(n2)));
program
    .command("multiply <n1> <n2>")
    .description("Multiply two numbers")
    .action((n1, n2) => console.log(Number(n1) * Number(n2)));
program
    .command("subtract <n1> <n2>")
    .description("Subtract two numbers")
    .action((n1, n2) => console.log(Number(n1) - Number(n2)));
program
    .command("division <n1> <n2>")
    .description("Division two numbers")
    .action((n1, n2) => console.log(Number(n1) / Number(n2)));
program
    .command("joke")
    .description("Random joke")
    .action(async () => {
    try {
        const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`);
        console.log(res.setup);
    }
    catch (err) {
        console.log(err);
    }
});
program.parse();
