//This code changes the background color on scrolling
var navbar= document.getElementById("navbar");
var lastScrollTop= 0;
window.addEventListener("scroll",scrolingBackgroundEffect)
function scrolingBackgroundEffect(){
    var scrollTop= window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        navbar.style.background="black";
        navbar.style.opacity=1;
    }
    else{
        navbar.style.background="violet";
        navbar.style.opacity=0.6;
    }
    lastScrollTop=scrollTop;
}
