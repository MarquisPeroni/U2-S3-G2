const inputElement = document.getElementById('TextInput');
const submitButton = document.getElementById('invia');
const cancelButton = document.getElementById('cancel');

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const inputValue = inputElement.value;

    if (inputValue.trim() !== '') {
        localStorage.setItem('nome', inputValue);
        showStoredValue();
    }
});

cancelButton.addEventListener('click', function () {
    localStorage.removeItem('nome');
    inputElement.value = '';
    hideStoredValue();
});

function showStoredValue() {
    const storedValue = localStorage.getItem('nome');
    if (storedValue) {
        inputElement.setAttribute('placeholder', `Valore precedente ${storedValue}`);
    }
}

function hideStoredValue() {
    inputElement.setAttribute('placeholder', 'Inserisci dati');
}

showStoredValue();