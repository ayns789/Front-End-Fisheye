// import {photographerPageFactory} from "../factories/photographerPageFactory.js";


const body = document.querySelectorAll('body *');
const modal = document.getElementById("contact_modal");
const mainHidden = document.querySelector("main");

function displayModal() {
	modal.style.display = "block";
  modal.ariaHidden = "false";
  mainHidden.ariaHidden = "true";
	modal.style.backgroundColor = "rgba(255, 255, 255, 1)";
	// body.style.color = "rgba(255, 255, 255, 1)";
  let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
  const h2Name = document.getElementById("titlePhotograph");
  h2Name.innerText = dataPhotographer.name;
}

function closeModal() {
    modal.style.display = "none";
    modal.ariaHidden = "true";
    mainHidden.ariaHidden = "false";
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
    errorFirstName.setAttribute("alt", "Vous devez saisir au moins 2 caractères"); 
    errorFirstName.style.color = "red";
    errorFirstName.style.backgroundColor = "white";
    errorFirstName.style.borderRadius = "0.5em 0.5em 0 0";
    errorFirstName.style.padding = "0 0.5em 0 0.5em";
    errorFirstName.style. border = "1px solid red";
    errorFirstName.style.fontSize = "1.3em";
    errorFirstName.style.fontWeight = "bold";
    errorFirstName.style.marginBottom = "-0.2em";
  } else if (!regexLetters.test(valFirstName)){ 
      errorFirstName.innerText = "Vous devez saisir uniquement des lettres";
      errorFirstName.setAttribute("alt", "Vous devez saisir uniquement des lettres"); 
      errorFirstName.style.color = "red";
      errorFirstName.style.backgroundColor = "white";
      errorFirstName.style.borderRadius = "0.5em 0.5em 0 0";
      errorFirstName.style.marginBottom = "-0.2em";
      errorFirstName.style.padding = "0 0.5em 0 0.5em";
      errorFirstName.style. border = "1px solid red";
      errorFirstName.style.fontSize = "1.3em";
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
    errorLastName.setAttribute("alt", "Vous devez saisir au moins 2 caractères"); 
    errorLastName.style.color = "red";
    errorLastName.style.backgroundColor = "white";
    errorLastName.style.borderRadius = "0.5em 0.5em 0 0";
    errorLastName.style.marginBottom = "-0.2em";
    errorLastName.style.padding = "0 0.5em 0 0.5em";
    errorLastName.style. border = "1px solid red";
    errorLastName.style.fontSize = "1.3em";
    errorLastName.style.fontWeight = "bold";
    
  } else if (!regexLetters.test(valLastName)){ 
      errorLastName.innerText = "Vous devez saisir uniquement des lettres";
      errorLastName.setAttribute("alt", "Vous devez saisir uniquement des lettres");
      errorLastName.style.color = "red";
      errorLastName.style.backgroundColor = "white";
      errorLastName.style.borderRadius = "0.5em 0.5em 0 0";
      errorLastName.style.marginBottom = "-0.2em";
      errorLastName.style.padding = "0 0.5em 0 0.5em";
      errorLastName.style. border = "1px solid red";
      errorLastName.style.fontSize = "1.3em";
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
      errorEmail.setAttribute("alt", "Vous devez saisir une adresse email valide");
      errorEmail.style.color = "red";
      errorEmail.style.backgroundColor = "white";
      errorEmail.style.borderRadius = "0.5em 0.5em 0 0";
      errorEmail.style.marginBottom = "-0.2em";
      errorEmail.style.padding = "0 0.5em 0 0.5em";
      errorEmail.style. border = "1px solid red";
      errorEmail.style.fontSize = "1.3em";
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
    errorMessage.setAttribute("alt", "Vous devez saisir au moins 20 caractères");
    errorMessage.style.color = "red";
    errorMessage.style.backgroundColor = "white";
    errorMessage.style.borderRadius = "0.5em 0.5em 0 0";
    errorMessage.style.marginBottom = "-0.6em";
    errorMessage.style.padding = "0 0.5em 0 0.5em";
    errorMessage.style. border = "1px solid red";
    errorMessage.style.fontSize = "1em";
    errorMessage.style.fontWeight = "bold";
    
  } else if (valMessage.length > 200 ){ 
    errorMessage.innerText = "Votre message est trop grand, 200caractères maximum";
    errorMessage.setAttribute("alt", "Votre message est trop grand, 200caractères maximum");
    errorMessage.style.color = "red";
    errorMessage.style.backgroundColor = "white";
    errorMessage.style.borderRadius = "0.5em 0.5em 0 0";
    errorMessage.style.marginBottom = "-0.6em";
    errorMessage.style.padding = "0 0.5em 0 0.5em";
    errorMessage.style. border = "1px solid red";
    errorMessage.style.fontSize = "1em";
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

// let inputs, index;

// inputs = document.getElementsByTagName('input');
// for (index = 0; index < inputs.length; ++index) {
//     // deal with inputs[index] element.
// }

// function changeInputsByKeyboard(val){

//   let inputs, indx;

//   // trouver les éléments enfants "inputs" de la balise form
//   inputs = form.getElementsByTagName('input');
  
//   if(val == "more"){
//     for (indx = 0; indx < inputs.length; ++indx) {
//       indx++;
//   }
//   }

//   if(val == "less"){
//     for (indx = 0; indx < inputs.length; --indx) {
//       indx--;
//       if(indx == 0) return indx = 0;
//   }
//   }
// }


// document.addEventListener("keydown", (event) => {
//   // console.log(event.code);
//   if(modal.ariaHidden = "false"){
//     switch (event.code) {
//       case 'ArrowDown':
//           changeInputsByKeyboard("more");
//           break;
//       case 'ArrowUp':
//         changeInputsByKeyboard("less");
//           break;
//       case 'Escape':
//           modal.style.display = 'none';
//           mainHidden.ariaHidden = "false";
//           modal.ariaHidden = "true";
//           break;
//       case 'Enter':
//           modal.style.display = 'none';
//           mainHidden.ariaHidden = "false";
//           modal.ariaHidden = "true";
//           break;
//       }
//   }
// }) 

///////////////////////////////////////////
////////////////////////////////////////////

// let ins = document.querySelectorAll('input[type=""]');

// ins.forEach(function(input) {
// 	/**
// 	 * Control on keyup to catch what the user intent to do.
// 	 * I could have check for numeric key only here, but I didn't.
// 	 */
// 	input.addEventListener('keyup', function(e){
// 		// Break if Shift, Tab, CMD, Option, Control.
// 		if (e.keyCode === 16 || e.keyCode == 9 || e.keyCode == 224 || e.keyCode == 18 || e.keyCode == 17) {
// 			 return;
// 		}
		
// 		// On Backspace or left arrow, go to the previous field.
// 		if ( (e.keyCode === 8 || e.keyCode === 37) && this.previousElementSibling && this.previousElementSibling.tagName === "INPUT" ) {
// 			this.previousElementSibling.select();
// 		} else if (e.keyCode !== 8 && this.nextElementSibling) {
// 			this.nextElementSibling.select();
// 		}
// 	});
	
// 	/**
// 	 * Better control on Focus
// 	 * - don't allow focus on other field if the first one is empty
// 	 * - don't allow focus on field if the previous one if empty (debatable)
// 	 * - get the focus on the first empty field
// 	 */
// 	input.addEventListener('focus', function(e) {
// 		// If the focus element is the first one, do nothing
// 		if ( this === form ) return;
		
// 		// If value of input 1 is empty, focus it.
// 		if ( form.value == '' ) {
// 			form.focus();
// 		}
		
// 		// If value of a previous input is empty, focus it.
// 		// To remove if you don't wanna force user respecting the fields order.
// 		if ( this.previousElementSibling.value == '' ) {
// 			this.previousElementSibling.focus();
// 		}
// 	});
// });

// /**
//  * Handle copy/paste of a big number.
//  * It catches the value pasted on the first field and spread it into the inputs.
//  */
// form.addEventListener('input', function(e) {
// 	let data = e.data || this.value; // Chrome doesn't get the e.data, it's always empty, fallback to value then.
// 	if ( ! data ) return; // Shouldn't happen, just in case.
// 	if ( data.length === 1 ) return; // Here is a normal behavior, not a paste action.
	
// 	for (i = 0; i < data.length; i++ ) {
// 		ins[i].value = data[i];
// 	}
// });
  
  


//////////////////////////////////////////

const form = document.getElementById("form");
const buttonSubmit = document.getElementById('btn-submit');
buttonSubmit.addEventListener('click', formValidation);
 
  // send form if conditions are ok
  form.addEventListener("submit", (e) => {
    
    modal.style.display = "none";
    modal.ariaHidden = "true";
    mainHidden.ariaHidden = "false";
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