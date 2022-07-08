// import {photographerPageFactory} from "../factories/photographerPageFactory.js";


const body = document.querySelectorAll('body *');
const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
	modal.style.backgroundColor = "rgba(255, 255, 255, 1)";
	// body.style.color = "rgba(255, 255, 255, 1)";
  let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
  const h2Name = document.getElementById("titlePhotograph");
  h2Name.innerText = dataPhotographer.name;
}

function closeModal() {
    modal.style.display = "none";
}

{/* <li value="popularity"><a href="#">Popularité</a></li>
        <li value="popularity"><a href="#">Popularité</a></li>
        <li value="popularity"><a href="#">Popularité</a></li> */}

const firstName = document.getElementById("first");
const errorFirstName = document.getElementById("firstNameError");
const lastName = document.getElementById("last");
const errorLastName = document.getElementById("lastNameError");
const email = document.getElementById("email");
const errorEmail = document.getElementById("emailError");
const message = document.getElementById("message");
const errorMessage = document.getElementById("messageError");

const regexLetters = /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/;
const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,}$/;

// color contrast yellow : #FFFF48   #005671   #901C1C
///////////////////////////////////////////

// get firstName user
firstName.addEventListener('input', checkFirstName);

let firstNameOk = false;
let valFirstName = "";

// check firstname saved in session storage
if (sessionStorage.firstnameSaved) {
  firstName.value = sessionStorage.firstnameSaved;
} 

function checkFirstName(e){

  valFirstName = document.forms["form"]["first"].value;
  // save firstname in sessionStorage
  sessionStorage.setItem("firstnameSaved", valFirstName);

  if( valFirstName.length < 2 ){
    errorFirstName.innerText = "Vous devez saisir au moins 2 caractères";
    // errorFirstName.style.color = "#0000E0";
    errorFirstName.style.color = "red";
    errorFirstName.style.backgroundColor = "white";
    errorFirstName.style.borderRadius = "0.5em 0.5em 0 0";
    errorFirstName.style.padding = "0 0.5em 0 0.5em";
    errorFirstName.style. border = "1px solid red";
    errorFirstName.style.fontSize = "1.4em";
    errorFirstName.style.fontWeight = "bold";
    errorFirstName.style.marginBottom = "-0.2em";
  } else if (!regexLetters.test(valFirstName)){ 
      errorFirstName.innerText = "Vous devez saisir uniquement des lettres";
      errorFirstName.style.color = "red";
      errorFirstName.style.backgroundColor = "white";
      errorFirstName.style.borderRadius = "0.5em 0.5em 0 0";
      errorFirstName.style.marginBottom = "-0.2em";
      errorFirstName.style.padding = "0 0.5em 0 0.5em";
      errorFirstName.style. border = "1px solid red";
      errorFirstName.style.fontSize = "1.4em";
      errorFirstName.style.fontWeight = "bold";
    } else {
      errorFirstName.innerText = "";
      firstNameOk = true;
      return valFirstName;
    }

};

///////////////////////////////////////////

// check lastName user
lastName.addEventListener('input', checkLastName);

let lastNameOk = false;
let valLastName = "";

// check lastname saved in session storage
if (sessionStorage.lastnameSaved) {
  lastName.value = sessionStorage.lastnameSaved;
} 

function checkLastName(e){
 
  valLastName = document.forms["form"]["last"].value;
  // save lastname in sessionStorage
  sessionStorage.setItem("lastnameSaved", valLastName);

  if( valLastName.length < 2 ){
    errorLastName.innerText = "Vous devez saisir au moins 2 caractères";
    errorLastName.style.color = "red";
    errorLastName.style.backgroundColor = "white";
    errorLastName.style.borderRadius = "0.5em 0.5em 0 0";
    errorLastName.style.marginBottom = "-0.2em";
    errorLastName.style.padding = "0 0.5em 0 0.5em";
    errorLastName.style. border = "1px solid red";
    errorLastName.style.fontSize = "1.4em";
    errorLastName.style.fontWeight = "bold";
    
  } else if (!regexLetters.test(valLastName)){ 
      errorLastName.innerText = "Vous devez saisir uniquement des lettres";
      errorLastName.style.color = "red";
      errorLastName.style.backgroundColor = "white";
      errorLastName.style.borderRadius = "0.5em 0.5em 0 0";
      errorLastName.style.marginBottom = "-0.2em";
      errorLastName.style.padding = "0 0.5em 0 0.5em";
      errorLastName.style. border = "1px solid red";
      errorLastName.style.fontSize = "1.4em";
      errorLastName.style.fontWeight = "bold";
    } else {
      errorLastName.innerText = "";
      lastNameOk = true;
      return valLastName;
    }
};

///////////////////////////////

// check email user
email.addEventListener('input', checkEmail);

let emailOk = false;
let valEmail = "";

// check email saved in session storage
if (sessionStorage.emailSaved) {
  email.value = sessionStorage.emailSaved;
} 

function checkEmail(e){
  
  valEmail = document.forms["form"]["email"].value;
  // save email in sessionStorage
  sessionStorage.setItem("emailSaved", valEmail);

    if(valEmail.match(regexMail)){
      errorEmail.innerText = "";
      emailOk = true;
      return valEmail;
    } else {
      errorEmail.innerText = "Vous devez saisir une adresse email valide";
      errorEmail.style.color = "red";
      errorEmail.style.backgroundColor = "white";
      errorEmail.style.borderRadius = "0.5em 0.5em 0 0";
      errorEmail.style.marginBottom = "-0.2em";
      errorEmail.style.padding = "0 0.5em 0 0.5em";
      errorEmail.style. border = "1px solid red";
      errorEmail.style.fontSize = "1.4em";
      errorEmail.style.fontWeight = "bold";
      emailOk = false;
    }
};

///////////////////////////////////////

// check message user
message.addEventListener('input', checkMessage);

let messageOk = false;
let valMessage = "";

// check message saved in session storage
if (sessionStorage.messageSaved) {
  message.value = sessionStorage.messageSaved;
} 

function checkMessage(e){
 
    valMessage = document.forms["form"]["message"].value;
  // save message in sessionStorage
  sessionStorage.setItem("messageSaved", valMessage);

  if( valMessage.length < 20 ){
    errorMessage.innerText = "Vous devez saisir au moins 20 caractères";
    errorMessage.style.color = "red";
    errorMessage.style.backgroundColor = "white";
    errorMessage.style.borderRadius = "0.5em 0.5em 0 0";
    errorMessage.style.marginBottom = "-0.6em";
    errorMessage.style.padding = "0 0.5em 0 0.5em";
    errorMessage.style. border = "1px solid red";
    errorMessage.style.fontSize = "1.1em";
    errorMessage.style.fontWeight = "bold";
    
  } else if (valMessage.length > 200 ){ 
    errorMessage.innerText = "Votre message est trop grand, 200caractères maximum";
    errorMessage.style.color = "red";
    errorMessage.style.backgroundColor = "white";
    errorMessage.style.borderRadius = "0.5em 0.5em 0 0";
    errorMessage.style.marginBottom = "-0.6em";
    errorMessage.style.padding = "0 0.5em 0 0.5em";
    errorMessage.style. border = "1px solid red";
    errorMessage.style.fontSize = "1.1em";
    errorMessage.style.fontWeight = "bold";
    } else {
        errorMessage.innerText = "";
      messageOk = true;
      return valMessage;
    }
};

// add function to see data of the session storage in console ( the user data validate in modal form )
function pushConsoleLog(){
  // for(let i in sessionStorage) {
  //   console.log(i + ' = ' + sessionStorage[i]);
  // }
  console.log("prénom : " + sessionStorage.firstnameSaved);
  console.log("nom : " + sessionStorage.lastnameSaved);
  console.log("email : " + sessionStorage.emailSaved);
  console.log("message : " + sessionStorage.messageSaved);
}

pushConsoleLog();

//////////////////////////////////////////

const form = document.getElementById("form");
const buttonSubmit = document.getElementById('btn-submit');
buttonSubmit.addEventListener('click', formValidation);
 
  // send form if conditions are ok
  form.addEventListener("submit", (e) => {
    
    modalbg.style.display = "none";
    // sessionStorage.clear();
  e.preventDefault();
})

function formValidation(e){

    // check functions for the user can see the errors if they are
  checkFirstName();
  checkLastName();
  checkEmail();
  checkMessage();

// check conditions to call the form submit
  if(checkFirstName() && checkLastName() && checkEmail() && checkMessage() ){
    // alert("le formulaire est bien enregistré");
    form.submit();
  } else {
    // alert("le formulaire est incomplet ou présente des erreurs");
  }
  e.preventDefault();
  };