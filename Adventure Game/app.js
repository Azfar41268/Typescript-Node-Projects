import inquirer from "inquirer";
import chalk from "chalk";
import random from "random";
class player {
    constructor(name, health, damage) {
        this.name = name;
        this.health = health;
        this.damage = damage;
    }
}
let assassin = new player("Assassin", 120, 20);
let skeleton = new player("Skeleton", 96, 12);
let spider = new player("Spider", 80, 10);
let zombie = new player("Zombie", 100, 18);
let enemies = [assassin, skeleton, spider, zombie];
const name = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name: ",
    }
]);
let player1 = new player(name.name, 150, 32);
let loop = true;
let potion = 10;
let run = 5;
let firstEnemyHealth;
let firstEnemyName;
let firstEnemyDamage;
let loops = 0;
while (loop) {
    if (loops !== 11) {
        let val = random.choice(enemies);
        firstEnemyName = val.name;
        firstEnemyDamage = val.damage;
        firstEnemyHealth = val.health;
        console.log(chalk.cyanBright("Welcome to the Dungeon"));
        console.log(chalk.greenBright("--------------------------------------"));
        console.log(`A wild ${chalk.magentaBright(firstEnemyName)} has appeared \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
        const move = await inquirer.prompt([
            {
                type: "list",
                name: "move",
                message: "Which move do you want to perform? ",
                choices: ["Attack", "Drink Health Potion", "Run", "Exit the Dungeon"]
            }
        ]);
        if (player1.health <= 0) {
            console.log(chalk.redBright("You have lost!!"));
            break;
        }
        if (move.move === "Attack") {
            if (firstEnemyHealth > 0) {
                firstEnemyHealth -= player1.damage;
                player1.health -= (firstEnemyDamage / 2);
                console.log(`You have attacked and have been hit too \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                while (firstEnemyHealth > 0 && player1.health > 0) {
                    const move = await inquirer.prompt([
                        {
                            type: "list",
                            name: "move",
                            message: "Which move do you want to perform next? ",
                            choices: ["Attack", "Drink Health Potion", "Run", "Exit the Dungeon"]
                        }
                    ]);
                    if (move.move === "Attack") {
                        firstEnemyHealth -= player1.damage;
                        player1.health -= (firstEnemyDamage / 2);
                        console.log(`You have attacked and have been hit too \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                        if (player1.health <= 0) {
                            console.log(chalk.redBright("You have lost!!"));
                            break;
                        }
                    }
                    else if (move.move === "Drink Health Potion") {
                        if (player1.health <= 0) {
                            console.log(chalk.redBright("You have lost!!"));
                            break;
                        }
                        else {
                            if (potion !== 0) {
                                potion -= 1;
                                player1.health = player1.health + 20;
                                console.log(`You drank a health Potion \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have ${potion} health Potions left!`);
                            }
                            else {
                                player1.health -= firstEnemyDamage;
                                console.log(`You do not have any remaining potions and have been hit! \n ${chalk.yellowBright(firstEnemyHealth)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                            }
                        }
                    }
                    else if (move.move === "Run") {
                        if (player1.health <= 0) {
                            console.log(chalk.redBright("You have lost!!"));
                            break;
                        }
                        else {
                            if (run !== 0) {
                                run = run - 1;
                                console.log(`You ran away \n ${player1.name} : ${player1.health} \n You can run away only ${run} more times!`);
                                continue;
                            }
                            else {
                                player1.health -= firstEnemyDamage;
                                console.log(`You cannot run anymore \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have been attacked by the monster`);
                            }
                        }
                    }
                    else if (move.move === "Exit the dungeon") {
                        loop = false;
                        break;
                    }
                }
            }
            else if (firstEnemyHealth <= 0) {
                if (loops >= 10) {
                    console.log(chalk.blueBright("Congratulation!! \n -- You have completed the dungeon! --"));
                }
                else if (loops < 10) {
                    const again = await inquirer.prompt([
                        {
                            type: "list",
                            name: "repeat",
                            message: `You defeated the monster, what do you want to do next? `,
                            choices: ["Fight another monster.", "Exit the Dungeon."],
                        }
                    ]);
                    if (again.repeat === "Exit the Dungeon.") {
                        loop = false;
                    }
                    else if (again.repeat = "Fight another monster.") {
                        loops += 1;
                        continue;
                    }
                }
            }
        }
        else if (move.move === "Drink Health Potion") {
            if (potion !== 0) {
                potion -= 1;
                player1.health = player1.health + 20;
                console.log(`You drank a health Potion \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have ${potion} health Potions left!`);
            }
            else {
                player1.health -= firstEnemyDamage;
                console.log(`You do not have any remaining potions and have been hit! \n ${chalk.yellowBright(firstEnemyHealth)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
            }
            while (firstEnemyHealth > 0) {
                const move = await inquirer.prompt([
                    {
                        type: "list",
                        name: "move",
                        message: "Which move do you want to perform? ",
                        choices: ["Attack", "Drink Health Potion", "Run", "Exit the Dungeon"]
                    }
                ]);
                if (move.move === "Attack") {
                    firstEnemyHealth -= player1.damage;
                    player1.health -= (firstEnemyDamage / 2);
                    console.log(`You have attacked and have been hit too \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                }
                else if (move.move === "Drink Health Potion") {
                    potion -= 1;
                    player1.health = player1.health + 20;
                    console.log(`You drank a health Potion \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have ${potion} health Potions left!`);
                }
                else if (move.move === "Run") {
                    if (run !== 0) {
                        run = run - 1;
                        console.log(`You ran away \n ${player1.name} : ${player1.health} \n You can run away only ${run} more times!`);
                        setTimeout(() => { loops += 1; }, 2000);
                        continue;
                    }
                    else {
                        console.log(`You cannot run anymore \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have been attacked by the monster`);
                    }
                }
                else if (move.move === "Exit the dungeon") {
                    break;
                }
            }
        }
        else if (move.move === "Run") {
            if (run !== 0) {
                run = run - 1;
                console.log(`You ran away \n ${player1.name} : ${player1.health} \n You can run away only ${run} more times!`);
                while (firstEnemyHealth > 0) {
                    console.log(`But Another monster has appeared! \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                    const move = await inquirer.prompt([
                        {
                            type: "list",
                            name: "move",
                            message: "Which move do you want to perform? ",
                            choices: ["Attack", "Drink Health Potion", "Run", "Exit the Dungeon"]
                        }
                    ]);
                    if (move.move === "Attack") {
                        firstEnemyHealth -= player1.damage;
                        player1.health -= (firstEnemyDamage / 2);
                        console.log(`You have attacked and have been hit too \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health}`);
                    }
                    else if (move.move === "Drink Health Potion") {
                        potion -= 1;
                        player1.health = player1.health + 20;
                        console.log(`You drank a health Potion \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have ${potion} health Potions left!`);
                    }
                    else if (move.move === "Run") {
                        if (run !== 0) {
                            run = run - 1;
                            console.log(`You ran away \n ${player1.name} : ${player1.health} \n You can run away only ${run} more times!`);
                            loops += 1;
                            continue;
                        }
                        else {
                            console.log(`You cannot run anymore \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have been attacked by the monster`);
                        }
                    }
                    else if (move.move === "Exit the dungeon") {
                        break;
                    }
                }
            }
            else {
                player1.health -= firstEnemyDamage;
                console.log(`You cannot run anymore \n ${chalk.yellowBright(firstEnemyName)} : ${firstEnemyHealth} \n ${chalk.yellowBright(player1.name)} : ${player1.health} \n You have been attacked by the monster`);
            }
        }
        else if (move.move === "Exit the Dungeon") {
            loop = false;
            break;
        }
    }
    else {
        console.log(`You have completed the dungeon! \n Congratulations ${chalk.magentaBright(player1.name)}!`);
        break;
    }
}
;
