import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    const answers = await inquirer.prompt([
        {
            type: "string",
            name: "todo",
            message: "Enter today's objectives: ",
        },
        {
            type: "confirm",
            name: "addMore",
            message: "Do you want to enter another objective? ",
            default: false,
        }
    ]);
    const { todo, addMore } = answers;
    condition = addMore;
    if (todo) {
        todos.push(todo);
    }
    else {
        console.info(`You need to enter something`);
    }
}
if (todos.length > 0) {
    console.info(chalk.cyanBright(`Your To-do List: `));
    todos.forEach((t) => console.info(chalk.cyanBright(t)));
}
else {
    console.info(chalk.redBright(`No Objectives in the list!`));
}
