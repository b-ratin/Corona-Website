var items=document.querySelectorAll(".timeline li");
window.addEventListener("scroll", scroll_event);
function scroll_event(){
    for(var i=0;i<items.length;i++){
        if(isElementVisible(items[i])){
            items[i].classList.add("in-view")
        }  
    }
}
function isElementVisible(el){
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 && 
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/* 
el = items[i] (line no. 5)
&& = and in javascript
|| = or in js */ 