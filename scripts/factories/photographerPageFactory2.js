export function photographerPageFactory2( photographie ) {
    let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    let objPhotographie = {
        idPhotographie : photographie.id,
        idPhotographer : dataPhotographer.id,
        title : photographie.title,
        image : photographie.image, 
        likes : photographie.likes,
        date : photographie.date,
        pricePhotographie : photographie.price
    }
    
    const pictures = `assets/photographies/${dataPhotographer.image}`;

    function getUserCardDOM2() {
        
        // create elements html :
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        // const h3 = document.createElement( 'h3' );
        // const p1 = document.createElement( 'p' );
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
              "src": pictures, 
              "aria-label": "le nom de la photo est " + objPhotographie.title
            });
        h2.textContent = objPhotographie.title;
        h2.setAttribute("aria-label", "le titre de la photo est " + objPhotographie.title);
        // h3.textContent = city + ", " + country;
        // h3.setAttribute("aria-label", "la ville du photographe est " + city + ", " + country);
        // p1.textContent = tagline;
        // p1.setAttribute("aria-label", "le slogan du photographe est " + tagline);
        // p2.textContent =  price + "€/heure";
        // p2.setAttribute("aria-label", "le prix du photographe est " + price + " euros de l'heure");
        
        // add elements to article
        // setAttributes(a, {
        //     "href": "photographer.html",
        //     "aria-label": "au click cela redirige vers la page de ce photographe"
        // });

        // a.setAttribute(id);
        article.appendChild(img);
        article.appendChild(h2);
        // article.appendChild(h3);
        // article.appendChild(p1);
        // article.appendChild(p2);
        // a.appendChild(article);

        // save in localstorage the data who clicked
        // a.addEventListener('click', ()=> savePhotographer(data));

        return (article);
    }
    
    return { getUserCardDOM2 }
}
