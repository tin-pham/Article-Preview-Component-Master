const button = document.querySelector('.container__footer__icon__share');
const footer = document.querySelector('.container__footer');
const mobileBox = document.querySelector('.container__footer__black__mobile');


const desktopBox = document.querySelector('.container__footer__black__desktop');

const boxPopOut = (box, e) => {
    box.classList.toggle('active');
    e.currentTarget.classList.toggle('active');
}


const mediaQuery = window.matchMedia("(min-width: 1000px)");
button.addEventListener('click', e => {
    if(mediaQuery.matches){
        boxPopOut(desktopBox, e);
        console.log(desktopBox);
    }else{
        boxPopOut(mobileBox, e);
        console.log(mobileBox);
    }
})


//  box.classList.toggle('active');
//         console.log(e.currentTarget);