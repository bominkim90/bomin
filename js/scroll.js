/********************/
/* first_screen */
/* FLOW => 처음에 1.안녕하세요 2.저는 김보민입니다 3.만나서 반갑습니다
    스크롤에 따라 1번부터 등장하고 사라진다(한개씩만 존재) */

// 에드이벤트리스너
window.addEventListener('scroll', say_hello);

// 함수
function say_hello() {
    let hello_1 = document.querySelector('.hello_1');
    let hello_2 = document.querySelector('.hello_2');
    let hello_3 = document.querySelector('.hello_3');
    let hello_4 = document.querySelector('.hello_4');

    if (window.scrollY >= 0 && window.scrollY < 100) {
        hello_1.style.display = 'block';
        hello_2.style.display = 'none';
        hello_3.style.display = 'none';
        hello_4.style.display = 'none';
    } else if (window.scrollY > 100 && window.scrollY < 300) {
        hello_1.style.display = 'none';
        hello_2.style.display = 'block';
        hello_3.style.display = 'none';
        hello_4.style.display = 'none';
    } else if (window.scrollY >= 300 && window.scrollY < 400) {
        hello_1.style.display = 'none';
        hello_2.style.display = 'block';
        hello_3.style.display = 'inline-block';
        hello_4.style.display = 'none';
    } else if (window.scrollY >= 400 && window.scrollY < 850) {
        hello_1.style.display = 'none';
        hello_2.style.display = 'none';
        hello_3.style.display = 'none';
        hello_4.style.display = 'block';
    } else {
        hello_1.style.display = 'none';
        hello_2.style.display = 'none';
        hello_3.style.display = 'none';
        hello_4.style.display = 'none';
    }
}




/*************************/
/* 오른쪽 중앙 fixed NAV */
// 각 섹션에 있을때 그 섹션의 이름을 갖고있는 버튼이 class="on"을 갖게된다.

// 변수
let dot1 = document.querySelector('.dot1');
let dot2 = document.querySelector('.dot2');
let dot3 = document.querySelector('.dot3');
let dot4 = document.querySelector('.dot4');
let dot5 = document.querySelector('.dot5');

let section1 = document.querySelector('#first_screen');
let section2 = document.querySelector('#about_me');
let section3 = document.querySelector('#skill');
let section4 = document.querySelector('#portfolio');
let section5 = document.querySelector('#contact');

// 에드이벤트리스너
window.addEventListener('scroll', fix_menu);

// 함수
function fix_menu() {
    let window_Y = window.scrollY + window.innerHeight;
    let dot = document.querySelectorAll('.dot');

    for (i = 0; i < dot.length; i++){
        dot[i].classList.remove('on');
    }
    // 이 제거가 여기에 들어온다는건 스크롤 할때마다 계속 제거가 일어난단 소린가?
    // 그럼 밑에있는 class를 추가하는 함수랑 계~~속 서로 반복한다는건가 그럼 겁나 소스 잡아먹지않나?

    if (window_Y > 0 && window_Y < section2.offsetTop + 400) {
        dot1.classList.add('on');
    } else if (window_Y > section2.offsetTop + 400 && window_Y < section3.offsetTop + 400) {
        dot2.classList.add('on');
    } else if (window_Y > section3.offsetTop + 400 && window_Y < section4.offsetTop + 400) {
        dot3.classList.add('on');
    } else if (window_Y > section4.offsetTop + 400 && window_Y < section5.offsetTop + 400) {
        dot4.classList.add('on');
    } else if (window_Y > section5.offsetTop + 400) {
        dot5.classList.add('on');
    } 
}





/************************************/
/* ABOUT_ME */
// 변수
let about_me = document.querySelector('#about_me');
let about_left = document.querySelector('.about_left');
let about_right = document.querySelector('.about_right');

// 에드이벤트리스너
window.addEventListener('scroll', about_up);

// 함수
function about_up() {
    let window_Y = window.scrollY + window.innerHeight;

    if (window_Y > about_me.offsetTop + 400) {
        about_right.style.display = "block";
    } else { 
        about_right.style.display = "none";
    }

    if ( window_Y > about_me.offsetTop +150 && window_Y < about_me.offsetTop + 200 ) {
        about_left.style.transform = "translateY(-20px)";
        about_right.style.transform = "translateY(-10px)";
    } else if( window_Y > about_me.offsetTop + 200 && window_Y < about_me.offsetTop + 250 ){
        about_left.style.transform = "translateY(-40px)";
        about_right.style.transform = "translateY(-20px)";
    } else if( window_Y > about_me.offsetTop + 250 && window_Y < about_me.offsetTop + 300 ){
        about_left.style.transform = "translateY(-60px)";
        about_right.style.transform = "translateY(-30px)";
    } else if( window_Y > about_me.offsetTop + 300 && window_Y < about_me.offsetTop + 350 ){
        about_left.style.transform = "translateY(-80px)";
        about_right.style.transform = "translateY(-40px)";
    } else if( window_Y > about_me.offsetTop + 350 && window_Y < about_me.offsetTop + 400 ){
        about_left.style.transform = "translateY(-100px)";
        about_right.style.transform = "translateY(-50px)";
    } else if( window_Y > about_me.offsetTop + 400 && window_Y < about_me.offsetTop + 450 ){
        about_left.style.transform = "translateY(-120px)";
        about_right.style.transform = "translateY(-60px)";
    } else if( window_Y > about_me.offsetTop + 450 && window_Y < about_me.offsetTop + 500 ){
        about_left.style.transform = "translateY(-140px)";
        about_right.style.transform = "translateY(-70px)";
    } else if( window_Y > about_me.offsetTop + 500 && window_Y < about_me.offsetTop + 550 ){
        about_left.style.transform = "translateY(-160px)";
        about_right.style.transform = "translateY(-80px)";
    }
}



/************************************/
/* SKILL */
// FLOW => 스킬섹션에서 오른쪽 html요소가 보일때, 오른쪽에 percent 게이지가 width:0% -> 각자 %로 늘어난다
// 변수
let skill = document.querySelector('#skill');
let percent_inner = document.querySelectorAll('.percent_inner');

// 에드이벤트리스너
window.addEventListener('scroll', percent);

// 함수
function percent() {
    let window_Y = window.scrollY + window.innerHeight;
    if ( window_Y > skill.offsetTop + 300) {
        for (let i = 0; i < percent_inner.length; i++){
            percent_inner[i].classList.add('percent_show');
        }
    } else {
        for (let i = 0; i < percent_inner.length; i++){
            percent_inner[i].classList.remove('percent_show');
        }
    }
}