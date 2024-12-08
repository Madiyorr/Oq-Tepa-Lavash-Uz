const addFoodForm = document.getElementById('addFoodForm');
const newFoodContainer = document.querySelector('.new_food');
const tovuqFoodContainer = document.querySelector('.tovuq_food');
const xitFoodContainer = document.querySelector('.xit_food');
const lavashFoodContainer = document.querySelector('.lavash_food');
const donerFoodContainer = document.querySelector('.doner_food');
const burgerFoodContainer = document.querySelector('.burger_food');
const sendvichFoodContainer = document.querySelector('.sendvich_food');
const snekFoodContainer = document.querySelector('.snek_food');
const sousFoodContainer = document.querySelector('.sous_food');

// Global massivlar
const foods = [];
const tovuq = [];
const xit = [];
const lavash = [];
const doner = [];
const burger = [];
const sendvich = [];
const snek = [];
const sous = [];

// Admin paneldan taom qo'shish
addFoodForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const foodName = document.getElementById('foodName').value;
    const foodDescription = document.getElementById('foodDescription').value;
    const foodPrice = document.getElementById('foodPrice').value;
    const foodImage = document.getElementById('foodImage').value;
    const foodCategory = document.getElementById('foodCategory').value;

    const newFood = {
        name: foodName,
        description: foodDescription,
        price: parseInt(foodPrice),
        image: foodImage,
        category: foodCategory,
    };

    // Taomni qo'shish va ko'rsatish
    addFood(newFood);
    displayFoods(); // Kartalarni yangilash
    addFoodForm.reset(); // Formani tozalash
});

// Yangi taomni qo'shish
function addFood(food) {
    switch (food.category) {
        case 'yangilik':
            foods.push(food);
            break;
        case 'tovuq':
            tovuq.push(food);
            break;
        case 'xit':
            xit.push(food);
            break;
        case 'lavash':
            lavash.push(food);
            break;
        case 'doner':
            doner.push(food);
            break;
        case 'burger':
            burger.push(food);
            break;
        case 'sendvich':
            sendvich.push(food);
            break;
        case 'snek':
            snek.push(food);
            break;
        case 'sous':
            sous.push(food);
            break;
        default:
            console.warn('Unknown category:', food.category);
            break;
    }
}

// Kartalarni ko‘rsatish
function displayFoods() {
    // Kategoriyalarni tozalash
    newFoodContainer.innerHTML = '';
    tovuqFoodContainer.innerHTML = '';
    xitFoodContainer.innerHTML = '';
    lavashFoodContainer.innerHTML = '';
    donerFoodContainer.innerHTML = '';
    burgerFoodContainer.innerHTML = '';
    sendvichFoodContainer.innerHTML = '';
    snekFoodContainer.innerHTML = '';
    sousFoodContainer.innerHTML = '';

    const foodCategories = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous];

    foodCategories.forEach(food => {
        const cardElement = createCard(food); // Kartochka yaratish
        switch (food.category) {
            case 'yangilik':
                newFoodContainer.appendChild(cardElement);
                break;
            case 'tovuq':
                tovuqFoodContainer.appendChild(cardElement);
                break;
            case 'xit':
                xitFoodContainer.appendChild(cardElement);
                break;
            case 'lavash':
                lavashFoodContainer.appendChild(cardElement);
                break;
            case 'doner':
                donerFoodContainer.appendChild(cardElement);
                break;
            case 'burger':
                burgerFoodContainer.appendChild(cardElement);
                break;
            case 'sendvich':
                sendvichFoodContainer.appendChild(cardElement);
                break;
            case 'snek':
                snekFoodContainer.appendChild(cardElement);
                break;
            case 'sous':
                sousFoodContainer.appendChild(cardElement);
                break;
            default:
                console.warn('Unknown category:', food.category);
        }
    });
}

function addFood(food) {
    switch (food.category) {
        case 'yangilik':
            foods.push(food);
            break;
        case 'tovuq':
            tovuq.push(food);
            break;
        case 'xit':
            xit.push(food);
            break;
        case 'lavash':
            lavash.push(food);
            break;
        case 'doner':
            doner.push(food);
            break;
        case 'burger':
            burger.push(food);
            break;
        case 'sendvich':
            sendvich.push(food);
            break;
        case 'snek':
            snek.push(food);
            break;
        case 'sous':
            sous.push(food);
            break;
        default:
            console.warn('Unknown category:', food.category);
            break;
    }
}

// Ikkinchi addFood funksiyasi:
function addFood(food) {
    switch (food.category) {
        case 'yangilik':
            foods.push(food);
            break;
        case 'tovuq':
            tovuq.push(food);
            break;
        case 'xit':
            xit.push(food);
            break;
        case 'lavash':
            lavash.push(food);
            break;
        case 'doner':
            doner.push(food);
            break;
        case 'burger':
            burger.push(food);
            break;
        case 'sendvich':
            sendvich.push(food);
            break;
        case 'snek':
            snek.push(food);
            break;
        case 'sous':
            sous.push(food);
            break;
    }
    saveToLocalStorage(); // LocalStorage-ni yangilash
}

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    displayFoods(); // Kartalarni yangilash
});

// Admin paneldan ovqat qo'shish funksiyasi
function addDishToAdminPanel(dish) {
    // Yangi ovqatni localStorage'ga saqlash
    let dishes = JSON.parse(localStorage.getItem('dishes')) || [];
    dishes.push(dish);
    localStorage.setItem('dishes', JSON.stringify(dishes));
}


// Admin login funksiyasi
const correctPassword = 'madiyor'; // Parolni o'zgartiring
const adminLogin = document.getElementById('adminLogin');
const adminPanel = document.getElementById('adminPanel');
const loginButton = document.getElementById('loginButton');
const adminPasswordInput = document.getElementById('adminPassword');
const loginError = document.getElementById('loginError');

// Admin login logikasi
loginButton.addEventListener('click', () => {
    const enteredPassword = adminPasswordInput.value.trim();
    
    if (enteredPassword === correctPassword) {
        adminLogin.style.display = 'none';
        adminPanel.style.display = 'block';
    } else {
        loginError.style.display = 'block';
    }
});

// Kartochka yaratish funksiyasi
function createCard(food) {
    const card = document.createElement('div');
    card.classList.add('food-card');
    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" class="food-image">
        <h3>${food.name}</h3>
        <p>${food.description}</p>
        <p>Price: $${food.price}</p>
    `;
    return card;
}

function saveToLocalStorage() {
    const allFoods = {
        foods,
        tovuq,
        xit,
        lavash,
        doner,
        burger,
        sendvich,
        snek,
        sous
    };
    localStorage.setItem('foodData', JSON.stringify(allFoods));
}

function loadFromLocalStorage() {
    const savedData = localStorage.getItem('foodData');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        Object.assign(foods, parsedData.foods || []);
        Object.assign(tovuq, parsedData.tovuq || []);
        Object.assign(xit, parsedData.xit || []);
        Object.assign(lavash, parsedData.lavash || []);
        Object.assign(doner, parsedData.doner || []);
        Object.assign(burger, parsedData.burger || []);
        Object.assign(sendvich, parsedData.sendvich || []);
        Object.assign(snek, parsedData.snek || []);
        Object.assign(sous, parsedData.sous || []);
    }
}
