var openSwiperBrands = document.querySelector('.button__brands');
var brands = document.querySelector('.swiper-container__brands');
var swiperBrands = brands.querySelector('.swiper-wrapper');
var swiperTextBrands = openSwiperBrands.querySelector('span');
var swiperImgBrands = openSwiperBrands.querySelector('div');
openSwiperBrands.addEventListener('click', function(evt){
    evt.preventDefault();
    if(swiperBrands.classList.contains('open')){
        swiperBrands.classList.remove('open');
        swiperTextBrands.textContent = "Показать все";
        swiperImgBrands.style.transform = "rotate(0deg)";    
    } else {
        swiperBrands.classList.add('open');
        swiperTextBrands.textContent = "Скрыть";
        swiperImgBrands.style.transform = "rotate(180deg)";
    }    
});

var openSwiperTechniks = document.querySelector('.button__technics');
var techniks = document.querySelector('.swiper-container__technics');
var wrapperTechniks = techniks.querySelector('.swiper-wrapper');
var swiperTextTechniks = openSwiperTechniks.querySelector('span');
var swiperImgTechniks = openSwiperTechniks.querySelector('div');
openSwiperTechniks.addEventListener('click', function(evt){
    evt.preventDefault();
    if(wrapperTechniks.classList.contains('open')){
        wrapperTechniks.classList.remove('open');
        swiperTextTechniks.textContent = "Показать все";
        swiperImgTechniks.style.transform = "rotate(0deg)";    
    } else {
        wrapperTechniks.classList.add('open');
        swiperTextTechniks.textContent = "Скрыть";
        swiperImgTechniks.style.transform = "rotate(180deg)";
    }    
});

if (document.body.clientWidth < 768) {
    var mySwiper1 = new Swiper('.swiper-container__technics', {
        width:240,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
}

if (document.body.clientWidth < 768) {
    var mySwiper2 = new Swiper('.swiper-container__brands', {
        width:240,
        height:160,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
}


// var breakpoint = window.matchMedia( '(min-width:768px)');
// var mySwiper;
// var breakPointChecked = function() {
//     if (breakpoint.matches === true) {
//         if (mySwiper !== undefined) {
//             mySwiper.destroy(true,true);
//         }
//         return;
//     } else if (breakpoint.matches === false) {
//             return enableSwiper();
//         }
//     };
// var enableSwiper = function() {
//     var mySwiper = new Swiper('.swiper-container', {
//         width:240,
//         spaceBetween:16,
//         pagination: {
//             el: '.swiper-pagination'
//         }         
//     });
// }
// breakpoint.addListener(breakPointChecked);
// breakPointChecked();
