
function loadLightbox(){
    
    let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));
// window.onload = () => {
    // window.addEventListener("load", () => {
    // sélection des éléments html avec lesquels on travaille
    const lightbox = document.querySelector('.lightbox');
    const lightboxContainer = document.querySelector('.lightbox__container');
    const lightboxBtnClose = document.querySelector('.lightbox__close');
    const lightboxBtnNext = document.querySelector('.lightbox__next');
    const lightboxBtnPrev = document.querySelector('.lightbox__prev');
    const links = document.querySelectorAll("article a");
    const mainHidden = document.querySelector("main");

    const regexVideo = "mp4";
    let currentMedia;
    let btnClicked = false;
    

    function load(){

        // si les boutons next / prev ne sont cliqués, on continue
        if(btnClicked == false){
            // on ajout un écouteur d'événement à chaque média cliqué
            for(let link of links){
                link.addEventListener("click", function(e){
                    e.preventDefault();
                    currentMedia = "";
                    // on affiche la lightbox
                    lightbox.style.display = 'block';
                    mainHidden.ariaHidden = "true";
                    lightbox.ariaHidden = "false";
                    // on récupère la partie du chemin du fichier, dans le chemin href 
                    let pathFileMedia = this.href.substring(43, 100);
                    
                    // dissocier photos et vidéos pour les traiter selon le cas
                    if(this.href.includes(regexVideo)){
                        // trouver l'index du média sélectionné
                        let index = selectedPhotographies.findIndex(object => {
                            return object.video == pathFileMedia;
                        });
                        currentMedia = index;
                        // envoyer à la fonction d'affichage des médias dans la lightbox
                        displayLightbox(selectedPhotographies[currentMedia]);
                    } else {
                        let index = selectedPhotographies.findIndex(object => {
                            return object.image == pathFileMedia;
                        });
                        currentMedia = index;
                        displayLightbox(selectedPhotographies[currentMedia]);
                    }
                // btnClicked = false;
                })
        
            }
        }
    }

    load();

    
    document.addEventListener("mouseup", (event) => {
        if(event.target.classList.contains('media')){
            loadLightbox();
        }
    })
    document.addEventListener("keydown", (event) => {
        if(event.code == "Enter"){
            loadLightbox();
            mainHidden.ariaHidden = "true";
            lightbox.ariaHidden = "false";
        }
    })


    // fonction qui va gérer l'affichage des médias de la lightbox
    function displayLightbox(currentMedia) {
        // console.log(currentMedia)
        // remplira le contenu lightbox avec le média à afficher et son titre
        lightboxContainer.innerHTML = mediaLightbox(currentMedia);
        // currentMedia = {};
    }


    // fonction qui va remplir le contenu de la lightbox selon photo ou video
    function mediaLightbox(mediaSelected) {
        // console.log(mediaSelected)
        if (mediaSelected.image) {
            return (
                '<img class="media" src="' +
                `assets/photographies/${mediaSelected.image}` +
                '" alt="' +
                mediaSelected.title +
                '"img>' +
                '<h2 class="titre_photo_lightbox">' +
                mediaSelected.title +
                '</h2>'
            );
        } else if (mediaSelected.video) {
            return (
                '<video autoplay loop controls="controls" class="media">' +
                '<source src="' +
                `assets/photographies/${mediaSelected.video}` +
                '" alt="' +
                mediaSelected.title +
                '" type=video/mp4>' +
                '</video> ' +
                '<h2 class="titre_photo_lightbox">' +
                mediaSelected.title +
                '</h2>'
            );
        }
        // mediaSelected ="";
    }


    // au clic sur flèche suivante
    lightboxBtnNext.addEventListener('click', displayBtnNext);
    
    function displayBtnNext() {
        currentMedia ++;
        // pour faire repartir la liste à 0 quand ca arrive au bout
        if (currentMedia === selectedPhotographies.length) {
            currentMedia = 0;
        }
        displayLightbox(selectedPhotographies[currentMedia]);
        btnClicked = true;
    }


    // au clic sur flèche précédente
    lightboxBtnPrev.addEventListener('click', displayBtnPrev);

    function displayBtnPrev() {
        currentMedia -= 1;
        if (currentMedia < 0) {
            currentMedia = selectedPhotographies.length - 1;
        }
        displayLightbox(selectedPhotographies[currentMedia]);
        btnClicked = true;
    };
    

    // fermeture lightbox au clic sur la croix
    lightboxBtnClose.addEventListener('click', () => {
        lightbox.style.display = 'none';
        mainHidden.ariaHidden = "false";
        lightbox.ariaHidden = "true";
    });

    // navigation au clavier, fleches gauche et droite, touche échap pour sortir
    document.onkeydown = function (event) {
        // console.log(event.code);
        if(lightbox.ariaHidden == "false"){
            switch (event.code) {
                case 'ArrowLeft':
                    displayBtnPrev();
                    //   console.log("Left key is pressed.");
                    break;
                case 'ArrowRight':
                    displayBtnNext();
                    //   console.log("Right key is pressed.");
                    break;
                case 'Escape':
                    lightbox.style.display = 'none';
                    mainHidden.ariaHidden = "false";
                    lightbox.ariaHidden = "true";
                    break;
                }
        }
    };

    
   
}

loadLightbox();





