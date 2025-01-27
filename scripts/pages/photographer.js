//Mettre le code JavaScript lié à la page photographer.html
import {photographerPageFactory} from "../factories/photographerPageFactory.js";

// Récupère les datas du photographe enregistré dans le localStorage
let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
const mainHidden = document.querySelector("main");
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
    // récupération des classes html à travailler
    const photographersHeader = document.querySelector(".photograph-header");
    const photographiesSection = document.querySelector(".photographies-section");
    // const centerB = document.querySelector(".center-block");
    const rightB = document.querySelector(".rightB");
    const leftB = document.querySelector(".leftB");
    // récupération des méthodes du design pattern factory 
    const photographerModel = photographerPageFactory();
    const userHeader = photographerModel.getUserHeader();
    const userPhotoHeader = photographerModel.getUserPhotoHeader();
    const userPrice = photographerModel.getUserPrice();
    // injection des éléments créés dans les éléments html récupérés

    leftB.appendChild(userHeader);
    rightB.appendChild(userPhotoHeader);
    photographersHeader.appendChild(userPrice);

    // itération pour sélectionner chaque photographie de la liste des photos
    selectedWorksPhotograph.forEach((photographie) => {
        // récupération des classes html à vais travailler
        const photographieModel = photographerPageFactory();
        // récupération des méthodes du design pattern factory
        const userPhotoBody = photographieModel.getUserPhotoBody(photographie);
        // injection des éléments créés dans les éléments html récupérés
        photographiesSection.appendChild(userPhotoBody);
    });
};

function updateData(data) {
    // récupérer la liste des photographies du DOM
    const photographiesSection = document.querySelector(".photographies-section");

    // let selectedWorksPhotograph = data;
    // console.log(selectedWorksPhotograph)
    // localStorage.setItem('selectedWorksPhotograph', JSON.stringify(data));
    // vider la liste
    photographiesSection.textContent = "";
    data.forEach((media) => {
        // récupération des articles html à travailler
        const filterPhotographieModel = photographerPageFactory();
        // récupération des méthodes du design pattern factory
        const filterUserPhotoBody = filterPhotographieModel.getUserPhotoBody(media);
        // injection des éléments créés dans les éléments html récupérés
        photographiesSection.appendChild(filterUserPhotoBody);
    });

}

function btnDropdownFilter(selectedWorksPhotograph){
    // récupérer l'ensemble du dropdown
    const dropdowns = document.querySelectorAll('.dropdownBlockDrop');
        
    // faire une boucle sur les éléments du dropdown
    dropdowns.forEach(dropdown => {
        // récupérer chaque élément du dropdown
        const select = dropdown.querySelector(".selectBtnDrop");
        const caret = dropdown.querySelector(".caretDrop");
        const menu = dropdown.querySelector(".menuDrop");
        const options = dropdown.querySelectorAll(".menuDrop a");
        const selected = dropdown.querySelector(".selectedDrop");
        // const dropdown1 = dropdown.querySelector(".sectionDrop");
    

        // fonction pour ouvrir le dropdown             
        function addMenuDrop(){
            select.classList.add('selectBtnDrop-clicked');
            // ajout classe pour rotation de la flèche du bouton dropdown
            caret.classList.add('caretDrop-rotate');
            // ajout d'une classe de style pour le menu déroulant ouvert
            menu.classList.add('menuDrop-open');
            // on change l'état de la aria-expended 
            select.ariaExpanded = "true";
        }
        
        // fonction pour fermer le dropdown
        function initializDropdown() {
            menu.classList.remove('menuDrop-open');
            caret.classList.remove('caretDrop-rotate');
            select.classList.remove('selectBtnDrop-clicked');
            select.ariaExpanded = "false";
        }

        if(mainHidden.ariaHidden == "false") { 

        // ajout d'un event au click sur le bouton du dropdown
        select.addEventListener('click', () => {
            // ajout d'une classe de style pour des effets sur le bouton dropdown
            select.classList.toggle('selectBtnDrop-clicked');
            // ajout classe pour rotation de la flèche du bouton dropdown
            caret.classList.toggle('caretDrop-rotate');
            // ajout d'une classe de style pour le menu déroulant ouvert
            menu.classList.toggle('menuDrop-open');
            // on change l'état de la aria-expended 
            select.ariaExpanded = "true";
        })

        // select.addEventListener('focusin', () => {
        //     select.style.background = "#DB8876";
            
        // })
        // select.addEventListener('focusout', () => {
        //     select.style.background = "#901C1C";
        // })  
        
    
        // si le menu dropdown est ouvert et qu'on clique ailleurs, il se ferme et le caret du bouton reprend sa position 
        document.addEventListener("mouseup", (event) => {
                if(menu.classList.contains('menuDrop-open') && !event.target.classList.contains('selectBtnDrop')){
                // if(!event.target.classList.contains('selectBtnDrop')){
                    initializDropdown();
                };  
        });

        
        // on écoute le menu, si le keyboard arrive dessus, on l'ouvre, si on en sort, on le referme
                options.forEach(option =>{
                    // ajout d'un event au click du clavier sur une option du menu sélectionnée
                    option.addEventListener('keydown', (e) => {
                        addMenuDrop();
                        if (e.code == "Enter") {
                            initializDropdown();
                            option.style.background = "#901C1C";
                        }
                        option.addEventListener('focusout', () => {
                            initializDropdown();
                            option.style.background = "#901C1C";
                        })
                        option.addEventListener('focusin', () => {
                            addMenuDrop();
                            option.style.background = "#DB8876";
                        })
                    })

                    option.addEventListener('focusin', (e) => {
                        addMenuDrop(); 
                        option.style.background = "#DB8876";
                        option.style.width = "10.2em";
                        // option.style.marginRight = "-1em";
                    })          
                    
                })
            }
                

        function filtersGesture(){
        // création d'un tableau vide à objectif de prendre la valeur du filtre sélectionné
        let resultFilters = [];
        if(mainHidden.ariaHidden == "false") {
        // boucle sur tous les éléments de la liste
        options.forEach(option =>{
            // ajout d'un event au click sur une option du menu sélectionnée
            option.addEventListener('click', () => {
                // affecter la valeur texte de l'option cliquée à la valeur du texte du bouton dropdown
                selected.innerText = option.innerText;
                option.style.background = "#901C1C";
                // filtre en fonction de l'élément sélectionné du menu + réécriture des éléments du menu
                if (selected.innerText == 'Popularité') {
                    resultFilters = selectedWorksPhotograph.sort((a, b) => (a.likes > b.likes ? 1 : -1));
                    options[0].innerText = 'Date';
                    options[1].innerText = 'Titre';
                    // select.ariaExpanded = "false";
                } else if (selected.innerText == 'Date') {
                    resultFilters = selectedWorksPhotograph.sort((a, b) => (a.date > b.date ? 1 : -1));
                    options[0].innerText = 'Popularité';
                    options[1].innerText = 'Titre';
                    // select.ariaExpanded = "false";
                } else if (selected.innerText == 'Titre') {
                    resultFilters = selectedWorksPhotograph.sort((a, b) => (a.title > b.title ? 1 : -1));
                    options[0].innerText = 'Popularité';
                    options[1].innerText = 'Date';
                    // select.ariaExpanded = "false";
                }

                // on inscrit la liste filtrée dans le storage pour la lightbox
                localStorage.setItem('selectedWorksPhotograph', JSON.stringify(resultFilters));
    
                // envoi de la liste filtrée en fonction de la sélection faite, à la fonction qui 
                updateData(resultFilters);
                
                })
            })
            
        }
        // // boucle sur tous les éléments de la liste
        // options.forEach(option =>{
        //     // ajout d'un event au click sur une option du menu sélectionnée
        //     option.addEventListener('click', () => {
        //         // affecter la valeur texte de l'option cliquée à la valeur du texte du bouton dropdown
        //         selected.innerText = option.innerText;
        //         option.style.background = "#901C1C";
        //         // filtre en fonction de l'élément sélectionné du menu + réécriture des éléments du menu
        //         if (selected.innerText == 'Popularité') {
        //             resultFilters = selectedWorksPhotograph.sort((a, b) => (a.likes > b.likes ? 1 : -1));
        //             options[0].innerText = 'Date';
        //             options[1].innerText = 'Titre';
        //             // select.ariaExpanded = "false";
        //         } else if (selected.innerText == 'Date') {
        //             resultFilters = selectedWorksPhotograph.sort((a, b) => (a.date > b.date ? 1 : -1));
        //             options[0].innerText = 'Popularité';
        //             options[1].innerText = 'Titre';
        //             // select.ariaExpanded = "false";
        //         } else if (selected.innerText == 'Titre') {
        //             resultFilters = selectedWorksPhotograph.sort((a, b) => (a.title > b.title ? 1 : -1));
        //             options[0].innerText = 'Popularité';
        //             options[1].innerText = 'Date';
        //             // select.ariaExpanded = "false";
        //         }

        //         // on inscrit la liste filtrée dans le storage pour la lightbox
        //         localStorage.setItem('selectedWorksPhotograph', JSON.stringify(resultFilters));
    
        //         // envoi de la liste filtrée en fonction de la sélection faite, à la fonction qui 
        //         updateData(resultFilters);
                
        //         // // supprimer la classe active sur les éléments de la liste du menu
        //         // options.forEach(option => {
        //         //     option.classList.remove('.activeDrop');
        //         // })
                
        //         // // ajout de la classe active sur l'élément clické
        //         // option.classList.add('activeDrop');
                
        //     })
        // })

    }

    filtersGesture();

    })
}

async function init() {
    // récupérer le résultat de la fonction de recherche des photos du photographe sélectionné
    let selectedWorksPhotograph = await getPhotographerWorks(dataPhotographer);
    // appeler la fonction pour détecter le bouton dropdown et gérer les filtres de la liste des photographies
    btnDropdownFilter(selectedWorksPhotograph);
    // envoyer par défaut la liste triée sur les likes au design pattern factory via la fonction displayData 
    displayData(selectedWorksPhotograph.sort((a, b) => (a.likes > b.likes ? 1 : -1)));
};

init();


// avec la navigation clavier, on change couleur du bouton contactez moi qui appelle la modale
const contactBtn = document.querySelector(".contact_button");

if(mainHidden.ariaHidden == "false") {
contactBtn.addEventListener('focus', () => {
    contactBtn.style.background = "#DB8876";
    contactBtn.addEventListener('focusout', () => {
        contactBtn.style.background = "#901C1C";
    })
})
}


// selectedWorksPhotograph.media.onkeydown = loadLightbox();

/////////////////// RESIZE HEADER ////////////////////

if(mainHidden.ariaHidden == "false") {
window.addEventListener("load", addClassToHeader);
// window.addEventListener("resize", addClassToHeader);
window.onresize = addClassToHeader;

// fonction pour modifier la disposition du header
function addClassToHeader (){

    // on récupère la largeur de la fenêtre et les éléments que l'on va modifier
    let width = window.innerWidth;
    const centerBlock = document.querySelector(".center-block");
    const rightB = document.querySelector(".rightB");
    const centerB = document.querySelector(".centerB");
    // on créée une div qui contiendra les éléments du header qui devront se superposer
    const gaterbuttonPicture = document.createElement('div');
    
    if(width < 1150){
        if (!centerBlock.classList.contains("stateFlexHeader")) {

            // alert("size less than 1150px");
            gaterbuttonPicture.className = "gaterbuttonPicture";
            gaterbuttonPicture.appendChild(centerB);
            gaterbuttonPicture.appendChild(rightB);
            gaterbuttonPicture.setAttribute("id", "toRemove");
            centerBlock.appendChild(gaterbuttonPicture);
            centerBlock.classList.add("stateFlexHeader");

        } 
        
    } else if (width >= 1150) {
        if (centerBlock.classList.contains("stateFlexHeader")) {

            centerBlock.classList.remove("stateFlexHeader");
            centerBlock.appendChild(centerB);
            centerBlock.appendChild(rightB);
            document.getElementById("toRemove").remove();
            
        }
        
    }
}   
}

////////////////////////////////////////
