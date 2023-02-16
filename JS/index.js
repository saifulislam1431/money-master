function getInputValue(inputId) {
    const expensesEach = document.getElementById(inputId);
    const expensesString = expensesEach.value;
    const expenses = parseFloat(expensesString);
    return expenses;


}