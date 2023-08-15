document.getElementById("btn-Withdraw").addEventListener("click",function(){
    const input = document.getElementById("Withdraw");
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    if(isNaN( inputNumber)){
        return alert("Please enter a valid number for the deposit amount.")
    }else if (inputNumber <= 0){
        input.value = "";
        return alert("Please enter a valid number for the deposit amount.")
    }else{
        const Withdraw = document.getElementById("width-ammount");
        const WithdrawString = Withdraw.innerText;
        const WithdrawNumber = parseFloat(WithdrawString);
        const balanceAmmount = document.getElementById("balance-ammount");
        const balanceValue = balanceAmmount.innerText;
        const balance = parseFloat(balanceValue);
    
        const newBalance = balance - inputNumber;
        if (inputNumber > balance) {
            alert("Withdrawal amount exceeds balance!");
            input.value = "";
            return;
        } else if (newBalance < 0) {
            alert("Balance will become negative!");
            input.value = "";
        } else {
            // Update the balance if conditions are met
            balanceAmmount.innerText = newBalance;
        }
        const CurrentWithdraw = inputNumber + WithdrawNumber;
        Withdraw.innerText = CurrentWithdraw;
       
        input.value = "";
    }
    
})
       
    



   