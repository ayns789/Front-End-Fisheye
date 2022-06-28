let photographers = [];
    async function getPhotographers() {
        
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

        // console.log(photographers.photographers[0]);

        return photographers;
    }

 // let updateLike = document.getElementsByClassName(".totaLike");
            
//  heart.classList.toggle("active");
//  if(heart.classList.contains("active")) {
//    photographie.likes += 1;
//    // updateLike.textContent = photographie.likes++;
//    } else {
//    likes.textContent = photographie.likes -= 1;
   

//    // selectedPhotographies.likes -= 1;
//  }

// sumL.className = "totaLike";
    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });

    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
        
    };
    
    init();

    function savePhotographer(data){ 
        localStorage.clear();
        localStorage.setItem('photographerInfo', JSON.stringify(data));
    }
    