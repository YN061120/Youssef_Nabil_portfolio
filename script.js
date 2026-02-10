const initialViewportWidth = window.innerWidth;
window.addEventListener('scroll', function () {
  const navlinks = document.querySelector('.nav-links');
  const isSmallScreen = this.window.matchMedia('(max-width:1360px)').matches;
  if (isSmallScreen) {
    navlinks.style.cssText = '';
    return;
  }

  const maxLeftPercent = 81;
  const maxLeft = initialViewportWidth * (maxLeftPercent / 100);
  if (this.window.scrollY > 100) {
    navlinks.style.fontWeight = 'bolder';
    navlinks.style.display = 'flex';
    navlinks.style.flexDirection = 'column';
    navlinks.style.alignItems = 'flex-start';
    const shift = window.scrollY * 5;
    const clamped = Math.max(maxLeft, Math.min(shift, 0));
    navlinks.style.transform = `translateX(${clamped}px)`;
    navlinks.style.position = 'fixed';
    navlinks.style.gap = '0.5rem';
    navlinks.style.backgroundColor = 'rgba(2, 7, 138, 0.392)';
    navlinks.style.borderRadius = '1rem';
    navlinks.style.padding = '0.5rem';
  }
  if (this.window.scrollY < 100) {
    navlinks.style.cssText = '';
  }
});


function updateNavPosition() {
  const topSection = document.getElementById('top');
  const navlinks = document.querySelector('.nav-links');
  if (!topSection || !navlinks) return;

  const isSmall = window.innerWidth < 950;
  const topOutOfView = topSection.getBoundingClientRect().bottom <= 0;

  navlinks.classList.toggle('is-bottom-bar', isSmall && topOutOfView);
}

window.addEventListener('scroll', updateNavPosition);
window.addEventListener('resize', updateNavPosition);
updateNavPosition();

// JavaScript
// removed unused function

const images = [
  'images/IMG-20250812-WA0026.jpg',
  'images/IMG-20250812-WA0027.jpg',
  'images/IMG-20250812-WA0028.jpg',
];
let current_index = 0;

const slide = document.getElementById('slide');
const previousbtn = document.getElementById('previous');
const nextbtn = document.getElementById('next');

function showImage(index) {
  slide.src = images[index]; // change the source of the image
}

previousbtn.addEventListener('click', () => {
  current_index = (current_index - 1 + images.length) % images.length;
  showImage(current_index);
});

nextbtn.addEventListener('click', () => {
  current_index = (current_index + 1) % images.length;
  showImage(current_index);
});

// successfull sumbition when sumbmit the message

// make a new paragraph that has specific features and disappears after some time like 3 or 5 seconds

document.getElementById('myform').addEventListener('submit', function (event) {
  event.preventDefault();

  if (document.getElementById('submit-msg')) return;

  const msg = document.createElement('p');
  msg.id = 'submit-msg';
  msg.textContent = 'Your message Has Been Submitted Successfully';
  console.log(msg.textContent); // check point and show that the action has been taken
  msg.style.color = 'red';
  msg.style.display = 'block';
  msg.style.fontSize = '1rem'
  msg.style.fontWeight = 'bold';
  msg.style.textAlign = 'center';
  msg.style.margin = '1rem auto auto';
  msg.style.maxWidth = '450px';
  // styling section


  this.appendChild(msg); // this referes to my form the event listener is attached to it
  // appendChild adds the paragraph as a child node to the form at the end after the submit button

  let info = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('Message').value,
  };

  console.log(info);
  setTimeout(() => {
    msg.remove();
    alert(
      'Thank You ' +
        info.name +
        '.\nYour Message Has Been Submitted Successfully. \nOur customer services will call you back if needed.'
    );
  }, 3000); // remove message, then show alert
});

// output what have been submitted to the console
// we need to get the name of the user

// we need to get the massage of the user and put them togither in object in array of objects

// and alert Thank you + name(input.value)

// make another website page to make the calculator app

// in the calculator website i can do a history using array properitys push unshift
// we can make a clear all botton which refreshes the whole web and clear history and every thing
// Temporary fix: removed refresh-on-resize logic




