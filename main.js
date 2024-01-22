document.addEventListener("DOMContentLoaded", function (event) {
    // disable the lower part of the form until we have user input for all values
    document.getElementById("newUser").disabled = true;
    document.getElementById("existUser").disabled = true;
})

function clickNew(){
    document.getElementById("newUser").disabled = false;
    document.getElementById("existUser").disabled = true;
}

function clickExist(){
    document.getElementById("newUser").disabled = true;
    document.getElementById("existUser").disabled = false;
}

function loginNewUser() {
    let newName = document.getElementById("newName").value;
    let newPassword = document.getElementById("newPassword").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    
    // save information
    localStorage.setItem('custname', newName);
    localStorage.setItem('password', newPassword);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);

    //alert customer login sucessful
    alert("Welcome, " + newName);
}

function loginExistUser() {
    let existName = document.getElementById("existName").value;
    let existPassword = document.getElementById("existPassword").value;

    if ((existName === localStorage.getItem('custname')) && (existPassword === localStorage.getItem('password'))) {
        alert ("Welcome back, " + existName);
    }
    else {
        alert("Your Username or/and your Password is incorrect. Please try again!");
    }
}
