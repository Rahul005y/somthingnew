let card = document.querySelector(".cards");
let windowimg = document.querySelector(".windowimg");




// Right-click → show custom menu
document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Stop default browser menu
    card.style.display = "block";
    card.style.left = e.clientX + "px";
    card.style.top = e.clientY + "px";
});

// Left-click → hide menu
document.addEventListener("click", function () {
    card.style.display = "none";
});



let popup = null;

windowimg.addEventListener("click", function () {

    // Toggle logic
    if (popup) {
        popup.remove();
        popup = null;
        return;
    }

    popup = document.createElement("div");
    popup.classList.add("window-popup");

 
       const icons = [
  "https://cdn-icons-png.flaticon.com/512/1829/1829586.png", 
  "https://cdn-icons-png.flaticon.com/512/2991/2991148.png", 
  "https://cdn-icons-png.flaticon.com/512/2991/2991135.png", 
  "https://cdn-icons-png.flaticon.com/512/733/733585.png" , 
   "https://cdn-icons-png.flaticon.com/512/5977/5977588.png",
  "https://cdn-icons-png.flaticon.com/512/174/174872.png", 
];



    icons.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        popup.appendChild(img);
    });

    document.body.appendChild(popup);

    console.log("Window opened!");
});

document.addEventListener("click", function(){
    popup.classList.remove("window-popup");
})