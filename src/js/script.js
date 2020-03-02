// модалки
//обратная связь
let modalFeedback = document.querySelector('.modal-window__feedback');
let modalWindowFeedBack = modalFeedback.querySelector('.modal-window__wrapper');
let openModalFeedback = document.querySelector('.button-chat');
openModalFeedback.addEventListener('click', function(evt){     
    modalFeedback.classList.add('modal-window__feedback_open');
});
let openModalFeedbackMM = document.querySelector('.main-menu__button-chat');
openModalFeedbackMM.addEventListener('click', function(evt){  
    modalFeedback.classList.add('modal-window__feedback_open');
});
let closeModalFeedback = document.querySelector('.modal-window__close-feedback');
closeModalFeedback.addEventListener('click', function(evt) {
    modalFeedback.classList.remove('modal-window__feedback_open');
    modalFeedback.classList.add('modal-window__feedback_hiding');
    setTimeout(() => modalFeedback.classList.remove('modal-window__feedback_hiding'), 500);
});
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        modalFeedback.classList.remove('modal-window__feedback_open');
        modalFeedback.classList.add('modal-window__feedback_hiding');
        setTimeout(() => modalFeedback.classList.remove('modal-window__feedback_hiding'), 500);       
    };
});
window.addEventListener('click', function(evt) {    
    if(modalFeedback.classList.contains('modal-window__feedback_open')      
    && !modalWindowFeedBack.contains(evt.target)
    && !openModalFeedbackMM.contains(evt.target)   
    && !openModalFeedback.contains(evt.target)) {   
        modalFeedback.classList.remove('modal-window__feedback_open');
        modalFeedback.classList.add('modal-window__feedback_hiding');
        setTimeout(() => modalFeedback.classList.remove('modal-window__feedback_hiding'), 500);        
        
    } 
});

//заказать звонок

let modalOrderCall = document.querySelector('.modal-window__orderCall');
let modalWindowOrderCall = modalOrderCall.querySelector('.modal-window__wrapper');
let openModalOrderCall = document.querySelector('.button-call');
openModalOrderCall.addEventListener('click', function(evt){   
    modalOrderCall.classList.add('modal-window__orderCall_open');
});
let openModalOrderCallMM = document.querySelector('.main-menu__button-call');
openModalOrderCallMM.addEventListener('click', function(evt){   
    modalOrderCall.classList.add('modal-window__orderCall_open');
});
let closeModalOrderCall = document.querySelector('.modal-window__close-orderCall');
closeModalOrderCall.addEventListener('click', function(evt) {
    modalOrderCall.classList.remove('modal-window__orderCall_open');
    modalOrderCall.classList.add('modal-window__orderCall_hiding');
    setTimeout(() => modalOrderCall.classList.remove('modal-window__orderCall_hiding'), 500);
});
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        modalOrderCall.classList.remove('modal-window__orderCall_open');
        modalOrderCall.classList.add('modal-window__orderCall_hiding');
        setTimeout(() => modalOrderCall.classList.remove('modal-window__orderCall_hiding'), 500);       
    };
});
window.addEventListener('click', function(evt) {   
    if(modalOrderCall.classList.contains('modal-window__orderCall_open')      
        && !openModalOrderCall.contains(evt.target)
        && !openModalOrderCallMM.contains(evt.target)
        && !modalWindowOrderCall.contains(evt.target)) {  
            modalOrderCall.classList.remove('modal-window__orderCall_open');
            modalOrderCall.classList.add('modal-window__orderCall_hiding');
            setTimeout(() => modalOrderCall.classList.remove('modal-window__orderCall_hiding'), 500);        
    }
});


//mainMenu

let mainMenu = document.querySelector('.main-menu');
let mainMenu__wrapper = mainMenu.querySelector('.main-menu__wrapper');
let buttonMenu = document.querySelector('.button-menu');
buttonMenu.addEventListener('click', function(evt){    
    mainMenu.classList.add('main-menu_open');    
});
let closeMenu = mainMenu.querySelector('.main-menu__close');
    closeMenu.addEventListener('click', function(evt) {
    mainMenu.classList.remove('main-menu_open');
    mainMenu.classList.add('main-menu_hiding');
    setTimeout(() => mainMenu.classList.remove('main-menu_hiding'), 500);
});
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        mainMenu.classList.remove('main-menu_open');
        mainMenu.classList.add('main-menu_hiding');
        setTimeout(() => mainMenu.classList.remove('main-menu_hiding'), 500);       
    };
});
window.addEventListener('click', function(evt) {   
    if(mainMenu.classList.contains('main-menu_open')        
        && !mainMenu__wrapper.contains(evt.target) 
        && !buttonMenu.contains(evt.target)
        && !modalFeedback.contains(evt.target)
        && !modalOrderCall.contains(evt.target)) 
        {   
            mainMenu.classList.remove('main-menu_open'); 
            mainMenu.classList.add('main-menu_hiding');
            setTimeout(() => mainMenu.classList.remove('main-menu_hiding'), 500);        
        }
});



//навигация mainMenu

let navItems = document.querySelectorAll('.nav-list__item');
let addClass = function(item) {
    item.addEventListener('click', function(evt){
        removeClass();                 
        item.classList.add('active');          
    })
}
let removeClass = function() {
    navItems.forEach(function(item) {
        if(item.classList.contains('active')){
            item.classList.remove('active');
        }
    })
}
navItems.forEach(function(item) {
    addClass(item);
})




//кнопки смены языка

let langButtons = document.querySelectorAll('.main-menu__lang button');
let langButtonClick = function(key) {
    key.addEventListener('click', function(evt){
        langButtonActiveDel();                 
        key.classList.add('active');          
    });
}
let langButtonActiveDel = function() {
    for(let i=0; i<langButtons.length; i++) {
        let button = langButtons[i];
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
    }
};
for(let i=0; i<langButtons.length; i++) {
    let button = langButtons[i];
    langButtonClick(button);         
};


//кнопки - показать всё
//бренды
let openSwiperBrands = document.querySelector('.button__brands');
let brands = document.querySelector('.swiper-container__brands');
let swiperBrands = brands.querySelector('.swiper-wrapper');
let swiperTextBrands = openSwiperBrands.querySelector('span');
let swiperImgBrands = openSwiperBrands.querySelector('div');
openSwiperBrands.addEventListener('click', function(evt){
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

//виды техники

let openSwiperTechniks = document.querySelector('.button__technics');
let techniks = document.querySelector('.swiper-container__technics');
let wrapperTechniks = techniks.querySelector('.swiper-wrapper');
let swiperTextTechniks = openSwiperTechniks.querySelector('span');
let swiperImgTechniks = openSwiperTechniks.querySelector('div');
openSwiperTechniks.addEventListener('click', function(evt){
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

//читать далее 
let articleButton = document.querySelector('.article__button');
let articleText = document.querySelector('.article__text');
let articleButtonText = articleButton.querySelector('span'); 
let articleButtonImg = articleButton.querySelector('div');
articleButton.addEventListener('click', function(evt){
    if(articleText.classList.contains('closed')) {
        articleText.classList.remove('closed');    
        articleText.classList.add('open');
        articleButtonText.textContent = "Скрыть";
        articleButtonImg.style.transform = "rotate(180deg)";
    } else {
        articleText.classList.remove('open');    
        articleText.classList.add('closed');
        articleButtonText.textContent = "Читать далее";
        articleButtonImg.style.transform = "rotate(0deg)";
    }
} )



//свиперы

import Swiper from '../js/swiper.min.js'
if (document.body.clientWidth < 768) {
    let mySwiper_technics = new Swiper('.swiper-container__technics', {
        width:240,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
    let mySwiper__brands = new Swiper('.swiper-container__brands', {
        width:240,
        height:160,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
    let mySwiper__pricesOfService = new Swiper('.swiper-container__pricesOfServices', {
        width:260,
        height:200,
        spaceBetween:16,
        pagination: {
            el: '.swiper-pagination'
        }         
    });
}


