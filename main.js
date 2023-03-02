const navBar = document.querySelector('.nav_bar');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', () => {
    openBtn.style.display = "none";
    closeBtn.style.display = 'flex';
    navBar.style.opacity = '1';
});

closeBtn.addEventListener('click', () => {
    navBar.style.opacity = '0';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'flex';
})