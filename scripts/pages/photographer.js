//Mettre le code JavaScript lié à la page photographer.html
import {photographerPageFactory1} from "../factories/photographerPageFactory1.js";
import {photographerPageFactory2} from "../factories/photographerPageFactory2.js";


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
        console.log(e);
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

    const photographerModel = photographerPageFactory1();
    const userCardDOM1 = photographerModel.getUserCardDOM1();
    const userCardDOM2 = photographerModel.getUserCardDOM2();
    const userCardDOM3 = photographerModel.getUserCardDOM3();
    photographersHeader.appendChild(userCardDOM1);
    photographersHeader.appendChild(userCardDOM2);
    photographersHeader.appendChild(userCardDOM3);

    selectedWorksPhotograph.forEach((photographie) => {
        // console.log(photographie);
        const photographieModel = photographerPageFactory2( photographie);
        const userCardDOM2 = photographieModel.getUserCardDOM2();
        photographiesSection.appendChild(userCardDOM2);
    });
};
// Récupère les datas du photographe enregistré dans le localStorage
let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));

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
