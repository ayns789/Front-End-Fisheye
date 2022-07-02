import PhotographerModel from '../classes/PhotographerModel.js';

export function photographerPageFactory( ) {

  // récupération des données du photographe dans le local storage
    let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    // instanciation du design pattern constructor pour créer un objet représentant le photographe
    let objPhotographer = new PhotographerModel(dataPhotographer);
    // récupération du chemin de la photo de profil du photographe
    const picture = `assets/photographers/${objPhotographer.portrait}`;

    // fonction pour créer la partie du header qui contient le nom, la localisation et le slogan du photographe
    function getUserHeader() {
        
        //création d'éléments html
        const div1 = document.createElement("div");
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p1 = document.createElement( 'p' );

        // affectation de classes et de valeurs aux éléments
        div1.className = "left-block";
        h2.textContent = objPhotographer.name;
        h2.setAttribute("aria-label", "le nom du photographe est " + objPhotographer.name);
        h3.textContent = objPhotographer.city + ", " + objPhotographer.country;
        h3.setAttribute("aria-label", "la ville du photographe est " + objPhotographer.city + ", " + objPhotographer.country);
        p1.textContent = objPhotographer.tagline;
        p1.setAttribute("aria-label", "le slogan du photographe est " + objPhotographer.tagline);
        
        // affectation des éléments dans l'élément html div créée
        div1.appendChild(h2);
        div1.appendChild(h3);
        div1.appendChild(p1);

        return (div1);
    }


    // fonction pour créer la partie du header qui contient la photo du photographe
    function getUserPhotoHeader() {
        
      //création d'éléments html
        const div2 = document.createElement("div");
        const img = document.createElement( 'img' );

        // fonction pour fournir plusieurs attributs à un élément
        function setAttributes(el, attrs) {
          for(let key in attrs) {
          el.setAttribute(key, attrs[key]);
          }
      }
        
        // affectation de classes et de valeurs aux éléments
        div2.className = "right-block";

          setAttributes(img, {
              "src": picture, 
              "aria-label": "une photo de profil du photographe"
            });

        // affectation des éléments dans l'élément html img créée
        div2.appendChild(img);

        return (div2);
    }

    // fonction pour créer la partie du header qui contient le tarif et le nombre de likes du photographe
    function getUserPrice() {

      // récupération des données du photographe dans le local storage 
      let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));

      // fonctionnalité de calcul de la somme totale des likes des médias du photographe
        let sumLikes;
        function calculateSumLikes(){
           sumLikes = selectedPhotographies.map(i=>i.likes).reduce((a,b)=>a+b);
        }

        calculateSumLikes();

        //création d'éléments html
        const div3 = document.createElement("div");
        const sumL = document.createElement("p");
        const p3 = document.createElement("p");
        const heart = document.createElement( 'i' );

        // affectation de classes et de valeurs aux éléments
        div3.className = "price-fixed";
        sumL.className = "totaLike";
        sumL.textContent = sumLikes + " ";
        p3.textContent = objPhotographer._price + "€ / jour";
        heart.className = "fa-solid fa-heart";

        // affectation des éléments dans l'élément html div créée
        div3.appendChild(sumL);
        div3.appendChild(heart);
        div3.appendChild(p3);

        return (div3);
    }

    // fonction pour créer le corps de la page avec chaque article du photographe
    function getUserPhotoBody(photographie) {

      // création d'objets pour représenter les articles indépendament
        let objPhotographie = {
          idPhotographie : photographie.id,
          idPhotographer : photographie.idPhotographer,
          title : photographie.title,
          image : photographie.image, 
          likes : photographie.likes,
          date : photographie.date,
          pricePhotographie : photographie.price
      }
      let objPhotographieVideo = {
          idPhotographie : photographie.id,
          idPhotographer : photographie.idPhotographer,
          title : photographie.title,
          video : photographie.video, 
          likes : photographie.likes,
          date : photographie.date,
          pricePhotographie : photographie.price
      }
      
      // récupération des chemins des médias
      const picture = `assets/photographies/${objPhotographie.image}`;
      const movie = `assets/photographies/${objPhotographieVideo.video}`;
          
          //création d'éléments html
          const article = document.createElement( 'article' );
          const video = document.createElement( 'video' );
          const source = document.createElement( 'source' );
          const img = document.createElement( 'img' );
          const h2likes = document.createElement( 'div' );
          const h2 = document.createElement( 'h2' );
          const likes = document.createElement( 'p' );
          const heart = document.createElement( 'i' );

          // fonction pour fournir plusieurs attributs à un élément
          function setAttributes(el, attrs) {
            for(let key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
          }

          // affectation de classes et de valeurs aux éléments
          h2likes.className = "block-photographies";
          heart.className = "fa-solid fa-heart";
          img.className = "media";
          video.className = "media";
          

          // dissocier les photos et vidéos pour certaines affectations 
          if(objPhotographieVideo.video){
            setAttributes(source, {
              "src": movie, 
              "type": "video/mp4",
              "aria-label": "le nom de la video est " + movie
            });
            setAttributes(video, {
              "controls": "controls",
              "loop": "true"
            });
  
            h2.textContent = objPhotographieVideo.title;
            h2.setAttribute("aria-label", "le titre de la video est " + objPhotographieVideo.title);
            likes.textContent = objPhotographieVideo.likes;
            likes.setAttribute("aria-label", "le nombre de 'likes' est " + objPhotographieVideo.likes);
            video.appendChild(source);
            article.appendChild(video);
          } else  {
            setAttributes(img, {
              "src": picture, 
              "aria-label": "le nom de la photo est " + picture
            });
  
            h2.textContent = objPhotographie.title;
            h2.setAttribute("aria-label", "le titre de la photo est " + objPhotographie.title);
            likes.textContent = objPhotographie.likes;
            likes.setAttribute("aria-label", "le nombre de 'likes' est " + objPhotographie.likes);
            article.appendChild(img);
          }
        
          // affectation des éléments dans l'élément html article créé
          h2likes.appendChild(h2);
          h2likes.appendChild(likes);
          h2likes.appendChild(heart);
          article.appendChild(h2likes);

          // fonction pour incrémenter / décrémenter des likes aux médias, et mettre à jour le local storage
          heart.onclick = function() {
            // je récupère la liste des photographies concernée
            let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));
            // je récupère l'objet concerné, par son id
            let objIndex = selectedPhotographies.findIndex((obj => obj.id == photographie.id));
            // je rajoute une classe avec un toggle, pour détecter si l'élément possède cette classe
            heart.classList.toggle("active");

              if(heart.classList.contains("active")) {
                // j'incrémente dans la data like de la photographie sur la page
                likes.textContent = photographie.likes += 1;
                // j'incrémente dans la data like de la photographie dans le local storage
                selectedPhotographies[objIndex].likes += 1;
                // j'inscris la liste mise à jour des photographies concernées
                localStorage.setItem('selectedWorksPhotograph', JSON.stringify(selectedPhotographies))
              } else {
                likes.textContent = photographie.likes -= 1;
                selectedPhotographies[objIndex].likes -= 1;
                localStorage.setItem('selectedWorksPhotograph', JSON.stringify(selectedPhotographies))
              }
// je récupère mon dom, ainsi que la fonction qui exécute la construction des éléments likes / tarif par jour
// en la replacant dans mon dom, la fonctionnalité getUserPrice() va se réexécuter ainsi que le calcul des likes total, maj
              const photographersHeader = document.querySelector(".photograph-header");
              const photographerModel = photographerPageFactory();
              const userPrice = photographerModel.getUserPrice();
              photographersHeader.appendChild(userPrice);

          }
          
          return (article);
      }
      // function getNameModal() {
      //   const modalName = document.getElementById("titlePhotograph");
      //   modalName.textContent = objPhotographer.name;
      //   return modalName;

      // }
      
    
    return { getUserHeader, getUserPhotoHeader, getUserPrice, getUserPhotoBody };
}
