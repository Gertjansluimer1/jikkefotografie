/*=============== MENU BUTTON TOGGLE ===============*/
const menu_button = document.getElementById("menu_button");
const menu = document.getElementById("menu");
const nav_list = document.getElementById("nav_list");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const book_now = document.getElementById("book_now");
const header_socials = document.getElementById("header_socials");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

function menuToggle(){
    menu_button.classList.toggle("open_menu_button");
    menu.classList.toggle("open_menu");
    nav_list.classList.toggle("open_nav_list");
    header.classList.toggle("open_header");
    logo.classList.toggle("open_logo");
    book_now.classList.toggle("open_book_now");
    header_socials.classList.toggle("open_header_socials");
}

menu_button.onclick = menuToggle;
link1.onclick = menuToggle;
link2.onclick = menuToggle;
link3.onclick = menuToggle;
link4.onclick = menuToggle;
book_now.onclick = menuToggle;




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)