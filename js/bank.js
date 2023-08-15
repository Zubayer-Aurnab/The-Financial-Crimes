document.getElementById("btn-Deposit").addEventListener("click",function(){
    const DepositInput = document.getElementById("Deposit");
    const  NewDepositString = DepositInput.value;
    const NewDeposit = parseFloat(NewDepositString);
    console.log(typeof NewDeposit);
   
    if(isNaN( NewDeposit)){
        return alert("Please enter a valid number for the deposit amount.")
    }else if(NewDeposit <= 0){
        DepositInput.value = "";
        return alert("Please enter a valid number for the deposit amount.")
    }else{
        
    const DepositCurrent = document.getElementById("deposit-ammount"); 
    const DepositPreviousString = DepositCurrent.innerText
    const DepositPrevious = parseFloat(DepositPreviousString);
             
    const currentDepositeTotal = DepositPrevious + NewDeposit;
    DepositCurrent.innerText =  currentDepositeTotal;
    DepositInput.value = ""
    const balanceAmmount = document.getElementById("balance-ammount");
    const balanceValue = balanceAmmount.innerText;
    const balance = parseFloat(balanceValue);

    const newBalance = balance + NewDeposit;

    balanceAmmount.innerText = newBalance;
    } 
}) 