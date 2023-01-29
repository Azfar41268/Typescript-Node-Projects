import inquirer from "inquirer";

import chalk, { colorNames } from "chalk";

import chalkAnimation from "chalk-animation";
import { CLIENT_RENEG_LIMIT } from "tls";


const sleep = () => {

    return new Promise ((res) => {

        setTimeout(res, 4000);

    })
}

console.log(chalk.redBright(` ██████   ██████               █████             █████                     █████████                 ██████                          █████████   ███  █████                               █████                   
░░██████ ██████               ░░███             ░░███                     ███░░░░░███               ███░░███                        ███░░░░░███ ░░░  ░░███                               ░░███                    
 ░███░█████░███   ██████    ███████   ██████     ░███████  █████ ████    ░███    ░███   █████████  ░███ ░░░   ██████   ████████    ░███    ░░░  ████  ░███ █████  ██████   ████████    ███████   ██████  ████████ 
 ░███░░███ ░███  ░░░░░███  ███░░███  ███░░███    ░███░░███░░███ ░███     ░███████████  ░█░░░░███  ███████    ░░░░░███ ░░███░░███   ░░█████████ ░░███  ░███░░███  ░░░░░███ ░░███░░███  ███░░███  ███░░███░░███░░███
 ░███ ░░░  ░███   ███████ ░███ ░███ ░███████     ░███ ░███ ░███ ░███     ░███░░░░░███  ░   ███░  ░░░███░      ███████  ░███ ░░░     ░░░░░░░░███ ░███  ░██████░    ███████  ░███ ░███ ░███ ░███ ░███████  ░███ ░░░ 
 ░███      ░███  ███░░███ ░███ ░███ ░███░░░      ░███ ░███ ░███ ░███     ░███    ░███    ███░   █  ░███      ███░░███  ░███         ███    ░███ ░███  ░███░░███  ███░░███  ░███ ░███ ░███ ░███ ░███░░░   ░███     
 █████     █████░░████████░░████████░░██████     ████████  ░░███████     █████   █████  █████████  █████    ░░████████ █████       ░░█████████  █████ ████ █████░░████████ ████ █████░░████████░░██████  █████    
░░░░░     ░░░░░  ░░░░░░░░  ░░░░░░░░  ░░░░░░     ░░░░░░░░    ░░░░░███    ░░░░░   ░░░░░  ░░░░░░░░░  ░░░░░      ░░░░░░░░ ░░░░░         ░░░░░░░░░  ░░░░░ ░░░░ ░░░░░  ░░░░░░░░ ░░░░ ░░░░░  ░░░░░░░░  ░░░░░░  ░░░░░     
                                                            ███ ░███                                                                                                                                              
                                                           ░░██████                                                                                                                                               
                                                            ░░░░░░                                                                                                                                                  \n`))

let condition = true;

async function numberGuessing() {
    while (condition) {
    
        const ran = await inquirer.prompt([
            {
                type: "number",
                name: "range",
                message: "Type the range of the number: "
            }
        ])
        
        let random = Math.floor(Math.random() * ran.range);
    
        const input = await inquirer.prompt([
            {
                type: "number",
                name: "int",
                message: `Guess the number between 0 and ${ran.range}: `
            }
        ])
        
        if (input.int === random) {

            let rainbow = chalkAnimation.rainbow("You guessed the correct number, Good Job!");

            await sleep();

            console.log(chalk.cyanBright("Can you do it twice, try and find out!"));
        }
        else if (input.int - 1 === random || input.int - 2 === random || input.int + 1 === random || input.int + 2 === random) {

            let neon = chalkAnimation.neon("You are very close !");

            await sleep();

            console.log(chalk.cyanBright(`The number is actually: \n ${random}`));
        }
        else {

            let pulse = chalkAnimation.pulse("You have guessed wrong!");

            await sleep();

            console.log(chalk.cyanBright(`The number is actually ${random}!`));
        }
    
        let next_calculation = await inquirer.prompt([
            {
                type: "input",
                name: "proceed",
                message: "Do you want to guess again? (y/n): "
            }
        ])
    
        if (next_calculation.proceed === "n") {

            condition = false;
        }
        else {
            
            continue;
        }
    
    }
} 

numberGuessing();
