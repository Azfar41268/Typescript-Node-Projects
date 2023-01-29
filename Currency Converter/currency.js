// noinspection JSUnusedLocalSymbols
import inquirer from "inquirer";
let loop = true;
while (loop) {
    let conversion = {
        "rupees": {
            "dollars": 0.0044,
            "dirhams": 0.016,
            "australianDollars": 0.0064,
            "rupees": 1,
        },
        "dollars": {
            "rupees": 226.64,
            "australianDollars": 1.47,
            "dirhams": 3.67,
            "dollars": 1,
        },
        "dirhams": {
            "rupees": 61.60,
            "australianDollars": 0.40,
            "dollars": 0.27,
            "dirhams": 1,
        },
        "australianDollars": {
            "dollars": 0.68,
            "dirhams": 2.50,
            "rupees": 153.93,
            "australianDollars": 1,
        },
    };
    const money = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            message: "Choose currency to be converted from: ",
            choices: ["rupees", "dollars", "dirhams", "australianDollars"],
        },
        {
            type: "list",
            name: "to",
            message: "Choose currenct to be converted to: ",
            choices: ["rupees", "dollars", "dirhams", "australianDollars"],
        },
        {
            type: "number",
            name: "amount",
            message: "Enter amount",
        },
    ]);
    let { from, to, amount } = money;
    if (from && to && amount) {
        let ans = conversion[from][to] * amount;
        console.log(ans);
    }
    else {
        console.log("Invalid Inputs!");
    }
    const again = await inquirer.prompt([
        {
            type: "confirm",
            name: "repeat",
            messgae: "Do you want to perform another conversion: ",
            default: false,
        },
    ]);
    if (again.repeat === false) {
        loop = false;
        break;
    }
    else {
        loop = true;
        continue;
    }
    ;
}
