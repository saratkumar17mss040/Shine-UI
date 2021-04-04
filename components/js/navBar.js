let mainNav = document.querySelector('.nav_menu');
let mainNav2 = document.querySelector('.nav_menu2');
console.log(mainNav);
let navBarToggle = document.querySelector('.navbar_toggler');
let navBarToggle2 = document.querySelector('.navbar_toggler2');

// for (let i = 0; i < 2; i++) {
// 	navBarToggle[i].addEventListener('click', function () {
// 		mainNav[i].classList.toggle('active');
// 		console.log(mainNav[i]);
// 	});
// }

navBarToggle.addEventListener('click', () => {
	mainNav.classList.toggle('active');
});

navBarToggle2.addEventListener('click', () => {
	mainNav2.classList.toggle('active');
});
