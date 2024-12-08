// const fadeLinks = document.querySelectorAll('.fade-link');

// fadeLinks.forEach(link => {
//     link.addEventListener('click', function(event) {
//         event.preventDefault(); // Sahifa yuklanishini to'xtatish
//         document.body.classList.add('fade-out'); // Fade-out klassini qo'shish

//         // Sahifa o'tishdan oldin bir necha sekund kutish
//         setTimeout(() => {
//             window.location.href = link.href; // Yangi sahifaga o'tish
//         }, 500); // Animatsiya davomiyligi bilan bir xil vaqt
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in'); // Sahifa yuklanganda fade-in qo'shiladi
});

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

