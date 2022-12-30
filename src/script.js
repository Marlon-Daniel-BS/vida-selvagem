const btns = document.querySelectorAll('#nav-button');
const sections = document.querySelectorAll('#carousel-js');

function changeActive() {
    btns.forEach((item) => {
        item.classList.remove('nav-btn-active');
        item.classList.add('nav-btn');
        this.classList.remove('nav-btn');
        this.classList.add('nav-btn-active');
    })

    if (btns[0].classList.contains('nav-btn-active')) {
        sections.forEach((item) => {
            item.classList.add('d-none');
        })

        sections[0].children[0].style.animation = 'openSection .3s forwards';
        sections[0].children[1].style.animation = 'openSection .6s forwards';
        sections[0].classList.remove('d-none');

    } else if (btns[1].classList.contains('nav-btn-active')) {
        sections.forEach((item) => {
            item.classList.add('d-none');
        })

        sections[1].children[0].style.animation = 'openSection .3s forwards';
        sections[1].children[1].style.animation = 'openSection .6s forwards';
        sections[1].classList.remove('d-none');

    } else if (btns[2].classList.contains('nav-btn-active')) {
        sections.forEach((item) => {
            item.classList.add('d-none');
        })

        sections[2].children[0].style.animation = 'openSection .3s forwards';
        sections[2].children[1].style.animation = 'openSection .6s forwards';
        sections[2].classList.remove('d-none');
    }
}

btns.forEach((item) => {
    item.addEventListener('click', changeActive);
})