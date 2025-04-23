new Typed(".multiple-text1", {
    strings: ["Hello Coders! >", "Welcome to CodSoc'25! >"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
  new Typed(".multiple-text2", {
    strings: ["Coding Extravaganza 2.0! >"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });
  
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinkContainer = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinkContainer.classList.toggle("open");
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinkContainer.classList.remove("open");
    });
  });
  
  const slides = document.querySelectorAll(".slider .slide");
  let currentSlide = 0;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);
  showSlide(currentSlide);
  
  const track = document.querySelector(".carousel-track");
  const carouselSlides = Array.from(track.children);
  let currentIndex = 0;
  function updateCarousel() {
    const slideWidth = carouselSlides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateCarousel();
  }, 4000);
  window.addEventListener("resize", updateCarousel);
  updateCarousel();
  


  