const navButton = document.querySelector('.nav__btn');
const menuImage = document.querySelector('.menu-img'); 
navButton.addEventListener('click', function() {
    this.classList.toggle('show');
    if(menuImage.getAttribute('src') == 'images/menu.svg'){
        menuImage.setAttribute('src','images/close.svg')
    } else {
        menuImage.setAttribute('src','images/menu.svg')
    }
})
