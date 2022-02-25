
let loginBtn = document.getElementById('loginBtn')
console.log(loginBtn)

loginBtn.onclick = function() {
    let username = document.getElementById('userName')
    let password = document.getElementById('passWord')
    
    console.log(username.value + " "+ password.value)

}
