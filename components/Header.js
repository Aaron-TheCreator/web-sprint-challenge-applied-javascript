// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    // create elements
    const headerDom = document.createElement('div');
    const dateSpan = document.createElement('span');
    const h1Dom = document.createElement('h1');
    const tempSpan = document.createElement('span');

    // assign classes to elements
    headerDom.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    // element text content
    dateSpan.textContent = "MARCH 28, 2020";
    h1Dom.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    // append children
    headerDom.appendChild(dateSpan);
    headerDom.appendChild(h1Dom);
    headerDom.appendChild(tempSpan);

    const headerContainer = document.querySelector('.header-container');

    // append to dom
    headerContainer.appendChild(headerDom);
};

Header();
