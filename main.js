let bottoneHamburger = document.querySelector("i.fa-bars");

let bottoneClose = document.querySelector("i.fa-times");

bottoneHamburger.addEventListener('click', function () {
    let hamburger = document.querySelector("div.hamburger-menu")
    console.log(hamburger);
    hamburger.classList.add("active");
})

bottoneClose.addEventListener('click', function () {
    let hamburger = document.querySelector("div.hamburger-menu")
    console.log(hamburger);
    hamburger.classList.remove("active");
})