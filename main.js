// on mouse blur
document.querySelector('input[type=number]').addEventListener('wheel', function (event) {
    event.target.blur();
});

// set input limit
document.querySelector('input[type=number]').addEventListener('change', function () {
    let i = parseInt(this.value);
    if (i < 1) this.value = 0;
    if (i > 100000) this.value = 1000000;
});

// income field
const income = document.getElementById('income-field');
// food field
const food = document.getElementById('food-field');
// rent field
const rent = document.getElementById('rent-field');
// cloth field
const clothes = document.getElementById('clothes-field');
// income money related alert
const firstAlert = document.getElementById('first-Alert');
firstAlert.style.display = 'none';
// success related alert
const secondAlert = document.getElementById('success-Alert');
secondAlert.style.display = 'none';
// string related alert
const thirdAlert = document.getElementById('third-Alert');
thirdAlert.style.display = 'none';



// main function
function addition(sum) {
    // expense balance
    const totalExpense = document.getElementById('Expense');
    let updateExpense = parseInt(totalExpense.innerText);
    // Balance
    const balance = document.getElementById('balance');
    let RestBalance = parseInt(balance.innerText);

    if (sum == 1) {
        // update expense balance
        updateExpense = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
        totalExpense.innerText = updateExpense;

        // update balance
        RestBalance = parseInt(income.value) - updateExpense;
        balance.innerText = RestBalance;
    }

    // save money input
    const fieldInput = document.getElementById('saveMoney-field');

    // saving amount
    const savingAmount = document.getElementById('saving-amount');
    let updateSavingAmount = parseInt(savingAmount.innerText);

    // remaining amount
    const remainingBalance = document.getElementById('remaining-Balance');
    let UpdateremainingBalance = parseInt(remainingBalance.innerText);
    if (sum == 0) {
        // saving amount calculation
        const incomeMoney = parseInt(income.value);
        let saveInputValue = parseInt(fieldInput.value);
        let cal = incomeMoney * saveInputValue / 100;
        updateSavingAmount = cal;
        savingAmount.innerText = updateSavingAmount;
        // remaining balance calculation
        UpdateremainingBalance = balance.innerText - savingAmount.innerText;
        remainingBalance.innerText = UpdateremainingBalance;
    }

    if (balance.innerText < 0) {
        firstAlert.style.display = 'block';
        secondAlert.style.display = 'none';
        totalExpense.innerText = '0';
        balance.innerText = '0';
        fieldInput.value = '';
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0';
    } else {
        firstAlert.style.display = 'None';
        thirdAlert.style.display = 'none';
        secondAlert.style.display = 'block';
    }

    // isNaN 
    if (isNaN(RestBalance) || isNaN(UpdateremainingBalance)) {
        firstAlert.style.display = 'none';
        secondAlert.style.display = 'none';
        thirdAlert.style.display = 'block';
        totalExpense.innerText = '0';
        balance.innerText = '0';
        savingAmount.innerText = '0';
        remainingBalance.innerText = '0';
    }
}

// Calculation button
document.getElementById('calculate-btn').addEventListener('click', () => addition(1));

// save button
document.getElementById('saveBtn').addEventListener('click', () => addition(0));