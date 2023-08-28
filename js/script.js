//console.log('Print showed');

/* ======= Simple Request ========= */

let request = new XMLHttpRequest();
request.open('GET', 'url', true);
request.send();
request.onreadystatechange = function handleRequest() {
    console.log(request);
}