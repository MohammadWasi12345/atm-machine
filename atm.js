import inquirer from 'inquirer';
let atm = await inquirer.prompt([{
        type: "input",
        name: "username",
        message: "enter your user name"
    },
    {
        type: "number",
        name: "userID",
        message: "enter your userID"
    },
    {
        type: "number",
        name: "PIN",
        message: "enter your PIN"
    },
    {
        type: "list",
        name: "accountype",
        message: "choose your account type",
        choices: ['savings', 'current',]
    },
    {
        type: "list",
        name: "transaction",
        message: "choose your transaction",
        choices: ['fastcash', 'widhrawl']
    },
    {
        type: "number",
        name: "amount",
        message: "enter your amount to widhrawl",
        when(atm) {
            return atm.transaction === 'widhrawl';
        }
    },
    {
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: ['1000', '2000', '5000', '10000', '20000'],
        when(atm) {
            return atm.transaction === 'fastcash';
        }
    }
]);
const userName = atm.username;
const userid = atm.userID;
const userPin = atm.PIN;
const input = atm.amount;
if ((userName && userid) && userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    if (input < balance) {
        console.log(`your account is been debited with RS ${input} and your remaining balance is ${balance - input}`);
    }
    else {
        console.log('your balance is insufficient');
    }
}
