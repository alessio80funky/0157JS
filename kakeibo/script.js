

let transactions = [];

const ttlInc = document.getElementById("totalIncome");
const ttlExp = document.getElementById("totalExpense");
const ttl = document.getElementById("balance");
const trnForm = document.getElementById("transactionForm");
const trnList = document.getElementById("transactionList");
const des = document.getElementById("description");
const amount = document.getElementById("amount");
const type = document.getElementById("type");

function init(){
 trnForm.addEventListener("submit" , Submit)
 
updateUi()
}

init();


function Submit(e){
    e.preventDefault();

const desInput = des.value;
const amountInput = Number(amount.value);
const typeSelect = type.value;

if (!desInput || !amountInput || typeSelect <= 0){
    alert("正しい金額と内容を入力してください")
    return;
}

const transaction = {
    id: Date.now(),
    desInput,
    amountInput,
    typeSelect,
    date: new Date().toLocaleString("ja-JP")
}


transactions.unshift(transaction)


trnForm.reset();
updateUi()

}

function deleteTransaction(id){

    transactions = transactions.filter(t =>t.id !== id );
    updateUi()

}


function updateUi(){
updateTransactionList();
updateSummary();
}

function updateTransactionList(){
trnList.innerHTML='';

if(transactions.length === 0){
    trnList.innerHTML=`<li style="text-align: center; color: #999; padding: 20px;">

取引履歴がありません

</li>`;
return;
}

transactions.forEach(transaction => {
    const li = document.createElement('li');
    li.className = `transaction-item: ${transaction.typeSelect}`

    const sign = transaction.typeSelect === 'income' ? '+' : '-';

    li.innerHTML =`

 <div class="transaction-info">


<div class="transaction-description">


 ${transaction.desInput}


</div>


 <small style="color: #999;">


 ${transaction.date}


 </small>

 </div>


 <div style="display: flex; align-items: center; gap: 10px;">


 <span class="transaction-amount ${transaction.typeSelect}">

${sign}¥${transaction.amountInput.toLocaleString()}


 </span>


 <button class="btn-delete" onclick="deleteTransaction(${transaction.id})">


 削除


</button>


 </div>


 `;


trnList.appendChild(li);

})

}

function updateSummary(){

    const income = transactions
    .filter(t => t.typeSelect === 'income')
    .reduce((sum , t) => sum + t.amountInput, 0)

    const expense = transactions
    .filter(t => t.typeSelect === 'expense')
    .reduce((sum , t) => sum + t.amountInput, 0)

    const balance = income - expense;

    ttlExp.textContent =`${expense.toLocaleString()}`
    ttlInc.textContent =`${income.toLocaleString()}`
     ttl.textContent =`${balance.toLocaleString()}`


     if(balance > 0){
        ttl.style.color="green"
     } else if (balance < 0){
         ttl.style.color="red"
     }else{
        ttl.style.color="purple"
     }

}