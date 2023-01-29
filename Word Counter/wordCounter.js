import inquirer from "inquirer";
const para = await inquirer.prompt([
    {
        type: "input",
        name: "words",
        message: "Enter sentences: ",
    }
]);
let { words } = para;
if (words[-1] === " " || words[0] === " ") {
    let a = words.split(" ");
    console.log(a.length - 1);
}
else if (words[-1] !== " " && words[0] !== " ") {
    let a = words.split(" ");
    console.log(a.length);
}
