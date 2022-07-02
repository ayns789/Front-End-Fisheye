 
  
   function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;


    
    function getUserCardDOM() {
        
        // create elements html :
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const p1 = document.createElement( 'p' );
        const p2 = document.createElement( 'p' );
        const a = document.createElement( 'a' );
         

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
        h2.textContent = name;
        h2.setAttribute("aria-label", "le nom du photographe est " + name);
        h3.textContent = city + ", " + country;
        h3.setAttribute("aria-label", "la ville du photographe est " + city + ", " + country);
        p1.textContent = tagline;
        p1.setAttribute("aria-label", "le slogan du photographe est " + tagline);
        p2.textContent =  price + "€/heure";
        p2.setAttribute("aria-label", "le prix du photographe est " + price + " euros de l'heure");
        
        // add elements to article
        setAttributes(a, {
            "href": "photographer.html",
            "aria-label": "au click cela redirige vers la page de ce photographe"
        });

        // a.setAttribute(id);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        a.appendChild(article);

        // save in localstorage the data who clicked
        a.addEventListener('click', ()=> savePhotographer(data));

        return (a);
    }
    
    return {  getUserCardDOM }
}
