// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika menu di klik
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menghilangkan nav
const a = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if (!a.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})