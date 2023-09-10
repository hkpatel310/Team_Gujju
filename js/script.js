console.log("js file connected");

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};


	button.addEventListener("click", hamburgerMenu, false);		
})();

let track = document.querySelector('.slide-track');
let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveSlide() {
    if (currentIndex === slides.length - 1) {
        currentIndex = 0;
        track.style.transition = 'none';
        track.style.transform = `translateX(0%)`;
        setTimeout(() => {
            track.style.transition = 'transform 0.6s ease';
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 50);
    } else {
        currentIndex++;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Call moveSlide every 3 seconds (or adjust the time to your preference)
setInterval(moveSlide, 3000);
