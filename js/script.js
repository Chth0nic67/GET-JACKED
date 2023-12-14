/*
	JavaScript for the main Website

	GET JACKED 
	
 	POMARES, KURL ERNEST 
	BAYLON, JOHN CARL
 	CAMERO, MARY CHRIS 
 	HABULAN, CHRISTIAN 
 	JONES, CHAPPY 
 	MANALO, KEISHA MAE 
*/

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  	header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");
};

window.onscroll = () => {
	menu.classList.remove("bx-x");
	navlist.classList.remove("open");
};

function setupAnimation(targetClass, animationClass) { // Function to be called to trigger animation when element is scrolled into
 	const elementsToAnimate = document.querySelectorAll(`.${targetClass}`);

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Defer the animation until scrolling is complete
			setTimeout(() => {
			entry.target.classList.remove("animate__hidden");
			entry.target.classList.add("animate__animated", animationClass);
			}, 150);
		} else {
			entry.target.classList.remove("animate__animated", animationClass);
			entry.target.classList.add("animate__hidden");
		}
		});
	});

	elementsToAnimate.forEach((element) => {
		observer.observe(element);
	});
}

// Apply different animations for different classes
setupAnimation("home-text", "animate__pulse");
setupAnimation("infographics", "animate__fadeInDown");
setupAnimation("swipe-up", "animate__fadeInDown");
setupAnimation("main-text", "animate__fadeInUp");
setupAnimation("main-text2", "animate__fadeInUp");
setupAnimation("main-text3", "animate__fadeInUp");
setupAnimation("nutritious-descript", "animate__fadeInLeft");

// Start observing the animated element
observer.observe(animatedElement);

var swiper = new Swiper(".swiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 100,
		modifier: 2,
		slideShadows: true,
	},
	spaceBetween: 60,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
