/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */

const toggleBar = document.querySelector('.fa-bars');
const mobileNav = document.querySelector('.menu-bar');
const closeBar = document.querySelector('.fa-window-close');
const navLink = document.querySelectorAll('.link');
const currentPage = window.location.pathname;

toggleBar.addEventListener('click', () => {
  mobileNav.style.display = 'flex';
});

closeBar.addEventListener('click', () => {
  mobileNav.style.display = 'none';
});

//  Adding active Class

navLink.forEach((link) => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add('active');
  }
});

// eventbright

const exampleCallback = function () {
  console.log('Order complete!');
};

window.EBWidgets.createWidget({
  widgetType: 'checkout',
  eventId: '355091898427',
  modal: true,
  modalTriggerElementId: 'eventbrite-widget-modal-trigger-355091898427',
  onOrderComplete: exampleCallback,
});