import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();


/* ********************************************************************** */
const descriptions = document.getElementsByClassName('item__description');

for (let i = 0; i < descriptions.length; i++) {
  let description = descriptions[i].innerHTML;
  let trimmedDescription = description.substring(0, 105) + '...';
  descriptions[i].innerHTML = trimmedDescription;
}
/* ********************************************************************** */
/* ********************************Swiper******************************** */
const swiperServices = new Swiper(".services-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperWorks = new Swiper(".works-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperHouse = new Swiper(".house-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperShopping = new Swiper(".shopping-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperAnnounc = new Swiper(".announc-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperPeople = new Swiper(".people-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperSale = new Swiper(".sale-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperBlog = new Swiper(".blog-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
/* ********************************************************************** */
/* ******************************Materialize***************************** */
const elTabs = document.querySelectorAll('.tabs')
const iTabs = M.Tabs.init(elTabs);