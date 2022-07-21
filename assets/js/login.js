// initialize variables
var signup = document.getElementById("signup"); 
var login = document.getElementById("login"); 
var btn = document.getElementById("btn"); 
var img1 = document.getElementById("img1"); 
var img2 = document.getElementById("img2"); 
var btn1 = document.getElementById("btn1"); 

// choose signup/login
function signUp(){
    signup.style.left= "-400px"
    login.style.left= "50px"
    btn.style.left= "110px"
    // img2.display = 'block'
    // img1.display = 'none'
}

function logIn(){
    signup.style.left= "50px"
    login.style.left= "450px"
    btn.style.left= "0px"
}


// switch img
btn1.addEventListener('click', (e) => {
    e.preventDefault()

    console.log('success')
    
})











