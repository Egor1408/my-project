// модалки
var modalFeedback = document.querySelector('.modalWindow__feedback');
var openModalFeedback = document.querySelector('.buttonChat');
openModalFeedback.addEventListener('click', function(evt){
    evt.preventDefault();    
    modalFeedback.classList.add('openFeedback');
});
var openModalFeedbackMM = document.querySelector('.main-menu__buttonChat');
openModalFeedbackMM.addEventListener('click', function(evt){
    evt.preventDefault();    
    modalFeedback.classList.add('openFeedback');
});
var closeModalFeedback = document.querySelector('.modalWindow__closeFeedback');
closeModalFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('openFeedback');
    modalFeedback.classList.add('hidingFeedback');
    setTimeout(() => modalFeedback.classList.remove('hidingFeedback'), 500);
});
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        modalFeedback.classList.remove('openFeedback');
        modalFeedback.classList.add('hidingFeedback');
        setTimeout(() => modalFeedback.classList.remove('hidingFeedback'), 500);       
    };
});
var overlayFeedback = modalFeedback.querySelector('.modalWindow__overlay');
overlayFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalFeedback.classList.remove('openFeedback');
    modalFeedback.classList.add('hidingFeedback');
    setTimeout(() => modalFeedback.classList.remove('hidingFeedback'), 500);
});



var modalOrderCall = document.querySelector('.modalWindow__orderCall');
var openModalOrderCall = document.querySelector('.buttonCall');
openModalOrderCall.addEventListener('click', function(evt){
    evt.preventDefault();    
    modalOrderCall.classList.add('openOrderCall');
});
var openModalOrderCallMM = document.querySelector('.main-menu__buttonCall');
openModalOrderCallMM.addEventListener('click', function(evt){
    evt.preventDefault();    
    modalOrderCall.classList.add('openOrderCall');
});
var closeModalFeedback = document.querySelector('.modalWindow__closeOrderCall');
closeModalFeedback.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalOrderCall.classList.remove('openOrderCall');
    modalOrderCall.classList.add('hidingOrderCall');
    setTimeout(() => modalOrderCall.classList.remove('hidingOrderCall'), 500);
});
document.addEventListener('keydown', function(evt) {    
    if(evt.keyCode === 27) {
        modalOrderCall.classList.remove('openOrderCall');
        modalOrderCall.classList.add('hidingOrderCall');
        setTimeout(() => modalOrderCall.classList.remove('hidingOrderCall'), 500);       
    };
});
var overlayOrderCall = modalOrderCall.querySelector('.modalWindow__overlay');
overlayOrderCall.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalOrderCall.classList.remove('openOrderCall');
    modalOrderCall.classList.add('hidingOrderCall');
    setTimeout(() => modalOrderCall.classList.remove('hidingOrderCall'), 500);
});



//main-menu active
var navItems = document.querySelectorAll('.nav-list__item');
var itemClick = function(key) {
    key.addEventListener('click', function(evt){
        evt.preventDefault();
        itemMenuActiveDel();                 
        key.classList.add('active');          
    });
}
var itemMenuActiveDel = function() {
    for(var i=0; i<navItems.length; i++) {
        var item = navItems[i];
        if(item.classList.contains('active')){
            item.classList.remove('active');
        }
    }
};
for(var i=0; i<navItems.length; i++) {
    var item = navItems[i];
    itemClick(item);         
};

var langButtons = document.querySelectorAll('.lang button');
var langButtonClick = function(key) {
    key.addEventListener('click', function(evt){
        evt.preventDefault();
        langButtonActiveDel();                 
        key.classList.add('active');          
    });
}
var langButtonActiveDel = function() {
    for(var i=0; i<langButtons.length; i++) {
        var button = langButtons[i];
        if(button.classList.contains('active')){
            button.classList.remove('active');
        }
    }
};
for(var i=0; i<langButtons.length; i++) {
    var button = langButtons[i];
    langButtonClick(button);         
};

//mainPage active
var mainSectionNavItems = document.querySelectorAll('.mainSection__item');
var mainMenuItemClick = function(key) {
    key.addEventListener('click', function(evt){
        evt.preventDefault();
        mainMenuActiveDel();                 
        key.classList.add('active');          
    });
}
var mainMenuActiveDel = function() {
    for(var i=0; i<mainSectionNavItems.length; i++) {
        var item = mainSectionNavItems[i];
        if(item.classList.contains('active')){
            item.classList.remove('active');
        }
    }
};
for(var i=0; i<mainSectionNavItems.length; i++) {
    var item = mainSectionNavItems[i];
    mainMenuItemClick(item);         
};


//меню
var mainMenu = document.querySelector('.main-menu');
var buttonMenu = document.querySelector('.buttonMenu');
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
//кнопки - показать всё
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

//читать далее 
var articleButton = document.querySelector('.article__button');
var articleText = document.querySelector('.article__text');
var articleButtonText = articleButton.querySelector('span'); 
var articleButtonImg = articleButton.querySelector('div');
articleButton.addEventListener('click', function(evt){
    evt.preventDefault();
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
if (document.body.clientWidth < 768) {
    var mySwiper2 = new Swiper('.swiper-container__pricesOfServices', {
        width:260,
        height:200,
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
