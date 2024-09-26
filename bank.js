//Registration
function register(){
    let registrationAccountNo = document.getElementById('reg_acno').value;
    let registrationUserName = document.getElementById('reg_name').value;
    let registrationPassword = document.getElementById('reg_pswd').value;
    accountDetails={
        acno:registrationAccountNo,
        uname:registrationUserName,
        pswd:registrationPassword
    }
    
    if (accountDetails.acno === "" || accountDetails.uname === "" || accountDetails.pswd === "") {
        alert("Please fill missing fields");
    } else if (localStorage.getItem(accountDetails.acno)) {
        alert("User already registered");
    } else {
        localStorage.setItem(accountDetails.acno, JSON.stringify(accountDetails));
        alert('Registration successful');
        window.location = './login.html';
       
    }
}

  //login
  
  function login() {
    //1. fetch the details
    loginAccountNo = accountno.value;
    loginPassword = password.value;
    
    
    //2. check if the account number is present in localStorage
    if (loginAccountNo in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(loginAccountNo ));
        if (loginPassword  == accountDetails.pswd) {  
            alert("Login successful");
            window.location = "./bank.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Invalid account number");
    }
}

    //Deposite
let amnt = 0;
let withdraw = 0;
let totalBalance = 0;
function depositeMoney() {
    let amnt = parseFloat(deposite_amnt.value);
    let acno = deposite_acno.value;

    if (acno in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(acno));
        if (amnt > 0) {
            accountDetails. totalBalance += amnt;
            localStorage.setItem(acno, JSON.stringify(accountDetails));

            alert("Your amount is successfully added");
            document.getElementById("balance_amount").innerHTML = `<div style="color:red;font-weight:500">Your Current Balance is ${accountDetails.totalBalance}</div>`;
            deposite_amnt.value = ''; // Clear the input field
            return
        } else {
            alert("Please enter a valid amount");
        }
    } else {
        alert("Incorrect account number");
    }
}


function Withdraw() {
    let withdraw = parseFloat(withdraw_amnt.value);
    let acno = withdraw_acno.value;

    if (acno in localStorage) {
        let accountDetails = JSON.parse(localStorage.getItem(acno));
        if (withdraw > 0 && withdraw <= accountDetails.totalBalance) {
            accountDetails.totalBalance -= withdraw;
            localStorage.setItem(acno, JSON.stringify(accountDetails));

            alert("Your amount is successfully withdrawn");
            document.getElementById("balance_amount").innerHTML = `<div class="text-dark" style="font-weight:800">Your Current Balance is ${accountDetails.totalBalance}</div>`;
            withdraw_amnt.value = ''; // Clear the input field
        } else if (withdraw > accountDetails.totalBalance) {
            alert("Insufficient funds...!");
        } else {
            alert("Please enter a valid amount");
        }
    } else {
        alert("Incorrect account number");
    }
}


function logout() {
    
    window.location = "./index.html";
}
