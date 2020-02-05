var mainMenu = document.querySelector('.main-menu');
var buttonMenu = document.querySelector('.button-menu');
buttonMenu.addEventListener('click', function(evt){
    evt.preventDefault();
    mainMenu.classList.add('main-menu_open');
});

var closeMenu = mainMenu.querySelector('.close-menu');
closeMenu.addEventListener('click', function(evt) {
    evt.preventDefault();
    mainMenu.classList.remove('main-menu_open');
});

closeMenu.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        mainMenu.classList.remove('main-menu_open');
    };
});


var mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination'
    }
});

