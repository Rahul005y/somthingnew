let card = document.querySelector(".cards");

// Right click → show menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // stop default browser menu

    card.style.display = "block";
    card.style.left = e.clientX + "px";
    card.style.top = e.clientY + "px";
});

// Left click → hide menu
document.addEventListener("click", function () {
    card.style.display = "none";
});
