import PhotographerModel from '../classes/PhotographerModel.js';

export function photographerPageFactory1( ) {
    let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    console.log(dataPhotographer);

    let objPhotographer = new PhotographerModel(dataPhotographer);
    
    const picture = `assets/photographers/${objPhotographer.portrait}`;

    function getUserCardDOM1() {
        
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


    function getUserCardDOM2() {
        
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


    function getUserCardDOM3() {
        
        const div3 = document.createElement("div");
        div3.className = "price-fixed";
        const p3 = document.createElement("p");
        p3.textContent = objPhotographer._price + "€ / jour";

        // function setAttributes(el, attrs) {
        //     for(let key in attrs) {
        //     el.setAttribute(key, attrs[key]);
        //     }
        // }
        //   setAttributes(img, {
        //       "src": picture, 
        //       "aria-label": "une photo de profil du photographe"
        //     });

        div3.appendChild(p3);

        return (div3);
    }
    
    return { getUserCardDOM1, getUserCardDOM2, getUserCardDOM3};
}
