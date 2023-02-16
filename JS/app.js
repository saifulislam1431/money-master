document.getElementById('calculate').addEventListener('click', function() {
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');
    const income = getInputValue('income');
    if (isNaN(income)) {
        alert('Please Enter Your Income')
    } else {
        if (isNaN(food) || isNaN(rent) || isNaN(clothes)) {
            alert('Please Enter Your Expenses.')
        } else {
            const total = food + rent + clothes;
            if (total > income) {
                alert('Your Expenses are too much')
            } else {
                const balance = income - total;
                document.getElementById('total-expenses').innerText = total;
                document.getElementById('balance').innerText = balance;
            }
        }
    }

})

document.getElementById('save').addEventListener('click', function() {
    const income = getInputValue('income');
    const savings = getInputValue('saving');
    const balanceIn = document.getElementById('balance');
    const balanceInStr = balanceIn.innerText;
    const balance = parseFloat(balanceInStr);
    const calculate = income * (savings / 100);
    const remaining = balance - calculate;
    if (calculate > balance) {
        alert('You have low balance')
    } else {
        document.getElementById('saving-amount').innerText = calculate;
        document.getElementById('remaining').innerText = remaining;
    }
    // const savingAmount = income - calculate;

})