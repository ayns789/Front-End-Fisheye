const modal = document.getElementById("contact_modal");

function displayModal() {
	modal.style.display = "block";
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

// color contrast yellow : #FFFF48   #005671
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
    errorFirstName.style.color = "#0000E0";
    errorFirstName.style.fontSize = "26px";
    errorFirstName.style.fontWeight = "bold";
    errorFirstName.style.marginTop = "5px";
  } else if (!regexLetters.test(valFirstName)){ 
      errorFirstName.innerText = "Vous devez saisir uniquement des lettres";
      errorFirstName.style.color = "#0000E0";
      errorFirstName.style.fontSize = "26px";
      errorFirstName.style.fontWeight = "bold";
      errorFirstName.style.marginTop = "5px";
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
    errorLastName.style.color = "#0000E0";
    errorLastName.style.fontSize = "26px";
    errorLastName.style.fontWeight = "bold";
    errorLastName.style.marginTop = "5px";
    
  } else if (!regexLetters.test(valLastName)){ 
      errorLastName.innerText = "Vous devez saisir uniquement des lettres";
      errorLastName.style.color = "#0000E0";
      errorLastName.style.fontSize = "26px";
      errorLastName.style.fontWeight = "bold";
      errorLastName.style.marginTop = "5px";
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
      errorEmail.style.color = "#0000E0";
      errorEmail.style.fontSize = "26px";
      errorEmail.style.fontWeight = "bold";
      errorEmail.style.marginTop = "5px";
      emailOk = false;
    }
};

///////////////////////////////////////

// check lastName user
message.addEventListener('input', checkMessage);

let messageOk = false;
let valMessage = "";

// check lastname saved in session storage
if (sessionStorage.messageSaved) {
  lastName.value = sessionStorage.messageSaved;
} 

function checkMessage(e){
 
    valMessage = document.forms["form"]["message"].value;
  // save message in sessionStorage
  sessionStorage.setItem("messageSaved", valMessage);

  if( valMessage.length < 20 ){
    errorMessage.innerText = "Vous devez saisir au moins 20 caractères";
    errorMessage.style.color = "#0000E0";
    errorMessage.style.fontSize = "26px";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.marginTop = "5px";
    
  } else if (valMessage.length > 200 ){ 
    errorMessage.innerText = "Votre message est trop grand, 200caractères maximum";
    errorMessage.style.color = "#0000E0";
    errorMessage.style.fontSize = "26px";
    errorMessage.style.fontWeight = "bold";
    errorMessage.style.marginTop = "5px";
    } else {
        errorMessage.innerText = "";
      messageOk = true;
      return valMessage;
    }
};

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
    alert("le formulaire est bien enregistré");
    form.submit();
  } else {
    alert("le formulaire est incomplet ou présente des erreurs");
  }
  e.preventDefault();
  };