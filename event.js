/* eslint-disable no-plusplus */

const content = document.querySelectorAll('.content-wrapper');
const iconButton = document.querySelectorAll('.toggle-control');

for (let i = 0; i < iconButton.length; i++) {
  iconButton[i].addEventListener('click', () => {
    content[i].classList.toggle('show');
  });
}
