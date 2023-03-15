function calculateTotal(){
    // income 
    const incomeField = document.getElementById('incomeField');
    const incomeFieldValue = incomeField.value;
    const incomeFieldValueNumber = parseFloat(incomeFieldValue);

    // expenses
    const foodField = document.getElementById('foodField');
    const foodFieldValue = foodField.value;
    const foodFieldValueNumber = parseFloat(foodFieldValue);

    const rentField = document.getElementById('rentField');
    const rentFieldValue = rentField.value;
    const rentFieldValueNumber = parseFloat(rentFieldValue);

    const clothField = document.getElementById('clothField');
    const clothFieldValue = clothField.value;
    const clothFieldValueNumber = parseFloat(clothFieldValue);

    // Expenses total 
    const expensesTotal = foodFieldValueNumber + rentFieldValueNumber + clothFieldValueNumber;

    document.getElementById('totalExpenses').innerText = expensesTotal;

    const totalBalance = incomeFieldValueNumber - expensesTotal;
    document.getElementById('totalEqualBalance').innerText = totalBalance;

    // incomeField.value = '';
    foodField.value = '';
    rentField.value = '';
    clothField.value = '';
} 


function saving(){
    const incomeField = document.getElementById('incomeField');
    const incomeFieldValue = incomeField.value;
    const incomeFieldValueNumber = parseFloat(incomeFieldValue);

    const saveIncomeInput = document.getElementById('saveIncome');
    const saveIncomeInputValue = saveIncomeInput.value;
    const saveIncomeInputValueNumber = parseFloat(saveIncomeInputValue);

    const totalSaving = (incomeFieldValueNumber / 100) * saveIncomeInputValueNumber;
    document.getElementById('savingAmount').innerText = totalSaving;
    
    const totalEqualExpenses = document.getElementById('totalExpenses');
    const totalEqualExpensesInnerText = totalEqualExpenses.innerText;
    const totalEqualExpensesInnerTextNumber = parseFloat(totalEqualExpensesInnerText);

    const totalExpense = totalEqualExpensesInnerTextNumber + totalSaving;
    const remaining = incomeFieldValueNumber - totalExpense;

    document.getElementById('TotalRemaining').innerText = remaining;


    console.log(totalEqualBalanceInnerTextNumber);



}