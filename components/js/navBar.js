let mainNav = document.getElementById('nav_menu');
console.log(mainNav);
let navBarToggle = document.getElementById('navbar_toggler');
console.log(navBarToggle);

navBarToggle.addEventListener('click', function () {
	mainNav.classList.toggle('active');
});
