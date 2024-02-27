const counterElement = document.getElementById('counter');

function getCounter() {
    let counter = sessionStorage.getItem('counter');
    if (counter === null) {
        counter = 0;
    } else {
        counter = parseInt(counter);
    }

    return counter;
}

function updateCounter() {
    let counter = getCounter();
    counter += 1;
    sessionStorage.setItem('counter', counter);
    counterElement.textContent = counter;
}

updateCounter();

setInterval(updateCounter, 1000);