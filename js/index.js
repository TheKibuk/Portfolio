const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBnImg = document.querySelector('#nav-btnImg');

navBtn.addEventListener('click', () =>{
    if(nav.classList.toggle('open')){
        navBnImg.src = "./img/icons/nav-close.svg"
    }else{
        navBnImg.src = "./img/icons/nav-open.svg"
    }
})