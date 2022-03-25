let bottoneHamburger = document.querySelector("i.fa-bars");

let bottoneClose = document.querySelector("i.fa-times");

bottoneHamburger.addEventListener('click', function () {
    let hamburgerOpen = document.querySelector("div.hamburger-menu")
    hamburgerOpen.classList.add("active");
})

bottoneClose.addEventListener('click', function () {
    let hamburgerClose = document.querySelector("div.hamburger-menu")
    hamburgerClose.classList.remove("active");
})