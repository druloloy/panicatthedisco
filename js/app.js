import getAlbums from './data-handler.js';

const DOMElements = {
    drawer : document.querySelector('.drawer-container'),
    drawer_handle : document.querySelector('.drawer-handle'),
    scroll_button : document.querySelector('.scroll-down'),
    screen_height : window.innerHeight
}

DOMElements.scroll_button.addEventListener('click',
    () => window.scrollTo(0,DOMElements.screen_height));

DOMElements.drawer_handle.addEventListener('click',(e)=>{
    e.preventDefault();
    DOMElements.drawer.style.transition = '800ms ease-in-out 150ms';

    if(DOMElements.drawer.classList.contains('toggleDrawer')) {
        DOMElements.drawer.classList.remove('toggleDrawer');
        DOMElements.drawer_handle.innerHTML = "&raquo;"
    }
    else {
        DOMElements.drawer.classList.add('toggleDrawer');
        DOMElements.drawer_handle.innerHTML = "&laquo;"
    }
});

// albums
getAlbums(); // display albums

