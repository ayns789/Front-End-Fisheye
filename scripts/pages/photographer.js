//Mettre le code JavaScript lié à la page photographer.html

let idForPage = localStorage.getItem("idPhotograph");

// photographers.filter(photographer => photographer.id.some(photographer.id == idForPage))

// let medias = [];
//     async function getMedias() {
        
//         try{
//             let response = await fetch("../../data/photographers.json")
//                 if(response.ok){
//                     let data = await response.json()
//                     medias = data;
//                 } else {
//                     console.error('retour du serveur : ', response.statut);
//                 } 
//         } catch(e){
//             console.log(e);
//         }

//         console.log(photographers.media[0]);

//         return photographers;
//     }

//     async function displayData(medias) {
//         const mediasSection = document.querySelector(".medias_section");

//         medias.forEach((media) => {
//             const mediaModel = mediaFactory(media);
//             const userCardDOM = mediaModel.getUserCardDOM();
//             mediasSection.appendChild(userCardDOM);
//         });

//     };

//     async function init() {
//         // Récupère les datas des photographes
//         const { medias } = await getMedias();
//         displayData(medias);
        
//     };
    
//     init();