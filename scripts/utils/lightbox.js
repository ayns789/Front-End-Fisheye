let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));

window.onload = () => {

    // sélection des éléments html avec lesquels on travaille
    const lightbox = document.querySelector('.lightbox');
    const lightboxContainer = document.querySelector('.lightbox__container');
    const lightboxBtnClose = document.querySelector('.lightbox__close');
    const lightboxBtnNext = document.querySelector('.lightbox__next');
    const lightboxBtnPrev = document.querySelector('.lightbox__prev');
    const links = document.querySelectorAll("article a");

    const regexVideo = "mp4";

    // on ajout un écouteur d'événement à chaque média cliqué
    for(let link of links){
        link.addEventListener("click", function(e){
            e.preventDefault();
            // on affiche la lightbox
            lightbox.style.display = 'block';
            // on récupère la partie du chemin du fichier, dans le chemin href 
            let pathFileMedia = this.href.substring(43, 100);
            
            // dissocier photos et vidéos pour les traiter selon le cas
            if(this.href.includes(regexVideo)){
                // trouver l'index du média sélectionné
                let index = selectedPhotographies.findIndex(object => {
                    return object.video == pathFileMedia;
                });
                // envoyer à la fonction d'affichage des médias dans la lightbox
                displayLightbox(selectedPhotographies[index]);
            } else {
                let index = selectedPhotographies.findIndex(object => {
                    return object.image == pathFileMedia;
                });
                
                displayLightbox(selectedPhotographies[index]);
            }

        })
    }

    // fonction qui va gérer l'affichage des médias de la lightbox
    function displayLightbox(currentMedia) {

        // remplira le contenu lightbox avec le média à afficher et son titre
        lightboxContainer.innerHTML = mediaLightbox(currentMedia);
        // on sauvegarde dans le localstorage le média sélectionné
        localStorage.setItem("currentMediaLightbox", JSON.stringify(currentMedia));

    }

    // fonction qui va remplir le contenu de la lightbox selon photo ou video
    function mediaLightbox(mediaSelected) {
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
            '<video autoplay loop controls="controls class="media">' +
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
    }
    
    // clic flèche précédente
    lightboxBtnPrev.addEventListener('click', () => {
        let currentMedia = JSON.parse(localStorage.getItem("currentMediaLightbox"));
        
        let index = selectedPhotographies.findIndex((obj => obj.id == currentMedia.id));

        index--;
        if (index < 0) {
            index = selectedPhotographies.length - 1;
        }
        displayLightbox(selectedPhotographies[index]);
    });

    // clic flèche suivant
    lightboxBtnNext.addEventListener('click', () => {
        let currentMedia = JSON.parse(localStorage.getItem("currentMediaLightbox"));
        
        let index = selectedPhotographies.findIndex((obj => obj.id == currentMedia.id));
        
            index ++;
            console.log(index)
            if (index === selectedPhotographies.length) {
                index = 0;
            }
            displayLightbox(selectedPhotographies[index]);
    })
    
    
    // fermeture lightbox au clic sur la croix
        lightboxBtnClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

          //navigation au clavier, fleches gauche et droite, touche échap pour sortir
    window.addEventListener('keydown', function (e) {
        if (e.key == 'lightboxBtnNext') {
        displayNext();
        }
        if (e.key == 'lightboxBtnPrev') {
        displayPrevious();
        }
        if (e.key == 'Escape') {
            lightboxContainer.style.display = 'none';
        }
    })

}


