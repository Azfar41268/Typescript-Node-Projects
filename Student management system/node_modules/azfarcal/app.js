#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow("----------Let us start calculating----------");
    await sleep();
    // rainbow.stop;
    console.log(chalk.greenBright(`    ███    ███  █████  ██████  ███████     ██████  ██    ██      █████  ███████ ███████  █████  ██████      ███████ ██ ██   ██  █████  ███    ██ ██████  ███████ ██████  
    ████  ████ ██   ██ ██   ██ ██          ██   ██  ██  ██      ██   ██    ███  ██      ██   ██ ██   ██     ██      ██ ██  ██  ██   ██ ████   ██ ██   ██ ██      ██   ██ 
    ██ ████ ██ ███████ ██   ██ █████       ██████    ████       ███████   ███   █████   ███████ ██████      ███████ ██ █████   ███████ ██ ██  ██ ██   ██ █████   ██████  
    ██  ██  ██ ██   ██ ██   ██ ██          ██   ██    ██        ██   ██  ███    ██      ██   ██ ██   ██          ██ ██ ██  ██  ██   ██ ██  ██ ██ ██   ██ ██      ██   ██ 
    ██      ██ ██   ██ ██████  ███████     ██████     ██        ██   ██ ███████ ██      ██   ██ ██   ██     ███████ ██ ██   ██ ██   ██ ██   ████ ██████  ███████ ██   ██  \n`));
    console.log(chalk.blueBright(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));
}
await welcome();
async function question() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "What operation do you want to perform? \n",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Power", "Root"]
        },
        {
            type: "number",
            name: "val1",
            message: "Enter first number: "
        },
        {
            type: "number",
            name: "val2",
            message: "Enter second number: "
        }
    ]);
    if (answers.operator === "Addition") {
        console.log(chalk.cyanBright(`${answers.val1} + ${answers.val2} = ${answers.val1 + answers.val2}`));
    }
    else if (answers.operator === "Subtraction") {
        console.log(chalk.cyanBright(`${answers.val1} - ${answers.val2} = ${answers.val1 - answers.val2}`));
    }
    else if (answers.operator === "Multiplication") {
        console.log(chalk.cyanBright(`${answers.val1} X ${answers.val2} = ${answers.val1 * answers.val2}`));
    }
    else if (answers.operator === "Division") {
        console.log(chalk.cyanBright(`${answers.val1} / ${answers.val2} = ${answers.val1 / answers.val2}`));
    }
    else if (answers.operator === "Power") {
        console.log(chalk.cyanBright(`${answers.val1} ^ ${answers.val2} = ${answers.val1 ** answers.val2}`));
    }
    else if (answers.operator === "Root") {
        console.log(chalk.cyanBright(`${answers.val1} to the ${answers.val2} root is ${answers.val1 ** (1 / answers.val2)}`));
    }
}
async function repeat() {
    do {
        await question();
        var again = await inquirer.prompt([{
                type: "input",
                name: "restart",
                message: "Do you want to calculate once more? (y/n): "
            }]);
    } while (again.restart === "yes" || again.restart === "y" || again.restart === "Y" || again.restart === "YES" || again.restart === "YEs" || again.restart === "yES" || again.restart === "yEs" || again.restart === "Yes" || again.restart === "yeS" || again.restart === "YeS");
}
repeat();
