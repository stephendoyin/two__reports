
let modalTriggerBtnTwo = document.querySelector(".js_modal_trigger__btn--two");
let closeBtnTwo = document.querySelector(".modal_contact__close_two");
let subModal = document.querySelector(".sub_modal");
let innerModalTwo = document.querySelector(".contact_modal_inner--two");
subModal.style.height = "1500px";
subModal.style.overflow = "auto";



modalTriggerBtnTwo.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
    toggleModalTwo();

});


closeBtnTwo.addEventListener("click", function () {
    toggleModalTwo();
    document.body.style.height = "unset";
    document.body.style.overflow = "unset";
    document.body.removeAttribute("style");
});


window.addEventListener("click", function (e) {
    if(e.target === innerModalTwo){
        subModal.classList.remove("contact_modal--show");
        document.body.style.height = "unset";
        document.body.style.overflow = "unset";
    }
})


function toggleModalTwo() {
    subModal.classList.toggle("contact_modal--show");
}