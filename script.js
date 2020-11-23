//  Intro Section
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text1 = intro.querySelector("#title");
const text2 = intro.querySelector("#text2");
// After Intro Section
// const section = document.querySelector("section");
// const end = section.querySelector("h1");
// Scroll Magic
const controller = new ScrollMagic.Controller();
// Scenes
// Video Animation
let videoScene = new ScrollMagic.Scene({
	duration: 9000,
	triggerElement: intro,
	triggerHook: 0,
})
	.setPin(intro)
	.addTo(controller);
// Text Animation

const titleAnimation = new TweenMax.fromTo(
	text1,
	3,
	{ opacity: 1 },
	{ opacity: 0 }
);
let titleScene = new ScrollMagic.Scene({
	duration: 3000,
	triggerElement: intro,
	triggerHook: 0,
})
	.setTween(titleAnimation)
	.addTo(controller);

const text2Animation = new TweenMax.fromTo(
	text2,
	3,
	{ opacity: 0 },
	{ opacity: 1, delay: 10 }
);
let text2Scene = new ScrollMagic.Scene({
	duration: 7000,
	triggerElement: intro,
	triggerHook: 0,
})
	.setTween(text2Animation)
	.addTo(controller);

// Video Animation
let accelerationRate = 0.1;
let scrollPosition = 0;
let delay = 0;
// Getting the scroll position from the event and convert it into seconds
videoScene.on("update", (e) => {
	scrollPosition = e.scrollPos / 1000;
});
// Delay catches upto the scrollPosition at accelerationRate
setInterval(() => {
	delay += (scrollPosition - delay) * accelerationRate;
	video.currentTime = delay;
}, 33.3);
// 33.3 will be the interval of each frame
// Video is in 30fps, so 1 sec = 30 frames => 1000 milliseconds = 30 frames
// That implies 33.3 milliseconds would be great for each frame
