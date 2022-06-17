// import PhotographerWork from '../classes/PhotographerWork.js';

export function photographerPageFactory2( photographie ) {
    // let dataPhotographer = JSON.parse(localStorage.getItem("photographerInfo"));
    
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

    function getUserCardDOM2() {
        
        // create elements html :
        const article = document.createElement( 'article' );
        const video = document.createElement( 'video' );
        const source = document.createElement( 'source' );
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

  if(objPhotographieVideo.video){
    setAttributes(source, {
      "src": movie, 
      "type": "video/mp4",
      "aria-label": "le nom de la video est " + objPhotographieVideo.title
    });
    setAttributes(video, {
      "width": "300", 
      "height": "340",
      "controls": "controls"
    });

    video.appendChild(source);
    article.appendChild(video);

  } else  {
    setAttributes(img, {
      "src": picture, 
      "aria-label": "le nom de la photo est " + objPhotographie.title
    });
    
    article.appendChild(img);
  }
          
        h2.textContent = objPhotographie.title;
        h2.setAttribute("aria-label", "le titre de la photo est " + objPhotographie.title);
        
        article.appendChild(h2);

        return (article);
    }
    
    return { getUserCardDOM2 }
}
