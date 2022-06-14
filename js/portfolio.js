/*****************/
/* PLANNING 팝업 */
const go_planning = document.querySelectorAll('.go_planning');
const artwork = document.querySelector('#artwork');

go_planning.forEach(function (e) {
    e.addEventListener('click', function () {
        this.nextElementSibling.style.display = "block";
        artwork.style.zIndex ="1";
    });
});

const close_planning = document.querySelectorAll('.close_planning');

close_planning.forEach(function (e) {
    e.addEventListener('click', function () {
        this.parentElement.style.display = "none";
        artwork.style.zIndex ="15";
    });
});
