import inquirer from "inquirer";
import chalk from "chalk";


interface user {
    username: String, password: number,
    customerName: String, customerBalance: number,
}

let accounts : user[]=[];

accounts.push({
    username : "Azfar", password : 1234,
    customerName: "Azfar Sikander", customerBalance: 12000,
})

accounts.push({
    username: "Ashar", password: 12345,
    customerName: "Ashar Sikander", customerBalance: 13200,
})

accounts.push({
    username: "Urooj", password: 1324,
    customerName: "Urooj Fatima", customerBalance: 15400,
})

accounts.push({
    username: "Sikander", password: 1642,
    customerName: "Sikander Mahmood", customerBalance: 13240,
})

let condition = true;

while (condition) {

    const users = await inquirer.prompt([
        {
            type: "input",
            name: "userid",
            message: "Enter user id: ",
        },
        {
            type: "number",
            name: "password",
            message: "Enter user password: ",
        },
    ])

    if ((users.userid === accounts[0].username || users.userid === accounts[1].username || users.userid === accounts[2].username || users.userid === accounts[3].username) && (users.password === accounts[0].password || users.password === accounts[1].password || users.password === accounts[2].password || users.password === accounts[3].password)) {
        const atm_funcs = await inquirer.prompt([
            {
                type: "list",
                name: "atmfun",
                message: "What do you want to  do? ",
                choices: ["Cash Withdrawl", "Cash Supply"],
            }
        ])

        if (users.userid === accounts[0].username && users.password === accounts[0].password && atm_funcs.atmfun === "Cash Withdrawl") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[0].customerName} \n Customer Balance = ${accounts[0].customerBalance}`))
            const withdraw = await inquirer.prompt([
                {
                    type: "number",
                    name: "with",
                    message: "Amount of withdrawl: ",
                }
            ])
            
            if (withdraw.with > accounts[0].customerBalance) {
                console.log(chalk.redBright("Insufficient Funds"));
            } else {
                console.log(chalk.greenBright(`Current Balance = ${accounts[0].customerBalance - withdraw.with}`))
            }

        } else if (users.userid === accounts[1].username && users.password === accounts[1].password && atm_funcs.atmfun === "Cash Withdrawl") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[1].customerName} \n Customer Balance = ${accounts[1].customerBalance}`))
            const withdraw1 = await inquirer.prompt([
                {
                    type: "number",
                    name: "wit",
                    message: "Amount of withdrawl: ",
                }
            ])
            if (withdraw1.wit > accounts[1].customerBalance) {
                console.log(chalk.redBright("Insufficient Funds"));
            } else {
                console.log(chalk.greenBright(`Current Balance = ${accounts[1].customerBalance - withdraw1.wit}`))
            }
        } else if (users.userid === accounts[2].username && users.password === accounts[2].password && atm_funcs.atmfun === "Cash Withdrawl") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[2].customerName} \n Customer Balance = ${accounts[2].customerBalance}`))
            const withdraw2 = await inquirer.prompt([
                {
                    type: "number",
                    name: "wi",
                    message: "Amount of withdrawl: ",
                }
            ])
            if (withdraw2.wi > accounts[2].customerBalance) {
                console.log(chalk.redBright("Insufficient Funds"));
            } else {
                console.log(chalk.greenBright(`Current Balance = ${accounts[2].customerBalance - withdraw2.wi}`))
            }
        } else if (users.userid === accounts[3].username && users.password === accounts[3].password && atm_funcs.atmfun === "Cash Withdrawl") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[3].customerName} \n Customer Balance = ${accounts[3].customerBalance}`))
            const withdraw3 = await inquirer.prompt([
                {
                    type: "number",
                    name: "wih",
                    message: "Amount of withdrawl: ",
                }
            ])
            if (withdraw3.wih > accounts[3].customerBalance) {
                console.log(chalk.redBright("Insufficient Funds"));
            } else {
                console.log(chalk.greenBright(`Current Balance = ${accounts[3].customerBalance - withdraw3.wih}`))
            }
        } else if (users.userid === accounts[0].username && users.password === accounts[0].password && atm_funcs.atmfun === "Cash Supply") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[0].customerName} \n Customer Balance = ${accounts[0].customerBalance}`))
            const supply = await inquirer.prompt([
                {
                    type: "number",
                    name: "supp",
                    message: "Amount of Supply: ",
                }
            ])

            const account = await inquirer.prompt([
                {
                    type: "input",
                    name: "usernam",
                    message:"From which account : ",
                },
                {
                    type: "number",
                    name: "pass",
                    message: "Enter other account's password: ",
                }
                
            ])

            if (account.usernam === accounts[1].username && account.pass === accounts[1].password) {
                if (supply.supp < accounts[1].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[1].username}'s account = ${accounts[1].customerBalance - supply.supp} \n Current balance of current account = ${accounts[0].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[2].username && account.pass === accounts[2].password) {
                if (supply.supp < accounts[2].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[2].username}'s account = ${accounts[1].customerBalance - supply.supp} \n Current balance of current account = ${accounts[0].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[3].username && account.pass === accounts[3].password) {
                if (supply.supp < accounts[3].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[3].username}'s account = ${accounts[3].customerBalance - supply.supp} \n Current balance of current account = ${accounts[0].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else {
                console.log(chalk.redBright("Invalid user id or password!"));
            }
            
        } else if (users.userid === accounts[1].username && users.password === accounts[1].password && atm_funcs.atmfun === "Cash Supply") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[1].customerName} \n Customer Balance = ${accounts[1].customerBalance}`))
            const supply = await inquirer.prompt([
                {
                    type: "number",
                    name: "supp",
                    message: "Amount of Supply: ",
                }
            ])
            const account = await inquirer.prompt([
                {
                    type: "input",
                    name: "usernam",
                    message:"From which account : ",
                },
                {
                    type: "number",
                    name: "pass",
                    message: "Enter other account's password: ",
                }
                
            ])

            if (account.usernam === accounts[0].username && account.pass === accounts[0].password) {
                if (supply.supp < accounts[0].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[0].username}'s account = ${accounts[0].customerBalance - supply.supp} \n Current balance of current account = ${accounts[1].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[2].username && account.pass === accounts[2].password) {
                if (supply.supp < accounts[2].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[2].username}'s account = ${accounts[2].customerBalance - supply.supp} \n Current balance of current account = ${accounts[1].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[3].username && account.pass === accounts[3].password) {
                if (supply.supp < accounts[3].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[3].username}'s account = ${accounts[3].customerBalance - supply.supp} \n Current balance of current account = ${accounts[1].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else {
                console.log(chalk.redBright("Invalid user id or password!"));
            }
            } else if (users.userid === accounts[2].username && users.password === accounts[2].password && atm_funcs.atmfun === "Cash Supply") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[2].customerName} \n Customer Balance = ${accounts[2].customerBalance}`))
            const supply = await inquirer.prompt([
                {
                    type: "number",
                    name: "supp",
                    message: "Amount of Supply: ",
                }
            ])
            const account = await inquirer.prompt([
                {
                    type: "input",
                    name: "usernam",
                    message:"From which account : ",
                },
                {
                    type: "number",
                    name: "pass",
                    message: "Enter other account's password: ",
                }
                
            ])

            if (account.usernam === accounts[0].username && account.pass === accounts[0].password) {
                if (supply.supp < accounts[0].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[1].username}'s account = ${accounts[0].customerBalance - supply.supp} \n Current balance of current account = ${accounts[2].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[1].username && account.pass === accounts[2].password) {
                if (supply.supp < accounts[1].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[1].username}'s account = ${accounts[1].customerBalance - supply.supp} \n Current balance of current account = ${accounts[2].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[3].username && account.pass === accounts[3].password) {
                if (supply.supp < accounts[3].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[3].username}'s account = ${accounts[3].customerBalance - supply.supp} \n Current balance of current account = ${accounts[2].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else {
                console.log(chalk.redBright("Invalid user id or password!"));
            } 
            } else if (users.userid === accounts[3].username && users.password === accounts[3].password && atm_funcs.atmfun === "Cash Supply") {
            console.log(chalk.yellowBright(`Customer Name = ${accounts[3].customerName} \n Customer Balance = ${accounts[3].customerBalance}`))
            const supply = await inquirer.prompt([
                {
                    type: "number",
                    name: "supp",
                    message: "Amount of Supply: ",
                }
            ])
            const account = await inquirer.prompt([
                {
                    type: "input",
                    name: "usernam",
                    message:"From which account : ",
                },
                {
                    type: "number",
                    name: "pass",
                    message: "Enter other account's password: ",
                }
                
            ])

            if (account.usernam === accounts[0].username && account.pass === accounts[0].password) {
                if (supply.supp < accounts[0].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[0].username}'s account = ${accounts[0].customerBalance - supply.supp} \n Current balance of current account = ${accounts[3].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[1].username && account.pass === accounts[1].password) {
                if (supply.supp < accounts[1].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[1].username}'s account = ${accounts[1].customerBalance - supply.supp} \n Current balance of current account = ${accounts[3].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else if (account.usernam === accounts[2].username && account.pass === accounts[2].password) {
                if (supply.supp < accounts[2].customerBalance) {
                    console.log(chalk.cyanBright(`Current Balance of ${accounts[2].username}'s account = ${accounts[2].customerBalance - supply.supp} \n Current balance of current account = ${accounts[3].customerBalance + supply.supp}.`));
                } else {
                    console.log(chalk.redBright("Insuffecient Funds!"));
                }
            } else {
                console.log(chalk.redBright("Invalid user id or password!"));
            }
            }
        
    } else {
        console.log(chalk.redBright("Incorrect Username or password!"));
    }
    const next = await inquirer.prompt([
        {
            type: "input",
            name: "again",
            message: "Do you want to repeat the process? (y/n) ",
        }
    ])
    
    if (next.again === "n") {
        break
    }

}