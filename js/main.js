let menu = document.querySelector('.hamburger');
let nav = document.querySelector('.header__menu');

let mobileNav = nav.cloneNode(true);
mobileNav.classList.remove('header__menu');
mobileNav.classList.add('header__menu--mobile');
document.body.appendChild(mobileNav);




menu.addEventListener('click', function () {
    this.classList.toggle('hamburger--active');
    mobileNav.classList.toggle('header__mobile--nav--show');
});


let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let agencyMember = document.querySelectorAll('.agency-team__member');
let agencyProfession = document.querySelectorAll('agency-team__job-title');
let index = 1;
let array = [];

for (let i = 0; i < agencyMember.length; i++) {
    array.push(agencyMember[i]);
}


arrowLeft.addEventListener('click', function () {
    array[index].classList.remove('main-photo');
    index--;
    if (index < 0) {
        index = array.length - 1
    }
    array[index].classList.add('main-photo');

});

arrowRight.addEventListener('click', function () {
    array[index].classList.remove('main-photo');
    index++;
    if (index > array.length - 1) {
        index = 0
    }
    array[index].classList.add('main-photo');

});


const mainImage = document.querySelector('.agency-clients__main-photo img');
const smallImages = document.querySelectorAll('.agency-clients__photo');
const clientOpinion = document.querySelector('.agency-clients__opinion');
const clientName = document.querySelector('.agency-clients__name');

smallImages.forEach(el => {
    el.addEventListener('click', function () {
        let src = el.firstElementChild.getAttribute('src');
        mainImage.setAttribute('src', src);
        let quote = el.dataset.quote;
        let name = el.dataset.name;

        clientOpinion.innerHTML = quote;
        clientName.innerHTML = name;
    })
});



