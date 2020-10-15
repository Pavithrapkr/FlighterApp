// Getting element reference
const addBtn = document.getElementById('addBtn');
const sortPrice = document.getElementById('sortPrice');
const sortRating = document.getElementById('sortRating');

const nameInput = document.getElementById('name');
const originInput = document.getElementById('origin');
const destinationInput = document.getElementById('destination');
const priceInput = document.getElementById('price');
const ratingInput = document.getElementById('rating');

const flightItems = document.getElementById('flightItems');

// Adding Event Listener
addBtn.addEventListener('click', onAddClick);
sortPrice.addEventListener('click', sortByPrice);
sortRating.addEventListener('click', sortByRating);


function onAddClick() {
    const inputValues = getInputValues();
    const isValidInput = validateInput(inputValues);
    if(isValidInput) {
        addCard(inputValues);
        addFlightList(inputValues);
        clearInput();
        clearSort();
    } else {
        showError();
    }
}

function addCard(formValue) {
    const card = document.createElement('ul');
    card.classList.add('card');

    card.appendChild(creatCardData(`Flight Name: ${formValue.name}`));
    card.appendChild(creatCardData(`${formValue.origin} to ${formValue.destination}`));
    card.appendChild(creatCardData(`Rating: ${formValue.rating}*`));
    card.appendChild(creatCardData(`Price: Rs.${formValue.price}`));

    flightItems.appendChild(card);
}

function creatCardData(content) {
    const cardLI = document.createElement('li');
    cardLI.classList.add('padT5');
    cardLI.textContent = content;
    return cardLI;
}

function addFlightList(formValue) {
    const previousList = window.flightList;
    window.flightList = [...previousList, formValue];
}

function clearInput() {
    nameInput.value = '';
    originInput.value = '';
    destinationInput.value = '';
    priceInput.value = '';
    ratingInput.value = '';
}

function clearSort() {
    
}

function showError() {
    
}

function sortByPrice() {
    
}

function sortByRating() {
    
}


const getInputValues = () => ({
        name: getElementValue(nameInput),
        origin: getElementValue(originInput),
        destination: getElementValue(destinationInput),
        price: getElementValue(priceInput),
        rating: getElementValue(ratingInput)
 });

// // Get All Input Values
// const getInputValues = () => ({
//     name: getElementValue(nameField),
//     origin: getElementValue(originField),
//     destination: getElementValue(destinationField),
//     price: getElementValue(priceField),
//     rating: getElementValue(ratingField),
// });


const getElementValue = (element) => element ? (element.value || '') : '';

function validateInput(inputValues) {
    if(!inputValues){
        return false;
    } 

    var errorList = [];
    if (!inputValues.name) errorList.push('Invalid Name');
    if (!inputValues.origin) errorList.push('Invalid Origin');
    if (!inputValues.destination) errorList.push('Invalid Destination');
    if (!inputValues.price) errorList.push('Invalid Price');
    if (!inputValues.rating) errorList.push('Invalid Rating');

    return errorList.length === 0;
}
