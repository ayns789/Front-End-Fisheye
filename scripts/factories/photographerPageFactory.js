import PhotographerModel from '../classes/PhotographerModel.js';
// import { createRequire } from "browserify-fs";
// import fs from 'node:fs/promises';
// const buffer = readFileSync(new URL('./data.proto', import.meta.url));
// const { createRequire } = require('module');
// const require = createRequire(import.meta.url);
// const yourData = require("../../data/photographers.json");

export function photographerPageFactory( ) {
    let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    // console.log(dataPhotographer.id);
    let objPhotographer = new PhotographerModel(dataPhotographer);
    
    const picture = `assets/photographers/${objPhotographer.portrait}`;

    function getUserHeader() {
        
        const div1 = document.createElement("div");
        div1.className = "left-block";

        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p1 = document.createElement( 'p' );
        
        h2.textContent = objPhotographer.name;
        h2.setAttribute("aria-label", "le nom du photographe est " + objPhotographer.name);
        h3.textContent = objPhotographer.city + ", " + objPhotographer.country;
        h3.setAttribute("aria-label", "la ville du photographe est " + objPhotographer.city + ", " + objPhotographer.country);
        p1.textContent = objPhotographer.tagline;
        p1.setAttribute("aria-label", "le slogan du photographe est " + objPhotographer.tagline);
        
        div1.appendChild(h2);
        div1.appendChild(h3);
        div1.appendChild(p1);

        return (div1);
    }


    function getUserPhotoHeader() {
        
        const div2 = document.createElement("div");
        div2.className = "right-block";

        const img = document.createElement( 'img' );

        function setAttributes(el, attrs) {
            for(let key in attrs) {
            el.setAttribute(key, attrs[key]);
            }
        }
          setAttributes(img, {
              "src": picture, 
              "aria-label": "une photo de profil du photographe"
            });

        div2.appendChild(img);

        return (div2);
    }


    function getUserPrice() {

        let selectedPhotographies = JSON.parse(localStorage.getItem("selectedWorksPhotograph"));
        // alert(selectedPhotographies);
        
        let sumLikes = selectedPhotographies.map(i=>i.likes).reduce((a,b)=>a+b);

        const div3 = document.createElement("div");
        div3.className = "price-fixed";
        const sumL = document.createElement("p");
        sumL.className = "totaLike";
        const p3 = document.createElement("p");
        sumL.textContent = sumLikes + " ";
        p3.textContent = objPhotographer._price + "€ / jour";
        const heart = document.createElement( 'i' );
          heart.className = "fa-solid fa-heart";

        // function setAttributes(el, attrs) {
        //     for(let key in attrs) {
        //     el.setAttribute(key, attrs[key]);
        //     }
        // }

        div3.appendChild(sumL);
        div3.appendChild(heart);
        div3.appendChild(p3);

        return (div3);
    }

    function getUserPhotoBody(photographie) {

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
      
      const picture = `assets/photographies/${objPhotographie.image}`;
      const movie = `assets/photographies/${objPhotographieVideo.video}`;
          
          // create elements html :
          const article = document.createElement( 'article' );
          const video = document.createElement( 'video' );
          const source = document.createElement( 'source' );
          const img = document.createElement( 'img' );
          const h2likes = document.createElement( 'div' );
          const h2 = document.createElement( 'h2' );
          const likes = document.createElement( 'p' );
          const heart = document.createElement( 'i' );
          h2likes.className = "block-photographies";
          heart.className = "fa-solid fa-heart";

          
//           const heartClick = document.querySelector(".fa-heart");
//           heartClick.addEventListener('click', () => {
//             if(objPhotographieVideo.video){
//                 objPhotographieVideo.likes++;
//             } else {
//                 objPhotographie.likes++;
//             }
            
//   })
// const heartClick = document.querySelector(".fa-heart");
// const likesClicked = document.querySelector('.counter');

// $button.addEventListener('click', function(){
//   $counter.value = parseInt($counter.value) + 1; // `parseInt` converts the `value` from a string to a number
// }, false);
// function incrementValue()
// {
//     var value = parseInt(document.getElementById('number').value, 10);
//     value = isNaN(value) ? 0 : value;
//     value++;
//     document.getElementById('number').value = value;
// }
          
          // function to add multiples attributes to an element html
          function setAttributes(el, attrs) {
            for(let key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
          }

          // add attributes and values to the elements html :
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
            // video.setAttribute("controls", "controls")
  
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
        
          h2likes.appendChild(h2);
          h2likes.appendChild(likes);
          h2likes.appendChild(heart);
          article.appendChild(h2likes);

          heart.onclick = function() {
            // document.getElementsByClassName(".totaLike").value = +1;
            heart.classList.toggle("active");

            if(heart.classList.contains("active")) {
              likes.textContent = photographie.likes += 1;
              document.getElementsByClassName(".totaLike").value = sumLikes +1;
            } else {
              likes.textContent = photographie.likes -= 1;
            }

          }
          
          return (article);
      }
      
    
    return { getUserHeader, getUserPhotoHeader, getUserPrice, getUserPhotoBody};
}
