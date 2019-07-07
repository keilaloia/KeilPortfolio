window.onscroll = function () {
    stickySwap();
};
var headerBar = document.getElementById("links");
var sticky = headerBar.offsetTop;
function stickySwap() {

    if (window.scrollY > sticky) {
        // headerBar.classList.add("sticky");
        headerBar.style.position = "fixed";
        headerBar.style.top = "0";

    }
    else {
        headerBar.style.position = "absolute";
        headerBar.style.bottom = "0";
        headerBar.style.top = "";


    }
}

var section = document.getElementsByClassName("section-holder");
var cur = 0;
section[cur].classList.add("pactive");

for (let i = 0; i < section.length; i++) {
    section[i].addEventListener("click", function() {
            section[cur].classList.remove("pactive");
            section[cur].classList.remove("animated");
            section[cur].classList.remove("bounceIn");
            section[cur].classList.remove("fast");
            cur = i;    
            
            section[cur].classList.add("animated");
            section[cur].classList.add("bounceIn");
            section[cur].classList.add("fast");
            section[cur].classList.add("pactive");  
    });
    
    
}



