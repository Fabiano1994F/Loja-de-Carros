let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');

let items = container.querySelectorAll('.list .item');

let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let list = container.querySelector('.list');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

function setSlider() {
    let itemOld = container.querySelector('.list .item.active');
    if (itemOld) itemOld.classList.remove('active'); // Proteção contra erro se não existir .active

    let dotsOld = indicators.querySelector('ul li.active');
    if (dotsOld) dotsOld.classList.remove('active');

    dots[active].classList.add('active');

    // Evitar duplicar zeros quando for 10+
    indicators.querySelector('.number').innerHTML = 
        (active + 1).toString().padStart(2, '0');
}

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    setSlider();
    items[active].classList.add('active');
};

prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1);
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    setSlider();
    items[active].classList.add('active');
};
