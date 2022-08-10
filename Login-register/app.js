var firebaseConfig = {
  apiKey: "AIzaSyB86HScYAk4_CR1f1MYDKpzNZgcQSm_IAU",
  authDomain: "upload-download-27cee.firebaseapp.com",
  projectId: "upload-download-27cee",
  storageBucket: "upload-download-27cee.appspot.com",
  messagingSenderId: "46795543745",
  appId: "1:46795543745:web:8a19699e2e986a768b3040",
  measurementId: "G-2P6SQ2LNL3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


var signbtn=document.getElementById("signupbutton");
var email=document.getElementById("emailsignup");
var password=document.getElementById("passwordsignup");

signbtn.onclick=function(){
  signbtn.disabled=true;
  signbtn.textContent="Registering Your Account ! Please Wait";
  firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    sendVerifyEmail(signbtn);
    console.log(userCredential);
    document.getElementById("alert-message").innerHTML = "Sign Up Succesfully";
  })
  .catch((error) => {
    console.log(error);
    signbtn.disabled=false;
    signbtn.textContent="SIGN UP";
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("alert-message").innerHTML = errorMessage;

    
      
  
  });
  
}


function sendVerifyEmail(button){
  firebase.auth().currentUser.sendEmailVerification().then(function(response){
    signbtn.disabled=false;
    signbtn.textContent="SIGN UP";
  }).catch(function(error){
    signbtn.disabled=false;
    signbtn.textContent="SIGN UP";
    console.log(error);
  });

}

//=========================Sign with Email and Password========================
var loginbtn=document.getElementById("signInbutton");
var loginemail=document.getElementById("emailsignIn");
var loginpass=document.getElementById("signInpassword");



loginbtn.onclick=function(){
  localStorage.setItem("Email",loginemail.value);
  loginbtn.disabled=true;
  loginbtn.textContent="Loging In ! Please Wait";
  firebase.auth().signInWithEmailAndPassword(loginemail.value, loginpass.value).then(function(response){
    console.log(response);
    loginbtn.disabled=false;
    loginbtn.textContent="log in";
    window.location = "/Dashboard/dashboard.html"
  }).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;
  document.getElementById("alert-message1").innerHTML = errorMessage;

  console.log(error);
  loginbtn.disabled=false;
  loginbtn.textContent="log in";
  });
  
}


