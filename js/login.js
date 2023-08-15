document.getElementById("btn-submit").addEventListener("click",function(){
    const mailValue = document.getElementById("mail")
    const mail = mailValue.value ;
    // password
    const passwordValue = document.getElementById("password");
    const password = passwordValue.value;   
     if(mail === "abc@gmail.com" && password === "1234"){
        window.location.href = "bank.html"
     }else{
        alert("Please Provide Valid Informations")
     }
})