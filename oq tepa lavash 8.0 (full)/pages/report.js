document.getElementById("night-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    const wrapper = document.querySelector(".wrapper_5");
    wrapper.classList.toggle("dark-mode");

    const inputs = document.querySelectorAll("input[type='text']");
    inputs.forEach(input => {
        input.classList.toggle("dark-mode");
    });

    const button = document.querySelector(".tugma");
    button.classList.toggle("dark-mode");
    
    // Change button text based on mode
    if (document.body.classList.contains("dark-mode")) {
        this.textContent = "Kun..."; // Change to "Day" when in dark mode
    } else {
        this.textContent = "Tun..."; // Change to "Night" when in light mode
    }
});

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


