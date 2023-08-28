//console.log('Print showed');

/* ======= Simple Request ========= */

// let request = new XMLHttpRequest();
// request.open('GET', 'url', true);
// request.send();
// request.onreadystatechange = function handleRequest() {
//     console.log(request);
// }

/* ======= Simple Request to fetch data from a website ========= */

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// request.send();
// request.onreadystatechange = function handleRequest() {
//     console.log(request.responseText);
//     console.log(typeof request.responseText);
// }

/* ======= Simple Request with JSON ========= */

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// request.send();

// request.onreadystatechange = function handleRequest() {
//     console.log(JSON.parse(request.responseText));
// }

/* ======= Simple Request with JSON readystate ========= */

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// console.log(request.readyState);
// request.send();

// request.onreadystatechange = function handleRequest() {
//     console.log(JSON.parse(request.readyState));
// }


/* ======= Checking readystate ========= */

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// request.send();

// request.onreadystatechange = function handleRequest() {
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(JSON.parse(request.responseText));
//     }
// }
/* ======= Showing Data on Page ========= */

// Common Script Codes 

const headingText = document.getElementById('heading-text');
const postButton = document.getElementById('post-btn');
const containerDiv = document.getElementById('container-div');
const ulContainer = document.createElement('ul');

document.getElementById('post-btn').addEventListener('click', () => {
    // Changing Heading:
    headingText.innerText = 'Showing Data after Loading from JSONplaceholderPost';

    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    request.send();

    request.onreadystatechange = function handleRequest() {
        if (request.readyState === 4 && request.status === 200) {
            //console.log(JSON.parse(request.responseText));
            let data = JSON.parse(request.responseText);
            data.forEach(function (singleData) {
                let list = document.createElement('li');
                list.textContent = singleData.title;
                ulContainer.appendChild(list);
            })
            containerDiv.insertAdjacentElement('afterbegin', ulContainer);
        }
    }
})




