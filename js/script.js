var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 2,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  loopFillGroupWithBlank: false,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});


const menuOpenBtn = document.querySelector(".mobileBtn")
const mobileMenu  = document.querySelector(".mobileDropdown")
const menuCloseBtn = document.querySelector(".closeMenu")
const mobileEnq = document.querySelector(".mobileEnquire")

menuOpenBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  // console.log("hell")
})

menuCloseBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  // console.log("hell")
})

mobileEnq.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden')
  // console.log("hell")
})
