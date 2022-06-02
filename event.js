/* eslint-disable no-plusplus */

const content = document.querySelectorAll('.content-wrapper');
const iconButton = document.querySelectorAll('.toggle-control');
// const iconToggle = document.querySelectorAll('.fa-chevron-right');

for (let i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', () => {
    // iconToggle[i].style.transform = 'rotate(90deg)';
    content[i].classList.toggle('show');
  });
}
