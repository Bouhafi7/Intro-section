let featuresBtn = document.querySelector('.features-menu');
let companyBtn = document.querySelector('.company-menu');
let featuresMenu = document.querySelector('.features-list');
let companyMenu = document.querySelector('.company-list');
let featuresIcon = document.querySelector('.features-menu > i');
let companyIcon = document.querySelector('.company-menu > i');


featuresBtn.addEventListener('click', () => {
    featuresMenu.classList.toggle('active');
    featuresIcon.classList.toggle('active');
});

companyBtn.addEventListener('click', () => {
    companyMenu.classList.toggle('active');
    companyIcon.classList.toggle('active');
});


let mobileMenu = document.querySelector('.menu-icon');
let holeMenu = document.querySelector('.menu-btns');
let closeMobileMenu = document.querySelector('.close');
let overlay = document.querySelector('.overlay');

mobileMenu.addEventListener('click', () => {
    holeMenu.classList.add('active');
    overlay.classList.add('active');
});

closeMobileMenu.addEventListener('click', () => {
    holeMenu.classList.remove('active');
    overlay.classList.remove('active');
});

