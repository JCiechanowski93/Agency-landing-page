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



