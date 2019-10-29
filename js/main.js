document.querySelector("#menu-button").addEventListener("click", () => {
  console.log("click");
});

const popupMenu = document.getElementById("popup-menu");
const menuButtons = document.getElementsByClassName("menu-item");
for (i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("mouseenter", i => {
    console.log(i);
    popupMenu.style.backgroundColor = window
      .getComputedStyle(i.path[0])
      .getPropertyValue("background-color");
  });
  menuButtons[i].addEventListener("mouseleave", i => {
    popupMenu.style.backgroundColor = "#0d1a28";
  });
}
