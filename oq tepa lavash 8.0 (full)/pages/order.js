let totalOrder = [];

// Taomlar ma'lumotlari
const foods = [
    {
        name: 'Lavash Juftligi',
        description: "Standart lavash",
        price: 99000,
        image: 'img/lavash.juftligi.jpg',
        category: 'yangilik',
    },
    {
        name: 'Lavashda Baraka',
        description: 'Standart lavash',
        price: 175000,
        image: 'img/lavashda.baraka.jpg',
        category: 'yangilik',
    },
    {
        name: 'Shaurmada Baraka',
        description: 'Mazali shaurmalar',
        price: 150000,
        image: 'img/shaurmada.baraka.jpg',
        category: 'yangilik',
    },
    {
        name: 'Chiz-da Baraka',
        description: 'Mazali chizburgerlar',
        price: 165000,
        image: 'img/chizdabaraka.jpg',
        category: 'yangilik',
    },
];

const tovuq = [
    {
        name: 'Nuggets 5',
        description: 'Nuggets 5 dona',
        price: 16000,
        image: 'img/nagets.5.jpg',
        category: 'tovuq',
    },
    {
        name: 'Nuggets 8',
        description: 'Nuggets 8 dona',
        price: 22000,
        image: 'img/nuggetlar.8.jpg',
        category: 'tovuq',
    },
    {
        name: 'Nuggets 15',
        description: 'Nuggets 15 dona',
        price: 39000,
        image: 'img/nuggets.15.jpg',
        category: 'tovuq',
    },
    {
        name: 'Nuggets Box',
        description: 'kartoshka va nuggetlar',
        price: 37000,
        image: 'img/nuggets.box.jpg',
        category: 'tovuq',
    },
    {
        name: 'Baytlar',
        description: 'Mazali baytlar',
        price: 23000,
        image: 'img/baytlar.jpg',
        category: 'tovuq',
    },
    {
        name: 'Chiziqlar 3 dona',
        description: '3 dona strips',
        price: 21000,
        image: 'img/chiziqlar.3.jpg',
        category: 'tovuq',
    },
    {
        name: 'Chiziqlar 5 dona',
        description: '5 dona strips',
        price: 33000,
        image: 'img/chiziqlar.5.jpg',
        category: 'tovuq',
    },
    {
        name: "Jo'ja qutisi",
        description: 'Mazali quti',
        price: 35000,
        image: 'img/jojaqutisi.jpg',
        category: 'tovuq',
    },
]

const xit = [
    {
        name: "Katta Original Lavash",
        description: 'Standart lavash',
        price: 34000,
        image: 'img/TlSq0p1VJ-2S13GXeyGcp.jpg',
        category: 'xit',
    },
    {
        name: "Tandirli Lavash",
        description: 'Katta tandir lavash',
        price: 36000,
        image: 'img/54SwNjI0I_80y9qTSrIZD.jpg',
        category: 'xit',
    },
    {
        name: "Xaggi",
        description: 'Mazali xaggi',
        price: 36000,
        image: 'img/xaggi.jpg',
        category: 'xit',
    },
]

const lavash = [
    {
        name: "Pishloqli Katta Lavash",
        description: 'Pishloqli lavash',
        price: 37000,
        image: 'img/cirliklavash.jpg',
        category: 'lavash',
    },
    {
        name: "Mini Original Lavash",
        description: 'Mini original lavash',
        price: 29000,
        image: 'img/minilavash.jpg',
        category: 'lavash',
    },
    {
        name: "Mini Pishloqli Lavash",
        description: 'Mini pishloqli lavash',
        price: 32000,
        image: 'img/minicirlavash.jpg',
        category: 'lavash',
    },
]

const doner = [
    {
        name: "Shaurma",
        description: 'Mazali shaurma',
        price: 28000,
        image: 'img/shaurma.jpg',
        category: 'doner',
    },
    {
        name: "Donar",
        description: 'Pita doneri',
        price: 32000,
        image: 'img/donar.jpg',
        category: 'doner',
    },
]

const burger = [
    {
        name: "Gamburger",
        description: 'Mazali gamburger',
        price: 27000,
        image: 'img/gamburger.jpg',
        category: 'burger',
    },
    {
        name: "Chizburger",
        description: 'Mazali chizburger',
        price: 29000,
        image: 'img/chizburger.jpg',
        category: 'burger',
    },
    {
        name: "Katta Burger",
        description: 'Katta burger',
        price: 37000,
        image: 'img/kattaburger.jpg',
        category: 'burger',
    },
    {
        name: "Katta Pishloqli Burger",
        description: 'Katta pishloqli burger',
        price: 41000,
        image: 'img/kattapishloqliburger.jpg',
        category: 'burger',
    },
]

const sendvich = [
    {
        name: "Sendvich",
        description: 'Mazali sendvich',
        price: 39000,
        image: 'img/sendvich.jpg',
        category: 'sendvich',
    },
]

const snek = [
    {
        name: "O'rtacha Kartoshka Fri",
        description: 'O\'rtacha',
        price: 16000,
        image: 'img/ortachafri.jpg',
        category: 'snek',
    },
    {
        name: 'Jaydari Kartoshka',
        description: 'Mazali kartoshkalar',
        price: 18000,
        image: 'img/jaydarikartoshka.jpg',
        category: 'snek',
    },
    {
        name: 'Non',
        description: 'Yumshoq non',
        price: 4000,
        image: 'img/non.jpg',
        category: 'snek',
    },
    {
        name: 'Kichik Kartoshka Fri',
        description: 'Kichik',
        price: 10000,
        image: 'img/kichikkartoshka.jpg',
        category: 'snek',
    },
    {
        name: 'Katta Kartoshka Fri',
        description: 'Katta',
        price: 22000,
        image: 'img/kattakartoshka.jpg',
        category: 'snek',
    },
    {
        name: 'Jalapeno',
        description: 'Achchiq xalapenyo qalapmiri',
        price: 3000,
        image: 'img/jalapeno.jpg',
        category: 'snek',
    },
]

const sous = [
    {
        name: "Oq Sous",
        description: 'Sarimsoqli sous',
        price: 4000,
        image: 'img/oq.sous.jpg',
        category: 'sous',
    },
    {
        name: "Ketchup",
        description: 'Tanho tabiiy ketchup',
        price: 4000,
        image: 'img/ketchup.jpg',
        category: 'sous',
    },
    {
        name: "Pishloq Sousi",
        description: 'Pishloqli sous',
        price: 4000,
        image: 'img/pishloqsousi.jpg',
        category: 'sous',
    },
];

const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');

// Modalni ochish
function openModal(food) {
    modalImage.src = food.image;
    modalName.textContent = food.name;
    modalDescription.textContent = food.description;
    modalPrice.textContent = `${food.price.toLocaleString()} so'm`;

    modal.classList.add('show'); 
    modal.style.display = "flex"; 
}

// Modalni yopish
function closeModal() {
    modal.classList.remove('show'); 
    setTimeout(() => {
        modal.style.display = 'none'; 
    }, 300); 
}

// Modalni yopish tugmasiga hodisa qo'shish
modal.querySelector('.close').addEventListener('click', closeModal);

// Karta bosish hodisasi
document.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    
    // Agar tugma "Savatchaga qo'shish" yoki "+" / "-" bo'lsa, modalni ochirmang
    if (event.target.classList.contains('btn-order') || event.target.classList.contains('btn-plus') || event.target.classList.contains('btn-minus')) {
        return; // Hech narsa qilmaymiz
    }

    if (card) {
        const foodName = card.querySelector('.card-title').textContent;
        const food = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].find(item => item.name === foodName);
        openModal(food); // Modalni faqat karta ustiga bosilganda ochamiz
    }
});


const newFoodContainer = document.querySelector('.new_food');
const tovuqFoodContainer = document.querySelector('.tovuq_food');
const xitFoodContainer = document.querySelector('.xit_food');
const lavashFoodContainer = document.querySelector('.lavash_food');
const donerFoodContainer = document.querySelector('.doner_food');
const burgerFoodContainer = document.querySelector('.burger_food');
const sendvichFoodContainer = document.querySelector('.sendvich_food');
const snekFoodContainer = document.querySelector('.snek_food');
const sousFoodContainer = document.querySelector('.sous_food');
const cartItemsContainer = document.querySelector('.cart-items');
const totalAmountDisplay = document.querySelector('.total-amount');
const submitButton = document.querySelector('.btn-submit');
const cancelButton = document.querySelector('.btn-cancel');

// Kartalarni yaratish
function createCard(food) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" class="card-img">
        <div class="card-body">
            <h5 class="card-title">${food.name}</h5>
            <p class="card-text">${food.description}</p>
            <p class="card-price">${food.price.toLocaleString()} so'm</p>
            <div class="quantity-control">
                <button class="btn-minus">-</button>
                <input type="text" class="quantity-input" value="1" min="1" style="width: 50px;">
                <button class="btn-plus">+</button>
            </div>
            <button class="btn-order">Savatga qo'shish</button>
        </div>
    `;
    
    return card;
}

// localStorage'dan o'qish va taomlarni chiqarish
function displayFoods() {
    let foodList = JSON.parse(localStorage.getItem('foodList')) || []; // Agar ma'lumot yo'q bo'lsa, bo'sh ro'yxat qaytariladi
  
    if (foodList.length === 0) {
      console.log("Hech qanday yangi taomlar mavjud emas.");
    } else {
      foodList.forEach(food => {
        console.log(food.name); // Yangi taomlar ro'yxatida bo'lishi kerak
        // Taomlarni HTMLga joylashtirish kodi
      });
    }
  }
  
  displayFoods(); // Bu funksiya admin panel orqali qo'shilgan taomlarni ekranga chiqarishi kerak

  // Admin panelda yangi taom qo'shish
function addFood(food) {
    let foodList = JSON.parse(localStorage.getItem('foodList')) || [];
    foodList.push(food);
    localStorage.setItem('foodList', JSON.stringify(foodList));
  }  

// Taomlarni ko'rsatish
function displayFoods(filteredFoods = []) {
    // Har bir konteynerni tozalash
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
    
    const foodsToDisplay = filteredFoods.length > 0 ? filteredFoods : foodCategories;

    foodsToDisplay.forEach(food => {
        const cardElement = createCard(food);
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
        }
    });
}

displayFoods();

// Telegramga xabar yuborish funksiyasi
function sendMessageToTelegram(message) {
    const telegramChatId = '-4539395047'; // O'zingizning chat ID ni kiriting
    const telegramBotToken = '7220168908:AAEzpvGeEFG_OUNaRK9YFA2erDVb8_HejSI'; // O'zingizning bot tokeningizni kiriting

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const payload = {
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML', // HTML formatda yuborish
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Telegramga yuborildi:', data);
    })
    .catch(error => {
        console.error('Xato:', error);
    });
}

// Profil oynasini yopish
document.getElementById('closeProfileButton').addEventListener('click', function() {
    document.getElementById('profileBar').classList.add('hidden');
});



// References to DOM elements
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartButton = document.getElementById('close-cart');

const totalPriceDisplay = document.getElementById('total-price');

let cartItems = [];  // Cart item array
let totalAmount = 0;  // Total price

// Function to update cart count and total price
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    const cartItemsList = document.getElementById('cart-items');

    // Update cart item count
    cartCount.textContent = cartItems.length;

    // Update total price
    totalPrice.textContent = totalAmount + ' so\'m';

    // Display cart items
    cartItemsList.innerHTML = ''; // Clear the cart items list
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} so'm`;
        cartItemsList.appendChild(li);
    });
}

// Function to add a food item to the cart
function addToCart(food) {
    cartItems.push(food);
    totalAmount += food.price;  // Add price to total
    updateCart();
}

// Savatchani ochish
document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.add('open');
    document.body.classList.add('blur');
});

// Savatchani yopish
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
    document.body.classList.remove('blur');
});

// Savatga mahsulot qo'shish
function addToCart(food, quantity) {
    const existingOrderIndex = totalOrder.findIndex(item => item.food.name === food.name);
    if (existingOrderIndex >= 0) {
        totalOrder[existingOrderIndex].quantity += quantity;
    } else {
        totalOrder.push({ food: food, quantity: quantity });
    }
    updateCartItems();
    submitButton.style.display = 'block';
}

// Savatchani yangilash
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    totalOrder.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.food.image}" alt="${item.food.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4>${item.food.name}</h4>
                <div class="price">${item.food.price.toLocaleString()} so'm</div>
                <div class="quantity">Miqdor: ${item.quantity}</div>
            </div>
            <span class="remove-item" onclick="removeItem(${item.food.id})">X</span>
        `;
        cartItemsContainer.appendChild(li);
    });

    const totalQuantity = totalOrder.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
    document.getElementById('total-price').textContent = `${totalPrice.toLocaleString()} so'm`;
}

// Mahsulotni savatdan o'chirish
function removeItem(foodId) {
    totalOrder = totalOrder.filter(item => item.food.id !== foodId);
    updateCartItems();
}

// Savatni tozalash
document.getElementById('clear-cart').addEventListener('click', () => {
    totalOrder = [];
    updateCartItems();
});

// Savatni ochish va yopish
document.getElementById('cart-icon').addEventListener('click', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const blurOverlay = document.getElementById('blur-overlay');
    cartSidebar.classList.toggle('open');
    blurOverlay.style.display = cartSidebar.classList.contains('open') ? 'block' : 'none';
});

document.getElementById('close-cart').addEventListener('click', () => {
    const cartSidebar = document.getElementById('cart-sidebar');
    const blurOverlay = document.getElementById('blur-overlay');
    cartSidebar.classList.remove('open');
    blurOverlay.style.display = 'none';
});

// Savatchaga qo'shish
function addToCart(food, quantity) {
    const existingOrderIndex = totalOrder.findIndex(item => item.food.name === food.name);
    if (existingOrderIndex >= 0) {
        totalOrder[existingOrderIndex].quantity += quantity; // Agar mavjud bo'lsa, miqdorini oshirish
    } else {
        totalOrder.push({ food: food, quantity: quantity }); // Yangi mahsulot qo'shish
    }
    
    updateCartItems(); // Savatcha yangilanishi
    updateCartCount(); // Savatcha soni yangilanishi
    submitButton.style.display = 'block'; // Buyurtma tugmasi ko'rsatiladi
}

// Savatchadagi mahsulotlar sonini yangilash
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalQuantity = totalOrder.reduce((sum, item) => sum + item.quantity, 0);  // Savatchadagi jami mahsulotlar sonini hisoblash
    cartCount.textContent = totalQuantity;  // Mahsulotlar sonini ko'rsatish
    cartCount.style.display = totalQuantity > 0 ? 'block' : 'none';  // Agar savat bo'sh bo'lmasa, ko'rsatiladi
}

// LocalStorage'dan ma'lumotlarni yuklash
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('foodData'); // 'foodData' key orqali saqlangan ma'lumotlarni o'qing

    // Agar ma'lumotlar mavjud bo'lsa
    if (savedData) {
        const parsedData = JSON.parse(savedData); // JSON formatidan obyektga o'zgartiring

        // Har bir kategoriya uchun saqlangan ma'lumotlarni olish va mavjud massivlarga joylashtirish
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

// Sahifa to'liq yuklanganda ma'lumotlarni yuklash va mahsulotlarni ko'rsatish
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();  // localStorage'dan ma'lumotlarni yuklash
    displayFoods();  // Mahsulotlarni ko'rsatish
});

// Mahsulotlarni ko'rsatish
function displayFoods() {
    // Mahsulotlar joylashadigan konteynerlarni tozalash
    newFoodContainer.innerHTML = '';
    tovuqFoodContainer.innerHTML = '';
    xitFoodContainer.innerHTML = '';
    lavashFoodContainer.innerHTML = '';
    donerFoodContainer.innerHTML = '';
    burgerFoodContainer.innerHTML = '';
    sendvichFoodContainer.innerHTML = '';
    snekFoodContainer.innerHTML = '';
    sousFoodContainer.innerHTML = '';

    // Barcha taomlar ro'yxatini birlashtirish
    const foodCategories = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous];

    // Har bir taom uchun kartochka yaratish va tegishli kategoriya bo'yicha qo'shish
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

// function removeFoodFromCategory(foodName) {
//     // LocalStorage'dan saqlangan ma'lumotni o'qish
//     const savedData = localStorage.getItem('foodData');
//     if (!savedData) return; // Agar data bo'lmasa, funksiya chiqib ketadi

//     // Saqlangan ma'lumotni JSON formatidan obyektga o'tkazish
//     const parsedData = JSON.parse(savedData);

//     // Agar 'tovuq' kategoriyasi mavjud bo'lsa, uni yangilash
//     if (parsedData.tovuq) {
//         // 'name'ga mos keladigan taomni o'chirish
//         const updatedTovuq = parsedData.tovuq.filter(food => food.name !== foodName);

//         // Yangilangan 'tovuq' kategoriyasini saqlash
//         parsedData.tovuq = updatedTovuq;

//         // Yangilangan ma'lumotni localStorage'ga saqlash
//         localStorage.setItem('foodData', JSON.stringify(parsedData));

//         // Mahsulotlar ro'yxatini yangilash
//         loadFromLocalStorage();
//         displayFoods();
//     }
// }

// // Masalan, 'test' nomli taomni o'chirish
// removeFoodFromCategory('test');

// Kategoriyadan o'chirish funksiyasi
// function removeFoodFromCategory(category, foodName) {
//     // LocalStorage'dan ma'lumotlarni o'qish
//     const savedData = localStorage.getItem('foodData');
//     if (!savedData) return; // Agar data bo'lmasa, funksiya chiqib ketadi

//     // Saqlangan ma'lumotni JSON formatidan obyektga o'tkazish
//     const parsedData = JSON.parse(savedData);

//     // Belgilangan kategoriya bo'yicha o'chirish
//     if (parsedData[category]) {
//         // Taomni o'chirish
//         const updatedCategory = parsedData[category].filter(food => food.name !== foodName);

//         // Yangilangan kategoriyani saqlash
//         parsedData[category] = updatedCategory;

//         // Yangilangan ma'lumotni localStorage'ga saqlash
//         localStorage.setItem('foodData', JSON.stringify(parsedData));

//         // Mahsulotlar ro'yxatini yangilash
//         loadFromLocalStorage();
//         displayFoods();
//     }
// }

// // `sous` kategoriyasidan 'aaaaaaaaaaaaaaaaa' nomli taomni o'chirish
// removeFoodFromCategory('sous', 'aaaaaaaaaaaaaaaaa');

// // `foods` kategoriyasidan 'Choy' nomli taomni o'chirish
// removeFoodFromCategory('foods', 'Choy');

// // Kategoriyadan o'chirish funksiyasi
// function removeFoodFromCategory(category, foodName) {
//     // LocalStorage'dan ma'lumotlarni o'qish
//     const savedData = localStorage.getItem('foodData');
//     if (!savedData) return; // Agar data bo'lmasa, funksiya chiqib ketadi

//     // Saqlangan ma'lumotni JSON formatidan obyektga o'tkazish
//     const parsedData = JSON.parse(savedData);

//     // Belgilangan kategoriya bo'yicha o'chirish
//     if (parsedData[category]) {
//         // Taomni o'chirish
//         const updatedCategory = parsedData[category].filter(food => food.name !== foodName);

//         // Yangilangan kategoriyani saqlash
//         parsedData[category] = updatedCategory;

//         // Yangilangan ma'lumotni localStorage'ga saqlash
//         localStorage.setItem('foodData', JSON.stringify(parsedData));

//         // Mahsulotlar ro'yxatini yangilash
//         loadFromLocalStorage();
//         displayFoods();
//     }
// }

// function removeFoodFromCategory(category, foodName) {
//     const savedData = localStorage.getItem('foodData');
//     if (!savedData) return; // Agar ma'lumot bo'lmasa, funksiya chiqib ketadi

//     const parsedData = JSON.parse(savedData);

//     if (parsedData[category]) {
//         // `foodName`ga mos keladigan taomni o'chirish
//         const updatedCategory = parsedData[category].filter(food => food.name !== foodName);
//         parsedData[category] = updatedCategory;

//         // Yangilangan ma'lumotni localStorage'ga saqlash
//         localStorage.setItem('foodData', JSON.stringify(parsedData));
//     }
// }

// // "xit" kategoriyasidan "Choy" nomli taomni o'chirish
// removeFoodFromCategory('xit', 'Choy');


// // `foods` kategoriyasidan 'Sezor Salati' nomli taomni o'chirish
// removeFoodFromCategory('foods', 'Sezor Salati');

// Profilni boshqarish
const profileButton = document.getElementById("profileButton");
const profileBar = document.getElementById("profileBar");
const loginButton = document.getElementById("loginButton");
const loginBar = document.getElementById("loginBar");
const loginForm = document.getElementById("loginForm");
const profileInfo = document.getElementById("profileInfo");

// Profil tugmasi bosilganda profil panelni ko'rsatish
profileButton.addEventListener("click", () => {
  profileBar.classList.toggle("hidden");
  
  // Agar foydalanuvchi login qilgan bo'lsa, ma'lumotlarni ko'rsatish
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo) {
    profileInfo.innerHTML = `
      <p>Ism: ${userInfo.name}</p>
      <p>Telefon: ${userInfo.phone}</p>
      <p>Manzil: ${userInfo.address}</p>
    `;
    loginButton.innerText = "Logout";
    loginButton.addEventListener("click", () => {
      localStorage.removeItem("userInfo");
      profileInfo.innerHTML = "";
      loginButton.innerText = "Login";
    });
  } else {
    profileInfo.innerHTML = "";
  }
});

// Login tugmasi bosilganda login panelini ko'rsatish
loginButton.addEventListener("click", () => {
  loginBar.classList.toggle("hidden");
});

// Registratsiya formasini submit qilish
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Foydalanuvchi ma'lumotlarini olish
  const userInfo = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
  };

  // Ma'lumotlarni saqlash (localStorage)
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  // Tasdiq xabari va login panelni yopish
  alert("Registratsiya muvaffaqiyatli bajarildi!");
  loginForm.reset();
  loginBar.classList.add("hidden");
});




// Savatcha yangilanishi
function updateCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const noItemsMessage = document.getElementById('noItemsMessage'); // Hech narsa yo'q degan xabar

    cartItemsContainer.innerHTML = '';  // Savatcha elementlarini tozalash

    if (totalOrder.length === 0) {
        noItemsMessage.style.display = 'block';  // Hech narsa bo'lsa, "Hech narsa yo'q" xabarini ko'rsatish
    } else {
        noItemsMessage.style.display = 'none';  // Mahsulotlar bor bo'lsa, xabarni yashirish
        totalOrder.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${item.food.image}" alt="${item.food.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.food.name}</h4>
                    <div class="price">${item.food.price.toLocaleString()} so'm</div>
                    <div class="quantity">Miqdor: ${item.quantity}</div>
                </div>
                <span class="remove-item" onclick="removeItem(${item.food.id})">X</span>  <!-- X ni bosganda mahsulotni o'chirish -->
            `;
            cartItemsContainer.appendChild(li);
        });
    }

    const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
    document.getElementById('total-price').textContent = `${totalPrice.toLocaleString()} so'm`;  // Umumiy narxni yangilash
}

// Mahsulotni savatchadan o'chirish
function removeItem(foodId) {
    const index = totalOrder.findIndex(item => item.food.id === foodId);
    if (index >= 0) {
        totalOrder.splice(index, 1);  // Mahsulotni o'chirish
        updateCartItems();  // Savatcha elementlarini yangilash
        updateCartCount();  // Savatcha sonini yangilash
    }
}


const blurOverlay = document.createElement('div');
blurOverlay.classList.add('blur-overlay');
document.body.appendChild(blurOverlay);

// Savatchani ochish
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
    blurOverlay.style.display = 'block'; // Blur Overlay ko'rsatish
    cartIcon.classList.add('hidden'); // Ikonkani yashirish
});

// Savatchani yopish
document.querySelector('.close-btn').addEventListener('click', closeCart);
blurOverlay.addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('open');
    blurOverlay.style.display = 'none'; // Blur Overlay yashirish
    cartIcon.classList.remove('hidden'); // Ikonkani qayta ko'rsatish
}

// Open/Close cart sidebar
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.toggle('open'); // Toggles the sidebar visibility
});

closeCartButton.addEventListener('click', () => {
    cartSidebar.classList.remove('open'); // Closes the sidebar
});

// Update cart items in the sidebar
function updateCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear current items

    totalOrder.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <img src="${item.food.image}" alt="${item.food.name}">
            ${item.quantity} x ${item.food.name} - ${item.food.price.toLocaleString()} so'm
        `;
        cartItemsContainer.appendChild(li);
    });

    const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
    totalPriceDisplay.textContent = `${totalPrice.toLocaleString()} so'm`;
}

// Savatchaga qo'shish
function addToCart(food, quantity) {
    const existingOrderIndex = totalOrder.findIndex(item => item.food.name === food.name);
    if (existingOrderIndex >= 0) {
        totalOrder[existingOrderIndex].quantity += quantity;
    } else {
        totalOrder.push({ food: food, quantity: quantity });
    }
    updateCartDisplay();
}

// Savatchani yangilash
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPriceDisplay = document.getElementById('total-price');

    // Savatchadagi elementlarni tozalash
    cartItemsContainer.innerHTML = '';

    // Umumiy narx va miqdor
    let totalQuantity = 0;
    let totalPrice = 0;

    totalOrder.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <div class="cart-item-info">
                <img src="${item.food.image}" alt="${item.food.name}" class="cart-item-img">
                <span>${item.quantity} x ${item.food.name}</span>
            </div>
            <span>${(item.food.price * item.quantity).toLocaleString()} so'm</span>
        `;
        cartItemsContainer.appendChild(li);

        totalQuantity += item.quantity;
        totalPrice += item.food.price * item.quantity;
    });

    // Savatcha miqdorini va narxni yangilash
    cartCount.textContent = totalQuantity;
    totalPriceDisplay.textContent = `${totalPrice.toLocaleString()} so'm`;

    // Savatcha bo'sh bo'lsa "Buyurtma berish" tugmasini yashirish
    const submitButton = document.querySelector('.btn-submit');
    submitButton.style.display = totalOrder.length > 0 ? 'block' : 'none';
}

document.querySelector('.btn-submit').addEventListener('click', () => {
    if (totalOrder.length > 0) {
        // Buyurtmalarni shakllantirish
        const orderList = totalOrder.map(item => `${item.quantity} x ${item.food.name}`).join('\n');
        const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
        const orderMessage = `<b>Yangi buyurtma:</b>\n${orderList}\n<b>Umumiy narx:</b> ${totalPrice.toLocaleString()} so'm`;

        // `userInfo` obyektidan ma'lumotlarni olish
        const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
        const name = userInfo.name || 'Ism mavjud emas';
        const phone = userInfo.phone || 'Telefon mavjud emas';
        const address = userInfo.address || 'Manzil mavjud emas';

        // Profil ma'lumotlarini shakllantirish
        const profileMessage = `<b>Foydalanuvchi ma'lumotlari:</b>\n<b>Ism:</b> ${name}\n<b>Telefon:</b> ${phone}\n<b>Manzil:</b> ${address}`;

        // Umumiy xabarni shakllantirish
        const fullMessage = `${profileMessage}\n\n${orderMessage}`;

        // Telegramga yuborish
        sendMessageToTelegram(fullMessage);

        alert('Buyurtma qabul qilindi! Tez orada kuryerlarimiz aloqaga chiqishadi!');
        totalOrder = [];
        updateCartDisplay();
    } else {
        alert('Savatchada hech narsa yo\'q!');
    }
});

function sendMessageToTelegram(message) {
    const telegramChatId = '-4539395047';
    const telegramBotToken = '7220168908:AAEzpvGeEFG_OUNaRK9YFA2erDVb8_HejSI';

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    const payload = {
        chat_id: telegramChatId,
        text: message,
        parse_mode: 'HTML',
    };

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => console.log('Telegramga yuborildi:', data))
    .catch(error => console.error('Xato:', error));
}


// Admindan qoshilgan mahsulotlarni o'chirish funksiyasi----------------------------------------------------------------------------------------------------------------
// function removeFoodFromCategory(category, foodName) {
//     const savedData = localStorage.getItem('foodData');
//     if (!savedData) return; // Agar ma'lumot bo'lmasa, funksiya chiqib ketadi

//     const parsedData = JSON.parse(savedData);

//     if (parsedData[category]) {
//         // `foodName`ga mos keladigan taomni o'chirish
//         const updatedCategory = parsedData[category].filter(food => food.name !== foodName);
//         parsedData[category] = updatedCategory;

//         // Yangilangan ma'lumotni localStorage'ga saqlash
//         localStorage.setItem('foodData', JSON.stringify(parsedData));
//     }
// }

// // "xit" kategoriyasidan "Choy" nomli taomni o'chirish
// removeFoodFromCategory('kategoriyasi', 'Mahsulot nomi');


// // "Buyurtma berish" tugmasiga hodisa qo'shish
// document.querySelector('.btn-submit').addEventListener('click', () => {
//     if (totalOrder.length > 0) {
//         const orderList = totalOrder.map(item => `${item.quantity} x ${item.food.name}`).join('\n');
//         const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
//         const message = `Yangi buyurtma:\n${orderList}\nUmumiy narx: ${totalPrice.toLocaleString()} so'm`;

//         // Profil ma'lumotlarini olish (localStorage'dan)
//         const name = localStorage.getItem('name');
//         const phone = localStorage.getItem('phone');
//         const address = localStorage.getItem('address');
//         const profileImage = localStorage.getItem('profileImage') || 'Profil rasmi mavjud emas';

//         // Xabarni tayyorlash
//         let profileMessage = `<b>Foydalanuvchi ma'lumotlari:</b>\n`;
//         profileMessage += `<b>Ism:</b> ${name || 'Ism mavjud emas'}\n`;
//         profileMessage += `<b>Telefon:</b> ${phone || 'Telefon raqam mavjud emas'}\n`;
//         profileMessage += `<b>Manzil:</b> ${address || 'Manzil mavjud emas'}\n`;
//         profileMessage += `<b>Profil rasmi:</b> ${profileImage}\n`;

//         // Buyurtma va profilni birlashtirib yuborish
//         const fullMessage = profileMessage + '\n' + message;

//         // Telegramga yuborish funksiyasi
//         sendMessageToTelegram(fullMessage);

//         alert('Buyurtma berildi!');
//         totalOrder = [];
//         updateCartDisplay();
//     } else {
//         alert('Savatchada hech narsa yo\'q!');
//     }
// });



// // Telegramga yuborish funksiyasi
// function sendMessageToTelegram(message) {
//     const telegramChatId = '-4539395047'; // O'zingizning chat ID ni kiriting
//     const telegramBotToken = '7220168908:AAEzpvGeEFG_OUNaRK9YFA2erDVb8_HejSI'; // O'zingizning bot tokeningizni kiriting

//     const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
//     const payload = {
//         chat_id: telegramChatId,
//         text: message,
//         parse_mode: 'HTML', // HTML formatida yuborish
//     };

//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Telegramga yuborildi:', data);
//     })
//     .catch(error => {
//         console.error('Xato:', error);
//     });
// }

// document.getElementById('profileInfoForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Formaning odatiy yuborilishini to'xtatish

//     const name = document.getElementById('name').value;
//     const phone = document.getElementById('phone').value;
//     const address = document.getElementById('address').value;

//     // Ma'lumotlarni localStorage'ga saqlash
//     localStorage.setItem('name', name);
//     localStorage.setItem('phone', phone);
//     localStorage.setItem('address', address);

//     // Konsolda saqlangan ma'lumotlarni tekshirib ko'ring
//     console.log('Saqlangan ma\'lumotlar:', {
//         name: localStorage.getItem('name'),
//         phone: localStorage.getItem('phone'),
//         address: localStorage.getItem('address'),
//     });

//     alert('Profil saqlandi!');
// });

// Savatchani yopish
document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.remove('open');
});

// Savatchani ochish
document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-sidebar').classList.add('open');
});

// // Savatchaga qo'shish funksiyasi
// function addToCart(food, quantity) {
//     const existingOrderIndex = totalOrder.findIndex(item => item.food.name === food.name);
//     if (existingOrderIndex >= 0) {
//         totalOrder[existingOrderIndex].quantity += quantity;
//     } else {
//         totalOrder.push({ food: food, quantity: quantity });
//     }
//     updateCartItems();
//     submitButton.style.display = 'block';
// }

//         // Mahsulotlar ro'yxatini olish
//         function loadProducts() {
//             const foods = JSON.parse(localStorage.getItem('foods')) || [];

//             const productListContainer = document.getElementById('productList');
//             productListContainer.innerHTML = ''; // Clear the container before displaying new data

//             // Mahsulotlarni ko'rsatish
//             foods.forEach(food => {
//                 const productCard = document.createElement('div');
//                 productCard.classList.add('product-card');
                
//                 productCard.innerHTML = `
//                     <img src="${food.image}" alt="${food.name}">
//                     <h3>${food.name}</h3>
//                     <p>${food.description}</p>
//                     <div class="price">${food.price} so'm</div>
//                     <p><strong>Kategoriya:</strong> ${food.category}</p>
//                     <a href="#" class="btn">Savatga qo'shish</a>
//                 `;

//                 // Mahsulotni ro'yxatga qo'shish
//                 productListContainer.appendChild(productCard);
//             });
//         }

//         // Sahifa yuklanganda mahsulotlarni ko'rsatish
//         window.onload = loadProducts;

// // "Buyurtma berish" tugmasi uchun hodisa
// submitButton.addEventListener('click', () => {
//     if (totalOrder.length > 0) {
//         const orderList = totalOrder.map(item => `${item.quantity} x ${item.food.name}`).join('\n');
//         const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
//         const message = `Yangi buyurtma:\n${orderList}\nUmumiy narx: ${totalPrice.toLocaleString()} so'm`;

//         // Telegramga yuborish
//         sendMessageToTelegram(message);

//         alert('Buyurtma berildi!');
//         totalOrder = [];
//         updateCartItems();
//         submitButton.style.display = 'none';
//     } else {
//         alert('Savatchada hech narsa yo\'q!');
//     }
// });


// // "Buyurtma berish" tugmasiga hodisa qo'shish
// submitButton.addEventListener('click', () => {
//     if (totalOrder.length > 0) {
//         const orderList = totalOrder.map(item => `${item.quantity} x ${item.food.name}`).join('\n');
//         const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
//         const message = `Yangi buyurtma:\n${orderList}\nUmumiy narx: ${totalPrice.toLocaleString()} so'm`;

//         // Telegramga yuborish
//         sendMessageToTelegram(message);

//         alert('Buyurtma berildi!');
//         totalOrder = [];
//         updateCartItems();
//         submitButton.style.display = 'none';
//     } else {
//         alert('Savatchada hech narsa yo\'q!');
//     }
// });

// // "Bekor qilish" tugmasiga hodisa qo'shish
// cancelButton.addEventListener('click', () => {
//     totalOrder = [];
//     updateCartItems();
//     submitButton.style.display = 'none';
// });

// // Savatcha yangilash
// function updateCartItems() {
//     cartItemsContainer.innerHTML = '';

//     totalOrder.forEach(item => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <img src="${item.food.image}" alt="${item.food.name}" class="cart-item-img">
//             ${item.quantity} x ${item.food.name} - ${item.food.price.toLocaleString()} so'm
//         `;
//         cartItemsContainer.appendChild(li);
//     });

//     const totalQuantity = totalOrder.reduce((sum, item) => sum + item.quantity, 0);
//     const totalPrice = totalOrder.reduce((sum, item) => sum + (item.food.price * item.quantity), 0);
//     totalAmountDisplay.textContent = `Umumiy miqdor: ${totalQuantity}, Narx: ${totalPrice.toLocaleString()} so'm`;
// }

// Yangi ovqat qo'shish funksiyasi
function addNewFoodToSite(food) {
    // Admin panel orqali yangi qo'shilgan ovqatni localStoragega qo'shamiz
    let newFood = {
      name: food.name,
      description: food.description,
      price: food.price,
    };
  
    // LocalStorage'dan mavjud fast food'larni olish
    let foodList = JSON.parse(localStorage.getItem('foodList')) || [];
  
    // Faqat yangi qo'shilgan ovqatni saqlaymiz
    foodList.push(newFood);
    
    // LocalStorage'ga saqlaymiz
    localStorage.setItem('foodList', JSON.stringify(foodList));
  }
  
  // Oldingi barcha ovqatlarni localStorage'dan o'chirish
  function clearOldFoods() {
    localStorage.removeItem('foodList');
  }
  
  // Yangi ovqatlarni qo'shgandan keyin eski ma'lumotlarni o'chirish
  function updateFoodList(newFood) {
    clearOldFoods();  // Eski ovqatlarni o'chiramiz
    addNewFoodToSite(newFood);  // Yangi ovqatni qo'shamiz
  }
  
  // Misol uchun yangi ovqat qo'shish
//   updateFoodList({
//     name: "Cheese Burger",
//     description: "Juicy beef patty with cheese and sauce.",
//     price: 5.99,
//   });

// "Plus" va "Minus" tugmalari
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-plus')) {
        const quantityInput = event.target.previousElementSibling;
        quantityInput.value = parseInt(quantityInput.value) + 1;
    } else if (event.target.classList.contains('btn-minus')) {
        const quantityInput = event.target.nextElementSibling;
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    } else if (event.target.classList.contains('btn-order')) {
        const quantityInput = event.target.previousElementSibling.querySelector('.quantity-input');
        const quantity = parseInt(quantityInput.value);
        const foodName = event.target.closest('.card').querySelector('.card-title').textContent;
        const food = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].find(item => item.name === foodName);
        addToCart(food, quantity);
    }
});

function loadLocalStorageFoods() {
    const localFoods = JSON.parse(localStorage.getItem('adminFoods')) || []; // LocalStorage-dan ma'lumotlarni olish
    const allFoods = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous, ...localFoods]; // Barcha taomlarni qo'shish
    return allFoods;
}

function displayFoodsFromLocalStorage() {
    const allFoods = loadLocalStorageFoods();
    displayFoods(allFoods); // Umumiy taomlarni sahifada ko'rsatish
}


// Savatchaga qo'shish
function addToCart(food, quantity) {
    const existingOrderIndex = totalOrder.findIndex(item => item.food.name === food.name);
    if (existingOrderIndex >= 0) {
        totalOrder[existingOrderIndex].quantity += quantity;
    } else {
        totalOrder.push({ food: food, quantity: quantity });
    }
    updateCartItems();
    submitButton.style.display = 'block';
}

document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFoods = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].filter(food => 
        food.name.toLowerCase().includes(searchTerm)
    );

    // Xabarni ko'rsatish yoki yashirish
    const noResultsMessage = document.getElementById('noResultsMessage');
    if (filteredFoods.length === 0) {
        noResultsMessage.style.display = 'block';
    } else {
        noResultsMessage.style.display = 'none';
    }

    // Taomlarni ko'rsatish
    displayFoods(filteredFoods);
});



// Qidiruv funksiyasi
document.getElementById('search').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredFoods = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].filter(food => 
        food.name.toLowerCase().includes(searchTerm)
    );

    // Taomlarni ko'rsatish
    displayFoods(filteredFoods);
});

function filterFoods(category) {
    // Taomlarni filtrlaymiz
    const filteredFoods = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].filter(food => food.category === category);
    
    // Filtrlangan taomlarni ko'rsatish
    displayFoods(filteredFoods);
}

function filterFoods(category) {
    // Barcha sarlavhalarni yashiramiz
    const headers = document.querySelectorAll('.category-header');
    headers.forEach(header => header.style.display = 'none');

    // Tanlangan kategoriyani ko'rsatamiz
    const selectedHeader = document.querySelector(`.header-${category}`);
    if (selectedHeader) {
        selectedHeader.style.display = 'block'; // Tanlangan kategoriya sarlavhasini ko'rsatish
    }

    // Taomlarni filtrlaymiz
    const filteredFoods = [...foods, ...tovuq, ...xit, ...lavash, ...doner, ...burger, ...sendvich, ...snek, ...sous].filter(food => food.category === category);
    
    // Filtrlangan taomlarni ko'rsatish
    displayFoods(filteredFoods);
}

// Sahifalar o'rtasida o'tish
const fadeLinks = document.querySelectorAll('.header__link a'); // Linklarni tanlang

fadeLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Sahifa yuklanishini to'xtatish
        document.body.classList.remove('fade-in'); // Fade-in klassini o'chirish
        document.body.classList.add('fade-out'); // Fade-out klassini qo'shish

        // Sahifa o'tishdan oldin bir necha sekund kutish
        setTimeout(() => {
            window.location.href = link.href; // Yangi sahifaga o'tish
        }, 500); // Animatsiya davomiyligi bilan bir xil vaqt
    });
});