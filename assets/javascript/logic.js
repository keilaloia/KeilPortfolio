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
var sticker = document.getElementsByClassName("project-sticker");
// var javascript = document.getElementsByClassName("section-holder");
// var csharp = document.getElementsByClassName("section-holder");
// var cplusplus = document.getElementsByClassName("section-holder");


var cur = 0;
section[cur].classList.add("pactive");

for (let i = 0; i < section.length; i++) {
    section[i].addEventListener("click", function () {
        section[cur].classList.remove("pactive");
        section[cur].classList.remove("animated");
        section[cur].classList.remove("bounceIn");
        section[cur].classList.remove("fast");
        cur = i;

        section[cur].classList.add("animated");
        section[cur].classList.add("bounceIn");
        section[cur].classList.add("fast");
        section[cur].classList.add("pactive");


        var first = sticker[0].getBoundingClientRect();
        switch (this.id) {
            case "all":

                for (let i = 0; i < sticker.length; i++) {
                    sticker[i].classList.remove("animated");
                    sticker[i].classList.remove("bounceOut");
                    sticker[i].classList.remove("fast");
                    sticker[i].style.display = "";
                }

                break;
            case "javascript":
                for (let i = 0; i < sticker.length; i++) {
                    if (!sticker[i].classList.contains("javascript"))//if not javascript
                    {
                        sticker[i].classList.add("animated");
                        sticker[i].classList.add("bounceOut");
                        sticker[i].classList.add("fast");
                        sticker[i].style.display = "none"; 

                    }
                    else
                    {

                        sticker[i].classList.remove("animated");
                        sticker[i].classList.remove("bounceOut");
                        sticker[i].classList.remove("fast");
                        sticker[i].style.display = "";
                        // sticker[i].style.transform = "translate(-150px, -300px)";
                        // sticker[i].style.transition= "transform 2s ease-in-out";
                    }

                }

                break;
            case "csharp":
                for (let i = 0; i < sticker.length; i++) {
                    if (!sticker[i].classList.contains("csharp"))
                    {
                        sticker[i].classList.add("animated");
                        sticker[i].classList.add("bounceOut");
                        sticker[i].classList.add("fast");
                        sticker[i].style.display = "none";

                    }
                    else
                    {
                        sticker[i].classList.remove("animated");
                        sticker[i].classList.remove("bounceOut");
                        sticker[i].classList.remove("fast");
                        sticker[i].style.display = "";

                    }
                }

                break;
            case "cplusplus":
                for (let i = 0; i < sticker.length; i++) {
                    if (!sticker[i].classList.contains("cplusplus"))
                    {      
                        sticker[i].classList.add("animated");
                        sticker[i].classList.add("bounceOut");
                        sticker[i].classList.add("fast");                 
                        sticker[i].style.display = "none";
                    }
                    else
                    {
                        sticker[i].classList.remove("animated");
                        sticker[i].classList.remove("bounceOut");
                        sticker[i].classList.remove("fast");
                        sticker[i].style.display = "";

                    }
                }
                break;
            default:
                break;
        }
    });


}



