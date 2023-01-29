import inquirer from "inquirer";
const time = await inquirer.prompt([
    {
        type: "number",
        name: "countdown",
        message: "How long should the countdown be: ",
    },
]);
let seconds = time.countdown;
const repeat = () => {
    console.clear();
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(repeat, 1000);
    }
    else if (seconds === 0) {
        console.log("COUNTDOWN COMPLETE");
    }
    seconds--;
};
setTimeout(repeat, 1000);
