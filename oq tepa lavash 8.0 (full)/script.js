const cardsData = [
    {
        image: "./images/img/photo_2024-10-05_22-22-41.jpg",
        title: "📣 iPhone 16 va boshqa zo’r sovg’alarni yutib olishga tayyormisiz?🎉",
        description: "Ishtirok etish uchun atigi bir qadam kifoya – 2024-yil 4-oktabrdan 31-oktabrgacha OQTEPA8 promo-kodi orqali Yandex Plusni faollashtirib qimmatbaho sovrinlari o'yinida ishtirok eting!",
        telegramLink: "https://t.me/oqtepalavashuz"
    },
    {
        image: "./images/img/x.jpg",
        title: "🍔 Qaynoq tez va xavfsiz yetkazib beramiz!",
        description: "Yangi katta burgerlarni sinab ko'ring va yutuqlarni qo'lga kiriting!",
        telegramLink: "https://t.me/oqtepalavashuz"
    },
    {
        image: "./images/img/photo_2024-10-05_22-47-38.jpg",
        title: "💪🏼 Eng kuchli bo’lgan g’alaba qozonsin!",
        description: "⚡️Yangi yeguliklarimiz festivali doirasida ta’mlar jangi!",
        telegramLink: "https://t.me/oqtepalavashuz"
    },
];

const cardContainer = document.getElementById('news__cards');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    
    const cardImage = document.createElement('img');
    cardImage.src = card.image;
    cardImage.alt = card.title;
    
    const cardTitle = document.createElement('h2');
    cardTitle.textContent = card.title;
    
    const cardDescription = document.createElement('p');
    cardDescription.textContent = card.description;
    
    const cardButton = document.createElement('button');
    cardButton.textContent = "Batafsil";
    
    cardButton.addEventListener('click', () => {
        window.open(card.telegramLink, '_blank');
    });
    
    cardElement.appendChild(cardImage);
    cardElement.appendChild(cardTitle);
    cardElement.appendChild(cardDescription);
    cardElement.appendChild(cardButton);
    
    cardContainer.appendChild(cardElement);
});

let footerHasAnimated = false;

window.addEventListener('scroll', () => {
    if (!footerHasAnimated) {
        const footer = document.querySelector('.footer__text');
        footer.classList.add('footerAnimation');
        footerHasAnimated = true; // Animatsiyani faqat bir marta ishga tushirish uchun
    }
});

const element3 = document.querySelector('.element-3');
const element4 = document.querySelector('.element-4');


// Burger elementlar animatsiyasi tugagach havoda muallab turish
setTimeout(() => {
    element3.classList.add('float'); // Havoda muallab turish klassini qo'shamiz
    element4.classList.add('float'); // Havoda muallab turish klassini qo'shamiz
}, 5000); // Animatsiya tugagandan keyin 5 soniya o'tgach

const fadeLinks = document.querySelectorAll('.fade-link');

fadeLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Sahifa yuklanishini to'xtatish
        document.body.classList.add('fade-out'); // Fade-out klassini qo'shish

        // Sahifa o'tishdan oldin bir necha sekund kutish
        setTimeout(() => {
            window.location.href = link.href; // Yangi sahifaga o'tish
        }, 500); // Animatsiya davomiyligi bilan bir xil vaqt
    });
});

