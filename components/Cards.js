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
//   </div>
// </div>
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
            console.log(`${key}: [{${value[0]}}]`);
          };
        
    })
    .catch( err => {
        console.log(err)
    })

// const cardMaker = (object) => {
//     // create elements
//     const cardDiv = document.createElement('div');
//     const headDiv = document.createElement('div');
//     const authDiv = document.createElement('div');
//     const imgCont = document.createElement('div');
//     const imgDOM = document.createElement('img');
//     const authSpan = document.createElement('span');

//     // assign class vals
//     cardDiv.classList.add('card');
//     headDiv.classList.add('headline');
//     authDiv.classList.add('author');
//     imgCont.classList.add('img-container');

//     // img src
//     imgDOM.src = 
// }
