/******************************/
/* ARTWORK 슬라이드  좌우 이동*/
// FLOW => 자동x 오른쪽 왼쪽 누르면 left:""px를 이용하여 한개width 만큼 이동한다.

// 변수
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slide_wrap = document.querySelector('.slide_wrap');
let slides = document.querySelectorAll('.slide');

let current = 1;

// 클릭이벤트
prev.addEventListener('click', slide_prev);
next.addEventListener('click', slide_next);

// 이전,다음 버튼 함수
function slide_prev() {
    current -= 1;
    if (current < 1) {
        return current = 1;
    }
    slide_wrap.style.left = "-" +(current - 1) * 305 + "px";
}
function slide_next() {
    current += 1;
    if (current > slides.length - 3) {
        return current = slides.length - 3;
    }
    slide_wrap.style.left = "-" + (current - 1) * 305 + "px";
}


/******************************************/
/* ARTWORK 썸네일 누르면 팝업 뜨기 */
let slide = document.querySelectorAll('.slide');


// 애드이벤트리스너
slide.forEach(function (e) {
    e.addEventListener('click', artwork_popup); 
});

// 팝업뜨기
function artwork_popup() {
    let target = this.nextElementSibling;

    target.style.display = "block";
}

/* 팝업 닫기 */
let slide_pop_inside = document.querySelectorAll('.slide_pop_inside');
let slide_pop_window = document.querySelectorAll('.slide_pop_window');

// 주변 배경 클릭 시 닫기
window.addEventListener('click', pop_close);
function pop_close(e) {
    for (let i = 0; i < slide_pop_inside.length; i++){
        e.target === slide_pop_inside[i].parentElement ? slide_pop_window[i].style.display = "none" : false 
    }
}
// 닫기 버튼 클릭 시 닫기
let slide_pop_close = document.querySelectorAll('.slide_pop_close');

slide_pop_close.forEach(function (e) {
    e.addEventListener('click', function () {
        for (let i = 0; i < slide_pop_window.length; i++){
                slide_pop_window[i].style.display = "none";
            }
    });
});
/*// ARTWORK 썸네일 누르면 팝업 뜨기 */




/*******************************/
/* 아트웍 슬라이드 안에 슬라이드*/
let inside_pop = document.querySelectorAll('.inside_pop');
let inside_current = 0;


inside_pop.forEach(function (e) {
    e.addEventListener('click', function () {
        inside_current += 1;

        if (inside_current >= this.children.length) {
            inside_current = 0;
        }

        for (let i = 0; i < this.children.length; i++){
            this.children[i].style.display = "none";
        }

        this.children[inside_current].style.display = "block";
    });
});

