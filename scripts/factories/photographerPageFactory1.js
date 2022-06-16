export function photographerPageFactory1( ) {
    let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    console.log(dataPhotographer);
    let objPhotographer = {
        idPhotographer : dataPhotographer.id,
        name : dataPhotographer.name,
        portrait : dataPhotographer.portrait,
        city : dataPhotographer.city,
        country : dataPhotographer.country,
        tagline : dataPhotographer.tagline,
        pricePhotographer : dataPhotographer.price,
    };
    
    const picture = `assets/photographers/${dataPhotographer.portrait}`;

    function getUserCardDOM1() {
        
        // create elements html :
        const article = document.createElement( 'article' );
        const div1 = document.createElement("div");
        div1.className = "left-block";
        const div2 = document.createElement("div");
        div2.className = "right-block";

        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p1 = document.createElement( 'p' );
        // const p2 = document.createElement( 'p' );
        // const a = document.createElement( 'a' );
         

        // add attributes and values to the elements html :
        // function to add multiples attributes to an element html
    function setAttributes(el, attrs) {
        for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
        }
    }
          setAttributes(img, {
              "src": picture, 
              "aria-label": "une photo de profil du photographe"
            });
        h2.textContent = objPhotographer.name;
        h2.setAttribute("aria-label", "le nom du photographe est " + objPhotographer.name);
        h3.textContent = objPhotographer.city + ", " + objPhotographer.country;
        h3.setAttribute("aria-label", "la ville du photographe est " + objPhotographer.city + ", " + objPhotographer.country);
        p1.textContent = objPhotographer.tagline;
        p1.setAttribute("aria-label", "le slogan du photographe est " + objPhotographer.tagline);
        // p2.textContent =  price + "€/heure";
        // p2.setAttribute("aria-label", "le prix du photographe est " + price + " euros de l'heure");
        
        // add elements to article
        // setAttributes(a, {
        //     "href": "photographer.html",
        //     "aria-label": "au click cela redirige vers la page de ce photographe"
        // });

        // a.setAttribute(id);
        div2.appendChild(img);
        div1.appendChild(h2);
        div1.appendChild(h3);
        div1.appendChild(p1);
        // article.appendChild(p2);


        article.appendChild(div1);
        article.appendChild(div2);

        return (article);
    }
    
    return { getUserCardDOM1 }
}
