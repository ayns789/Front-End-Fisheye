//Mettre le code JavaScript lié à la page photographer.html
import {photographerPageFactory} from "../factories/photographerPageFactory.js";

// Récupère les datas du photographe enregistré dans le localStorage
let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
let photographers = [];

async function getPhotographerWorks(dataPhotographer) {
    let idPhotographer = dataPhotographer.id;
    let media = [];
    try{
        let response = await fetch("../../data/photographers.json")
            if(response.ok){
                let data = await response.json()
                photographers = data;
            } else {
                console.error('retour du serveur : ', response.statut);
            } 
    } catch(e){
        console.error(e);
    }
    
    media = photographers.media;

    let selectedWorksPhotograph = media.filter(x => x.photographerId === idPhotographer);
    localStorage.setItem('selectedWorksPhotograph', JSON.stringify(selectedWorksPhotograph));
    // addTitleModal(dataPhotographer);


    return selectedWorksPhotograph;
}



async function displayData( selectedWorksPhotograph ) {
    // récupération des classes html que je vais travailler
    const photographersHeader = document.querySelector(".photograph-header");
    const photographiesSection = document.querySelector(".photographies-section");
    // récupération des méthodes du design pattern factory 
    const photographerModel = photographerPageFactory();
    const userHeader = photographerModel.getUserHeader();
    const userPhotoHeader = photographerModel.getUserPhotoHeader();
    const userPrice = photographerModel.getUserPrice();
    // injection des éléments créés dans les éléments html récupérés
    photographersHeader.appendChild(userHeader);
    photographersHeader.appendChild(userPhotoHeader);
    photographersHeader.appendChild(userPrice);

    // itération pour sélectionner chaque photographie de la liste des photos
    selectedWorksPhotograph.forEach((photographie) => {
        // récupération des classes html que je vais travailler
        const photographieModel = photographerPageFactory();
        // récupération des méthodes du design pattern factory
        const userPhotoBody = photographieModel.getUserPhotoBody(photographie);
        // injection des éléments créés dans les éléments html récupérés
        photographiesSection.appendChild(userPhotoBody);
    });
};

function updateData(data) {
    const photographiesSection = document.querySelector(".photographies-section");
    photographiesSection.textContent = "";
    data.forEach((photographie) => {
        // récupération des classes html que je vais travailler
        const filterPhotographieModel = photographerPageFactory();
        // récupération des méthodes du design pattern factory
        const filterUserPhotoBody = filterPhotographieModel.getUserPhotoBody(photographie);
        // injection des éléments créés dans les éléments html récupérés
        photographiesSection.appendChild(filterUserPhotoBody);
    });

}

async function init() {
    // récupérer le résultat de la fonction de recherche des photos du photographe 
    // sélectionné
    let selectedWorksPhotograph = await getPhotographerWorks(dataPhotographer);
    let resultFilters = [];

    let dropdown = document.querySelector('select');
    dropdown.addEventListener('change', function (e) {
        e.target.value;
        if (e.target.value == 'popularity') {
            resultFilters = selectedWorksPhotograph.sort((a, b) => (a.likes > b.likes ? 1 : -1));
        } else if (e.target.value == 'date') {
            resultFilters = selectedWorksPhotograph.sort((a, b) => (a.date > b.date ? 1 : -1));
        } else if (e.target.value == 'title') {
            resultFilters = selectedWorksPhotograph.sort((a, b) => (a.title > b.title ? 1 : -1));
        }
        
        // selectedWorksPhotograph = resulFilters.map((x) => x);
        // resulFilters.push(selectedWorksPhotograph);
        updateData(resultFilters);

    });
    // appeler displayData en passant les arguments des données du photographe et de 
    // ses photographies
    displayData(selectedWorksPhotograph.sort((a, b) => (a.likes > b.likes ? 1 : -1)));
};

init();

// function displayModal() {
//          document.getElementById("contact_modal").style.display = "block";
//   };

//   function addTitleModal(e) {
//     let h2StringName = document.getElementsByClassName(".titleH");
//     // h2StringName.setAttribute('style', 'white-space: pre;');
//     // h2StringName.textContent += " \r \n "
//     // h2StringName.textContent += dataPhotographer.name;
//     h2StringName.textContent += `${dataPhotographer.name}`;
//     // return h2StringName;
//   }


// getPhotographerWorks(SelectedPhotographer);
// gather = regrouper

// const heartClicked = document.querySelectorAll('i');
// heartClicked.addEventListener("click", `incrementLikes(${photographie.id})`);
// function incrementLikes(id){
//     console.log(id);
//   }

