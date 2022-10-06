const iconMenu  = document.querySelector('.menu__icon');
if (iconMenu) {
    const navBoddy = document.querySelector('.sidebar__nav');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        navBoddy.classList.toggle('_active');
    });
}

const start = document.getElementById('start');
if (start) {
    start.addEventListener("click", function (e) {
        start.classList.toggle('_start');
    });
}