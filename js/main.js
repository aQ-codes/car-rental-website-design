//for toggling the menu bar 

document.querySelector('#menu-icon').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.toggle('active');
});

document.querySelector('#close-btn').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.remove('active');
});

// for toggling the faq question and answers


document.querySelectorAll('.faq-item').forEach(item => {
    const plus = item.querySelector('.plus');
    const close = item.querySelector('.close');
    const answer = item.querySelector('.faq-answer');

    plus.addEventListener('click', () => {
        answer.classList.toggle('active');
        close.classList.toggle('active');
        plus.classList.toggle('inactive');
    });

    close.addEventListener('click', () => {
        answer.classList.remove('active');
        close.classList.remove('active');
        plus.classList.remove('inactive');
    });
});

