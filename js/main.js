document.querySelector('#menu-icon').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.toggle('active');
});

document.querySelector('#close-btn').addEventListener('click', function() {
    document.querySelector('.social-nav').classList.remove('active');
});

