const track = document.getElementById("skillsTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("sliderDots");

const slides = document.querySelectorAll(".skill-slide");
let currentIndex = 0;

if (track && prevBtn && nextBtn && dotsContainer && slides.length > 0) {
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        const slide = slides[currentIndex];
        const windowEl = document.querySelector(".carousel-window");

        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const windowCenter = windowEl.offsetWidth / 2;

        track.style.transform = `translateX(${windowCenter - slideCenter}px)`;

        slides.forEach(slide => slide.classList.remove("active"));
        slides[currentIndex].classList.add("active");

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateSlider();
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        updateSlider();
    });

    window.addEventListener("load", updateSlider);
    window.addEventListener("resize", updateSlider);
}