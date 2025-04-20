// Scroll Animation
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(".block").forEach((el) => {
  gsap.fromTo(el, { y: 50, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      end: "top 40%",
      scrub: true,
    }
  });
});
// This GSAP scroll-triggered animation block is my favourite because it transforms the experience of 
// browsing my portfolio into something dynamic and immersive. Instead of static content, the images 
// gracefully animate into view as you scroll, which adds rhythm and presence to the visual storytelling.
// It solved a key problem in my layout: making the transition from the landing section to the image grid 
// feel intentional and fluid. I also had to tweak the animation thresholds and easing to match the pacing 
// of my design. I think it’s a clean example of using JavaScript to enhance design without overwhelming it.



// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const blocks = document.querySelectorAll(".block");
const leftBtn = document.querySelector(".arrow-btn.left");
const rightBtn = document.querySelector(".arrow-btn.right");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightboxImg.src = blocks[currentIndex].src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showNext() {
  currentIndex = (currentIndex + 1) % blocks.length;
  openLightbox(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + blocks.length) % blocks.length;
  openLightbox(currentIndex);
}

blocks.forEach((img, index) => {
  img.addEventListener("click", () => openLightbox(index));
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

leftBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showPrev();
});

rightBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  showNext();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});

// Quote popup
const quotePopup = document.getElementById("quote-popup");
const quoteText = document.getElementById("quote-text");
const quotes = document.querySelectorAll(".quote");

quotes.forEach((quote) => {
  quote.addEventListener("click", () => {
    quoteText.innerHTML = quote.innerHTML;
    quotePopup.classList.add("active");
  });
});

quotePopup.addEventListener("click", (e) => {
  if (e.target === quotePopup) quotePopup.classList.remove("active");
});
