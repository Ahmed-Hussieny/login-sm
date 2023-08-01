
const modal = document.getElementById("myModal");
const modal2 = document.getElementById("myModal2");
const USERNAME = document.getElementById("PUTNAME");



window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

var nameIn = document.getElementById('name');
var emailIN = document.getElementById('email');
var passwordIN = document.getElementById('password');

var users = [];

var nameeee ="";

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}

function register(){
    if(nameIn.value.length !== 0 && emailIN.value.length !== 0 &&  passwordIN.value.length !== 0){
    if(isValidEmail() == true && isValidPassword()==true && isValidName()==true){
      if(exixt() == true){
        var user = {
            userName : nameIn.value,
            email : emailIN.value,
            password : passwordIN.value,
        }
        users.push(user);
        nameeee = nameIn.value;
        localStorage.setItem("users",JSON.stringify(users));
        
        window.location.href = 'home.html';
        setName();
    }else{
        // modal.style.display = "block";
        // console.log("exist")
        // alert("exist")
        modal2.style.display = "block";
    }
        

    }
    else{
        modal.style.display = "block";
        
    }
}
else{
    modal.style.display = "block";
}

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
window.addEventListener("click", function (event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
});



    // console.log(arrUser);
    // console.log(users);
}

function exixt(){
    var emailIN = document.getElementById('email');
    //  users.map((user) => {
    //     if(user.email == emailIN.value  ){
    //         return 2;
    //     }
    // });
    for(let i = 0 ; i< users.length ;i++){
        if(users[i].email == emailIN.value){
            return false;
        }
    }
    return true;
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
function isValidPassword() {
    var res = passwordRegex.test(passwordIN.value);
      if (res == false) {
          document.getElementById("password").classList.add("is-invalid")
          return false;
      } else {
        document.getElementById("password").classList.add("is-valid")
          document.getElementById("password").classList.replace("is-invalid", "is-valid")
  
          return true;
      }
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail() {
  var res= emailRegex.test(emailIN.value);
  if (res == false) {
    document.getElementById("email").classList.add("is-invalid")
    return false;
} else {
    document.getElementById("email").classList.add("is-valid")
    document.getElementById("email").classList.replace("is-invalid", "is-valid")

    return true;
}
}
const nameRegex =/^\S{3,10}$/;
function isValidName() {
  var res= nameRegex.test(nameIn.value);
  if (res == false) {
    document.getElementById("name").classList.add("is-invalid")
    return false;
} else {
    document.getElementById("name").classList.add("is-valid")
    document.getElementById("name").classList.replace("is-invalid", "is-valid")

    return true;
}
}


function signIn(){
    if(emailIN.value.length !== 0 &&  passwordIN.value.length !== 0){
        if(isValidEmail() == true && isValidPassword()==true){
            for(let i = 0 ; i< users.length ;i++){
        if(users[i].email == emailIN.value && users[i].password == passwordIN.value){
            console.log("exixt");
            nameeee=users[i].userName;

            
            window.location.href = 'home.html';
            // console.log(user.value)
            setName();
            // console.log("fkdmk");
           
            
        }else{
            modal.style.display = "block";
        }
      }
        }else{
            modal.style.display = "block";
        }
    }else{
        modal.style.display = "block";
    }
    
}

function sinOut(){
    window.location.href = 'index.html';
}
function setName(){
    const USERNAME = document.getElementById("PUTNAME");
    const htmlContent = USERNAME.innerHTML;
    htmlContent = "djfghjdfksl"
    console.log(htmlContent);
}
