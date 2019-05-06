
let fixedTopNav = document.querySelector(".home__header_nav");

let screenPos;

function setPos(params) {
    if(screen.availWidth <= 640){
        screenPos = screen.height - 100;
    }else{
        screenPos = screen.availHeight * 0.6;
    }
}

setPos();

window.addEventListener("resize", function(){
    setPos();
})

window.addEventListener("scroll", function () {

    console.log(window.scrollY);

    if (window.scrollY >= screenPos) {
        fixedTopNav.classList.remove("fixed");

    } else if (window.scrollY < screenPos) {
        fixedTopNav.classList.add("fixed")
    }

});


if (window.scrollY < 640) {
    fixedTopNav.classList.add("fixed")
}