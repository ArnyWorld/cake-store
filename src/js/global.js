
//listeners
window.addEventListener("DOMContentLoaded",()=>{
    let icon = document.querySelector('.navigation__icon');
    let navBar = document.querySelector('.navigation__group');
    let copyText = document.querySelector('.copy');
    let goTop = document.querySelector(".goTop");
    let year = new Date();
    let navigation = document.querySelector('.navigation');
    let body = document.querySelector('body');

    icon.addEventListener("click",showNavBar)
    goTop.addEventListener("click",topFunction);
    window.addEventListener('scroll',()=>{
        const scrollPX = window.scrollY;
        //console.log(scrollPX);
        if(scrollPX > 200){
            goTop.style.display="flex";      
        }else{
            goTop.style.display="none";
        }
    });


    copyText.innerText = `Exquissitoo copyright - ${year.getFullYear()}`;

    function showNavBar(){
        navBar.classList.toggle("navigation__group--active");
        navigation.classList.toggle("navigation--active");
        body.classList.toggle("overflow");
    }
    function topFunction(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

});