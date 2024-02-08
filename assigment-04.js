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
    else {
        return 'Invalid Number';
    }
}


function checkName(name) {
    if (typeof name === 'number' || typeof name === 'object') {
        return 'invalid'
    }
    let Name = name.slice(-1).match(/a|y|i|e|o|u|w/gi);
    if (Name !== null) {
        return 'Good Name'
    }
    else if (Name === null) {
        return 'Bad Name'
    }
}



function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return 'Invalid Array'
    }
    newArray = [];
    for (let Array of array) {
        if (typeof Array === 'number' && (Array % 2 === 0 || Array % 2 === 1 || Array % 2 === -1)) {
            newArray.push(Array);
        }
    }
    return newArray;
}


function password(obj) {
    let obArray = [];
    let dob = obj.birthYear
    let Dob = dob.toString().split('').length;
    for (let objects in obj) {
        obArray.push(objects)
    }
    if (obArray.length < 3) {
        return 'invalid'
    }
    else if (Dob < 4) {
        return 'invalid'
    }
    else {
        return obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1) + '#' + obj.name + '@' + obj.birthYear;
    }
}

function monthlySavings(arr, livingCoust) {
    if (typeof arr !== 'object' || typeof livingCoust !== 'number') {
        return 'invalid input'
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

