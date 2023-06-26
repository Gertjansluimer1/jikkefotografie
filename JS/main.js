/*=============== MENU BUTTON ===============*/
var menu__button = document.getElementById("menu__button");
var menu = document.getElementById("menu");
var header = document.getElementById("header");
var book__now = document.getElementById("book__now");
var link = document.getElementById("link");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");
var link4 = document.getElementById("link4");
var menu__box = document.getElementById("menu__box");

menu__button.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}

link.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}

link2.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}

link3.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}

link4.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}

book__now.onclick = function(){
    menu__button.classList.toggle("openmenu");
    menu.classList.toggle("openmenu-menu");
    header.classList.toggle("openmenu-header");
    book__now.classList.toggle("openmenu-book__now");
    menu__box.classList.toggle("menu__box-open");
}




/*=============== READ MORE BUTTON ===============*/
var read_more__button1 = document.getElementById("read_more__button1");
var stories__text__1 = document.getElementById("stories__text__1");

read_more__button1.onclick = function(){
    stories__text__1.classList.toggle("text1__open");
}

var read_more__button2 = document.getElementById("read_more__button2");
var stories__text__2 = document.getElementById("stories__text__2");

read_more__button2.onclick = function(){
    stories__text__2.classList.toggle("text1__open");
}

var read_more__button3 = document.getElementById("read_more__button3");
var stories__text__3 = document.getElementById("stories__text__3");

read_more__button3.onclick = function(){
    stories__text__3.classList.toggle("text1__open");
}




/*=============== RECLAME EXIT BUTTON ===============*/
var reclame__exit = document.getElementById("reclame__exit");
var reclame = document.getElementById("reclame");

reclame__exit.onclick = function(){
    reclame.classList.toggle("reclame-exit");
}




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						     : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)




