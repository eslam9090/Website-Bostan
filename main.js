// // Start Variables
// let auto_slide = document.querySelector(".auto-slide");
// let imgArr = ["01.jpg", "02.jpg", "03.jpg", "03.jpg"];
// // End Variables

// // Start Auto Slide Image
// setInterval(() => {
//   let randomNumber = Math.floor(Math.random() * imgArr.length);
//   auto_slide.style.backgroundImage =
//     'url("/images/' + imgArr[randomNumber] + '")';
// }, 2000);
// // End Auto Slide Image
// onclick="this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))"
let menubtn = document.querySelector(".menu");
let links = document.querySelector(".links");
menubtn.addEventListener("click", () => {
  menubtn.classList.toggle("opened");
  menubtn.setAttribute("aria-expanded", menubtn.classList.contains("opened"));
  links.classList.toggle("left");
});

//////////////////////////////////////////

let nums = document.querySelectorAll(".achievement-boxs .box .num");
let our_achievement = document.querySelector(".our-achievement");
let started = false;
window.onscroll = function () {
  if (window.scrollY >= our_achievement.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
