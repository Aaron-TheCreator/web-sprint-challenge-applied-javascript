// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const axios = require('axios');

axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then( result => {
        const topicsArray = result.data.topics;
        topicsArray.forEach(element => {
            // creates div "tab"
            const newTab = document.createElement('div');
        
            // adds class
            newTab.classList.add('tab');

            // adds each element's text content
            newTab.textContent = element;

            // appends to DOM
            const topicsDiv = document.querySelector('.topics');
            topicsDiv.appendChild(newTab);

            return topicsDiv;
        });
        
    })
    .catch( err => {
        console.log(err)
    })


