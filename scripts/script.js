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
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        mainMenu.classList.remove('main-menu_open');       
    };
});
window.addEventListener('click', function(evt) {   
    evt.preventDefault(); 
    if(mainMenu.classList.contains('main-menu_open') && !mainMenu.contains(evt.target) && !buttonMenu.contains(evt.target)) {   
        mainMenu.classList.remove('main-menu_open');        
    }
});

var openSwiper = document.querySelector('.swiper__button');
var swiper = document.querySelector('.swiper-wrapper');
var swiperText = openSwiper.querySelector('span');
var swiperImg = openSwiper.querySelector('div');
openSwiper.addEventListener('click', function(evt){
    evt.preventDefault();
    if(swiper.classList.contains('open')){
        swiper.classList.remove('open');
        swiperText.textContent = "Показать все";
        swiperImg.style.transform = "rotate(0deg)";    
    } else {
        swiper.classList.add('open');
        swiperText.textContent = "Скрыть";
        swiperImg.style.transform = "rotate(180deg)";
    }    
});



var breakpoint = window.matchMedia( '(min-width:768px)');
var mySwiper;
var breakPointChecked = function() {
    if (breakpoint.matches === true) {
        if (mySwiper !== undefined) {
            mySwiper.destroy(true,true);
        }
        return;
    } else if (breakpoint.matches === false) {
            return enableSwiper();
        }
    };


var enableSwiper = function() {
    var mySwiper = new Swiper('.swiper-container', {
        width:240,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
}
breakpoint.addListener(breakPointChecked);
breakPointChecked();
