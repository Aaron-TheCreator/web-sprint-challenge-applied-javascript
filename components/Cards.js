// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div><--author div closes-->
// </div><-- card div closes-->
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const axios = require('axios');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then( result => {
        const articleDOM = result.data.articles;
       
        console.log(articleDOM);


        for (const [key, value] of Object.entries(articleDOM)) {
            let i = 0;
            const keyForeach = key;
            const valArrayObj = value;

            console.log([keyForeach,valArrayObj]);
            valArrayObj.forEach( (element) => {
                cardMaker(element);
                
            })
            i++ ;
          }
        
    })
    .catch( err => {
        console.log(err)
    })

// component function for card DOM element
const cardMaker = (object) => {
    // create elements
    const cardDiv = document.createElement('div');
    const headDiv = document.createElement('div');
    const authDiv = document.createElement('div');
    const imgCont = document.createElement('div');
    const imgDOM = document.createElement('img');
    const authSpan = document.createElement('span');

    // assign class vals
    cardDiv.classList.add('card');
    headDiv.classList.add('headline');
    authDiv.classList.add('author');
    imgCont.classList.add('img-container');

    // img src
    imgDOM.src = object.authorPhoto;

    // text content
    headDiv.textContent = object.headline;
    authSpan.textContent = object.authorName;

    // append children to cardDiv
    cardDiv.appendChild(headDiv);
    cardDiv.appendChild(authDiv);
    authDiv.appendChild(imgCont);
    imgCont.appendChild(imgDOM);
    authDiv.appendChild(authSpan);

    // event listener
    cardDiv.addEventListener("click", (event) => {
        console.log(headDiv.textContent)
    })

    // append cardDiv to DOM
    // get
    const cardsCont = document.querySelector('.cards-container');
    // append
    cardsCont.appendChild(cardDiv);


}
