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
const swiperServices = new Swiper(".section-js", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    }
  },
});
/* ********************************************************************** */
/* ******************************Materialize***************************** */
const elTabs = document.querySelectorAll('.tabs')
const iTabs = M.Tabs.init(elTabs);

const eSidenav = document.querySelectorAll('.sidenav');
const iSidenav = M.Sidenav.init(eSidenav);

const eModal = document.querySelectorAll('.modal');
const iModal = M.Modal.init(eModal);

const eSelect = document.querySelectorAll('select');
const iSelect = M.FormSelect.init(eSelect);