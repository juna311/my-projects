document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling; 
        const icon = button.querySelector('.icon'); 

        if (answer.style.display === 'block') {
            answer.style.display = 'none'; 
            icon.style.opacity = 0; 
            setTimeout(() => {
                icon.innerHTML = '<img src="assets/images/icon-plus.svg" alt="+">';
                icon.style.opacity = 1; 
            }, 300);
        } else {
            answer.style.display = 'block'; 
            icon.style.opacity = 0; 
            setTimeout(() => {
                icon.innerHTML = '<img src="assets/images/icon-minus.svg" alt="-">';
                icon.style.opacity = 1; 
            }, 300);
        }
    });
    button.addEventListener('touchstart', () => {
        button.classList.add('active');
    });

    button.addEventListener('touchend', () => {
        setTimeout(() => button.classList.remove('active'), 100);
    });

    button.addEventListener('blur', () => {
        button.classList.remove('active');
    });
});

