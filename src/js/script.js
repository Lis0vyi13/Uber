const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const preloader = document.querySelector('#preloader');
window.onload = () => {
  preloader.classList.add('hidden');
  body.classList.remove('lock');
  setTimeout(() => {
    preloader.remove();
  }, 500);
};

document.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.closest('.burger')) {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
    return;
  } else if (e.target.closest('.menu')) {
    return;
  } else {
    burger.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
  }
});
