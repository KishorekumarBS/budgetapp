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

    const transactionItemHTML = `
    <li class="transaction transaction--income">
          <span class="transaction__text">${description}</span>
          <span class="transaction__amount">+${amount}</span>
          <button class="transaction__btn">X</button>
    </li>
    `;
    transactionsEl.insertAdjacentHTML('beforeend',transactionItemHTML);
    

});

function clickhandler(event){ 
    const clickedEl = event.target.parentNode;
    clickedEl.remove();

    const amountEl = clickedEl.querySelector('.transaction__amount')
    const amount = +amountEl.textContent;
    if (amount>0){
        const currentIncome = numberIncomeEl.textContent;
        const updatedIncome = currentIncome - amount;
        numberIncomeEl.textContent = updatedIncome;
    }
    else{
        const currentExpense = numberExpensesEl.textContent;
        const updatedExpenses = currentExpense - (amount*-1);
        numberExpensesEl.textContent = updatedExpenses;
    }

    const income =+numberIncomeEl.textContent;
    const expenses =+numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expenses;
    if (income - expenses< 0){
        balanceNumberEl.style.color = 'red';  
    }
}

transactionsEl.addEventListener('click',clickhandler)
function calculateBalance (income,expenses){
    return income-expenses; 
} 