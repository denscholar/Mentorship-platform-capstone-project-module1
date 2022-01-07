/* eslint-disable no-plusplus */
const toggleBar = document.querySelector('.toggle-menu');
const menuBar = document.querySelector('.hidden');
const closeBar = document.querySelector('.close-mobile-menu');

toggleBar.addEventListener('click', () => {
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'flex';
  } else {
    menuBar.style.display = 'none';
  }
});

closeBar.addEventListener('click', () => {
  if (menuBar.style.display === 'flex') {
    menuBar.style.display = 'none';
  }
});

const data = [
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker1.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker2.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker3.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker4.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker5.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
  {
    name: 'Dennis Akagha',
    profileImage: './images/speakers/speaker6.png',
    bgImage: './images/draught.PNG',
    shortDesc: 'Neque esse modi, dolor quis assumenda delectus error',
    longDescr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam quae perspiciatis placeat odio laborum accusamus reiciendis? ',
  },
];

const partner = document.querySelector('.partner');
const body = document.querySelectorAll('body');
const container = document.createElement('div');
body[0].insertBefore(container, partner);
container.className = 'featured-mentor-section';

const title = document.createElement('h2');
title.className = 'mentor-title';
title.textContent = 'Featured Mentor';
container.appendChild(title);

const line = document.createElement('p');
line.className = 'line';
container.appendChild(line);

const grid = document.createElement('div');
grid.className = 'mentors-grid';
container.appendChild(grid);

const button = document.createElement('button');
button.className = 'see-more';
button.type = 'button';
container.appendChild(button);

const seeMoreText = document.createElement('h3');
seeMoreText.textContent = 'More';
button.appendChild(seeMoreText);

const icon = document.createElement('i');
icon.className = 'fas fa-chevron-down';
seeMoreText.appendChild(icon);

function mentorsData() {
  for (let i = 0; i < data.length; i++) {
    const newMentors = `
  <div class="mentors-grid-items">
      <div class="img-wrapper">
        <img class="img-draught" src="${data[i].bgImage}" alt="background image" />
        <img class="img-speaker" src="${data[i].profileImage}"alt="mentor image" />
      </div>
      <div class="mentor-profile">
        <h3>${data[i].name}</h3>
        <p class="profile">${data[i].shortDesc}</p>
        <p class="line"></p>
        <p class="works">${data[i].longDescr}</p>
      </div>
  </div>`;
    const actualMentors = document.createElement('div');
    actualMentors.innerHTML = newMentors;
    grid.appendChild(actualMentors);
  }
}

function mentorsData2() {
  for (let i = 0; i < 2; i++) {
    const newMentors = `
  <div class="mentors-grid-items">
      <div class="img-wrapper">
        <img class="img-draught" src="${data[i].bgImage}" alt="background image" />
        <img class="img-speaker" src="${data[i].profileImage}"alt="mentor image" />
      </div>
      <div class="mentor-profile">
        <h3>${data[i].name}</h3>
        <p class="profile">${data[i].shortDesc}</p>
        <p class="line"></p>
        <p class="works">${data[i].longDescr}</p>
      </div>
  </div>`;
    const actualMentors = document.createElement('div');
    actualMentors.innerHTML = newMentors;
    grid.appendChild(actualMentors);
  }
}

function screeSizes() {
  if (window.innerWidth < 768) {
    mentorsData2();
  } else if (window.innerWidth > 768) {
    mentorsData();
  }
}

screeSizes();