//allow forEach for IE
if(window.NodeList && !NodeList.prototype.forEach)
    NodeList.prototype.forEach = Array.prototype.forEach;

//cart icon
const cart_icon = document.querySelector('.cart_icon');
const cart_menu = document.querySelector('.cart_menu');
let menu_click = false;

cart_icon.addEventListener('click', function(){
    if( menu_click === false ){
        cart_menu.classList.add('show');
        menu_click = true;
    }
    else if( menu_click === true ){
        cart_menu.classList.remove('show');
        menu_click = false;
    }
});

//main menu controll
const main_menu_li = document.querySelectorAll('.main_menu>li');
const section = document.querySelectorAll('section');

function get_index(elm){
    let c = elm.parentNode.children;
    for( let i = 0 ; i < c.length ; i++ )
        if( c[i] === elm ) return i;
}

main_menu_li.forEach(function(li){
    li.addEventListener('click', function(){
        if( get_index(li) === 3 )
            document.querySelector('footer').scrollIntoView({behavior:'smooth'});
        else section[get_index(li)].scrollIntoView({behavior:'smooth'});
    });
});

//mobile menu controll
const mobile_menu_icon = document.querySelector('.mobile_menu_icon');
const mobile_menu_wrapper = document.querySelector('.mobile_menu_wrapper');
const mobile_menu_wrapper2 = document.querySelector('.mobile_menu_wrapper2');
// const mobile_menu = document.querySelector('.mobile_menu');
const moblie_menu_close = document.querySelector('.moblie_menu_close');

mobile_menu_icon.addEventListener('click', function(){
    mobile_menu_wrapper.classList.add('show');
    mobile_menu_wrapper2.classList.add('show');
    document.body.classList.add('scroll_lock');
});
moblie_menu_close.addEventListener('click', function(){
    mobile_menu_wrapper.classList.remove('show');
    mobile_menu_wrapper2.classList.remove('show');
    document.body.classList.remove('scroll_lock');
});

const mobile_menu_li = document.querySelectorAll('.mobile_menu>li');
mobile_menu_li.forEach(function(li){
    li.addEventListener('click', function(){
        mobile_menu_wrapper.classList.remove('show');
        mobile_menu_wrapper2.classList.remove('show');
        document.body.classList.remove('scroll_lock');
        if( get_index(li) === 3 )
            document.querySelector('footer').scrollIntoView({behavior:'smooth'});
        else section[get_index(li)].scrollIntoView({behavior:'smooth'});
    });
});


//top button controll
const top_btn_wrapper = document.querySelector('.top_btn_wrapper');
const top_btn = document.querySelector('.top_btn_wrapper>button');

window.addEventListener('scroll', function(){
    if( window.pageYOffset >= document.body.scrollHeight/5 )
        top_btn_wrapper.classList.add('show');
    else if( window.pageYOffset < document.body.scrollHeight/5 )
        top_btn_wrapper.classList.remove('show');
});
top_btn.addEventListener('click', function(){
    document.querySelector('header').scrollIntoView({behavior:'smooth'});
});

//ie siwper controll
let agent = navigator.userAgent.toLowerCase();
let isIE = false;
const combo_btn_wrapper = document.querySelector('.combo_btn_wrapper');
const combo_wrapper = document.querySelector('.combo_wrapper');
const combo_slide = document.querySelectorAll('.swiper-slide');
const prev_btn = document.querySelectorAll('.combo_btn_wrapper>button')[0];
const next_btn = document.querySelectorAll('.combo_btn_wrapper>button')[1];
let drag_icon = document.head.appendChild(document.createElement('style'));
let move_next = 1;

if( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
    isIE = true;
    drag_icon.innerHTML = '.group2:after{content: none;}';
}

function show_combo_btn(){
    if( window.innerWidth <= 980 && isIE === true )
        combo_btn_wrapper.classList.add('show');
    else if( window.innerWidth > 980 )
        combo_btn_wrapper.classList.remove('show');
}

show_combo_btn();

window.addEventListener('resize', function(){
    show_combo_btn();
    move_next = 1;
    combo_wrapper.style.transform = 'translateX(0)';
});

prev_btn.addEventListener('click', function(){
    if( move_next < 0 ) return;
    if( window.innerWidth <= 980 ){
        combo_wrapper.style.transform = 'translateX(0)';
    }
    if( window.innerWidth <= 768 && move_next > 0 ){
        combo_wrapper.style.transform = 'translateX('+ -combo_slide[0].offsetWidth * move_next + 'px)';
        move_next--;
    }
    if( window.innerWidth <= 320 && move_next > 0 ){
        combo_wrapper.style.transform = 'translateX('+ -combo_slide[0].offsetWidth * move_next + 'px)';
        move_next--;
    }
});
next_btn.addEventListener('click', function(){
    if( window.innerWidth > 320 && move_next > 2 ){ move_next = 2; return; }    
    if( window.innerWidth <= 980){
        combo_wrapper.style.transform = 'translateX('+ -combo_slide[0].offsetWidth * move_next + 'px)';
    }
    if( window.innerWidth <= 768 && move_next <= 1 ){
        combo_wrapper.style.transform = 'translateX('+ -combo_slide[0].offsetWidth * move_next + 'px)';
        move_next++;        
    }
    if( window.innerWidth <= 320 && move_next <= 2 ){
        combo_wrapper.style.transform = 'translateX('+ -combo_slide[0].offsetWidth * move_next + 'px)';
        move_next++;
    }
});//work on btn controll

//combo siwper(except ie)
let combo_swiper = new Swiper('.group2_wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    GrabCursor: true
});

document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';

window.addEventListener('resize', function(){
    document.querySelectorAll('.swiper-slide')[2].style.marginRight = '0';

    show_combo_btn();
});