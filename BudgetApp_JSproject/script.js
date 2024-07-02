const transactionsEl = document.querySelector('.transactions')
const balanceNumberEl = document.querySelector('.balance-number')
const numberIncomeEl = document.querySelector('.number--income')
const numberExpensesEl = document.querySelector('.number--expenses')
const formEl = document.querySelector('.form')
const inputDescriptionEl = document.querySelector('.input--description')
const inputAmountEl = document.querySelector('.input--amount')

formEl.addEventListener('submit', function(event){
    event.preventDefault();
    const description = inputDescriptionEl.value;
    const amount = +inputAmountEl.value;
    console.log(description, amount)

    

    if (amount>0){
        const currentIncome = +numberIncomeEl.textContent;
        const updatedIncome = currentIncome + amount;
        numberIncomeEl.textContent = updatedIncome;
        const balancenum = +balanceNumberEl.textContent;
        const updatedbalance = balancenum + amount;
        balanceNumberEl.textContent = updatedbalance
        if (updatedbalance>0){
            balanceNumberEl.style.color = 'black'
        }
        const transactionItemHTML = `
        <li class="transaction transaction--income">
          <span class="transaction__text">${description}</span>
          <span class="transaction__amount">+${amount}</span>
          <button class="transaction__btn">X</button>
        </li>
    `;
        transactionsEl.insertAdjacentHTML('beforeend',transactionItemHTML);
    }
    else{
        const currentExpense = +numberExpensesEl.textContent;
        const updatedExpenses = currentExpense - (amount);
        numberExpensesEl.textContent = updatedExpenses;
        const balancenum = balanceNumberEl.textContent;
        const updatedbalance = balancenum - (amount*-1);
        balanceNumberEl.textContent = updatedbalance
        if (updatedbalance<0){
            balanceNumberEl.style.color = 'red'
        }
        const transactionItemHTML = `
        <li class="transaction transaction--expense">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">${amount}</span>
            <button class="transaction__btn">X</button>
        </li>
    `;
        transactionsEl.insertAdjacentHTML('beforeend',transactionItemHTML);
    }

    
    inputDescriptionEl.value='';
    inputAmountEl.value='';

    inputDescriptionEl.blur();
    inputAmountEl.blur();
    

});

const clickHandler = (event) => {
    // remove transaction item visually
    if (event.target.classList.contains('transaction__btn')) {
        // remove transaction item visually
        const clickedEl = event.target.parentNode;
        clickedEl.remove();

        // update income or expenses
        const amountEl = clickedEl.querySelector('.transaction__amount');
        const amount = +amountEl.textContent;

        if (amount > 0) {
            const currentIncome = +numberIncomeEl.textContent;
            const updatedIncome = currentIncome - amount;
            numberIncomeEl.textContent = updatedIncome;
        } else {
            const currentExpenses = +numberExpensesEl.textContent;
            const updatedExpenses = currentExpenses - (amount * -1);
            numberExpensesEl.textContent = updatedExpenses;
        }

        // update balance
        const income = +numberIncomeEl.textContent;
        const expenses = +numberExpensesEl.textContent;
        balanceNumberEl.textContent = income - expenses;

        // make red if balance negative
        if (income - expenses < 0) {
            balanceNumberEl.style.color = 'red';
        }
        if (income - expenses > 0) {
            balanceNumberEl.style.color = 'black';
        }
    }
  };
  
  transactionsEl.addEventListener('click', clickHandler);
function calculateBalance (income,expenses){
    return income-expenses; 
} 