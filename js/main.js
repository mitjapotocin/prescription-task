const popupMenu = document.getElementById("popup-menu");
const menuButtons = document.getElementsByClassName("menu-item");

document.querySelector("#menu-button").addEventListener("click", () => {
  toggleMenu();
});
document.querySelector("#popup-menu-button").addEventListener("click", () => {
  toggleMenu();
});

function toggleMenu() {
  popupMenu.style.display = popupMenu.style.display === "none" ? "block" : "none";
}


for (i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("mouseenter", i => {
    popupMenu.style.backgroundBlendMode = "screen";
    popupMenu.style.backgroundColor = window
      .getComputedStyle(i.path[0])
      .getPropertyValue("background-color");
  });
  menuButtons[i].addEventListener("mouseleave", i => {
    popupMenu.style.backgroundBlendMode = "lighten";
    popupMenu.style.backgroundColor = "#0d1a28";
  });
}
