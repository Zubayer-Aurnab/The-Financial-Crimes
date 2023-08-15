document.getElementById("btn-Withdraw").addEventListener("click",function(){
    const input = document.getElementById("Withdraw");
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);


    const Withdraw = document.getElementById("width-ammount");
    const WithdrawString = Withdraw.innerText;
    const WithdrawNumber = parseFloat(WithdrawString);

    const CurrentWithdraw = inputNumber + WithdrawNumber;
    Withdraw.innerText = CurrentWithdraw;


    const balanceAmmount = document.getElementById("balance-ammount");
    const balanceValue = balanceAmmount.innerText;
    const balance = parseFloat(balanceValue);

    const newBalance = balance - inputNumber;

    balanceAmmount.innerText = newBalance;



    input.value = "";


})