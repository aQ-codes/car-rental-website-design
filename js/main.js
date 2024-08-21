//for toggling the menu bar 

document.querySelector('#menu-icon').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.toggle('active');
});

document.querySelector('#close-btn').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.remove('active');
});

// for toggling the faq question and answers

document.querySelector('.plus').addEventListener('click', function() {
    document.querySelector('.faq-answer').classList.toggle('active');
    document.querySelector('.close').classList.toggle('active');
    document.querySelector('.plus').classList.toggle('inactive');
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.faq-answer').classList.remove('active');
    document.querySelector('.close').classList.remove('active');
    document.querySelector('.plus').classList.remove('inactive');

});

