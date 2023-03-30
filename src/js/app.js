"use strict";

// mobile menu
let mobileMenu = document.querySelector(".mobile-menu");
let Ulmenu = document.getElementById("menu");

mobileMenu.addEventListener("click", (e) => {
    Ulmenu.classList.toggle("hidden");
});

// dark mode

if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

let darkIcon = document.querySelectorAll(".dark-icon");
let lightIcon = document.querySelectorAll(".light-icon");

for (let i = 0; i < darkIcon.length; i++) {
    darkIcon[i].addEventListener("click", () => {
        localStorage.removeItem("light");
        localStorage.setItem("color-theme", "dark");
        window.location.reload();
    });
}

for (let i = 0; i < lightIcon.length; i++) {
    lightIcon[i].addEventListener("click", () => {
        localStorage.removeItem("dark");
        localStorage.setItem("color-theme", "light");
        window.location.reload();
    });
}

// support chat action

let supportBtn = document.getElementById("support-chat-btn");
let SupportWrapper = document.querySelector(".chat-wrapper");
supportBtn.addEventListener("click", () => {
    SupportWrapper.classList.toggle("hidden");
});