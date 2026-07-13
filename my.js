function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    if(email === savedEmail && password === savedPassword){
        alert("Login Successful!");
        window.location.href = "slot.html";
    } else {
        alert("Invalid Username or Password!");
    }
}