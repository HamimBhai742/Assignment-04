function calculateMoney(ticketSale) {
    if (ticketSale > 0) {
        let totalSale = 120 * ticketSale;
        const janitorBill = 500;
        const Staf = 8;
        const perStafBill = 50;
        let stafBill = Staf * perStafBill;
        let perDayCost = janitorBill + stafBill;
        let perDayIncome = totalSale - perDayCost;
        return perDayIncome;
    }
    return `Invalid Number`;
}
// console.log(calculateMoney(130));

function checkName(name) {
    if (typeof name === 'number' || typeof name === 'object') {
        return 'Invalid'
    }
    let Name = name.slice(-1).match(/a|y|i|e|o|u|w/gi);
    if (Name !== null) {
        return 'Good Boy'
    }
    else if (Name === null) {
        return 'Bad Boy'
    }
    console.log();
}
// const Nam = "Hamim"
// console.log(checkName('RafEE'));



function deleteInvalids(array) {
    newArray = [];
    for (let Array of array) {
        if (typeof Array === 'number' && (Array % 2 === 0 || Array % 2 === 1 || Array % 2 === -1)) {
            newArray.push(Array);
        }
    }
    return newArray;
}
// console.log(deleteInvalids([9,5,6,7,NaN,undefined,-93,'kss']));

function password(x) {
    let passDetils = {
        name:kolimuddin,
        birthYear:2001,
        siteName:'Facebook'
    }
    return name.concatenate(birthYear)
}
console.log(password(x));

function monthlySavings(arr, livingCoust) {
    if (typeof arr !== 'object' || typeof livingCoust !== 'number'){
        return 'Invalid Input'
    }
        let fixedSalary = [];
    for (let salary of arr) {
        if (salary >= 3000) {
            let tex = salary * 0.20;
            payTaxSalary = salary - tex;
            fixedSalary.push(payTaxSalary)
        }
        else {
            fixedSalary.push(salary)
        }
    }
    let sum = 0;
    for (let perSalary of fixedSalary) {
        sum = sum + perSalary;
        savings = sum - livingCoust;
    }
    if (savings >= 0) {
        return savings
    }
    else {
        return 'earn more'
    }
}
// let savings =monthlySavings()
console.log(monthlySavings(900,[ 3000,98,86]));
