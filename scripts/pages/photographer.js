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
    // console.log(photographerWorks);
    // let SelectedWorksPhotograph = new PhotographerWork(photographerWorks);
    // console.log(photographerWorks);
    return selectedWorksPhotograph;
}



async function displayData( selectedWorksPhotograph ) {
    const photographersHeader = document.querySelector(".photograph-header");
    const photographiesSection = document.querySelector(".photographies-section");
    // console.log(dataPhotographer);
    // console.log(photographie);
    // console.log(selectedWorksPhotograph);

    const photographerModel = photographerPageFactory();
    const userHeader = photographerModel.getUserHeader();
    const userPhotoHeader = photographerModel.getUserPhotoHeader();
    const userPrice = photographerModel.getUserPrice();
    photographersHeader.appendChild(userHeader);
    photographersHeader.appendChild(userPhotoHeader);
    photographersHeader.appendChild(userPrice);

    selectedWorksPhotograph.forEach((photographie) => {
        // console.log(photographie);
        const photographieModel = photographerPageFactory();
        const userPhotoBody = photographieModel.getUserPhotoBody(photographie);
        photographiesSection.appendChild(userPhotoBody);
    });
};


// faire une class avec les datas du photographe
// let SelectedPhotographer = new PhotographerModel(dataPhotographer);



async function init() {
    // console.log(dataPhotographer);
    // récupérer le résultat de la fonction de recherche des photos du photographe 
    // sélectionné
    let selectedWorksPhotograph = await getPhotographerWorks(dataPhotographer);
    // console.log(selectedWorksPhotograph);
    // console.log(SelectedWorksPhotograph);
    // appeler displayData en passant les arguments des données du photographe et de 
    // ses photographies
    displayData( selectedWorksPhotograph);
};

init();
// getPhotographerWorks(SelectedPhotographer);
// gather = regrouper
