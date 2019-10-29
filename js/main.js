const popupMenu = document.getElementById("popup-menu");
const menuButtons = document.getElementsByClassName("menu-item");

document.querySelector("#menu-button").addEventListener("click", () => {
  toggleMenu();
  TweenLite.to(".menu-items", 0, { x: "15%" });
  TweenLite.to(popupMenu, 0, { opacity: 1 });
  TweenLite.from(popupMenu, 0.5, { opacity: 0 });
  TweenLite.from(".menu-items", 0.9, { ease: Power4.easeOut, x: 300 });
});
document.querySelector("#popup-menu-button").addEventListener("click", () => {
  TweenLite.to(popupMenu, 0.2, { opacity: 0 });
  TweenLite.to(".menu-items", 0.2, { x: 300 });
  TweenLite.delayedCall(0.2, toggleMenu);
});

function toggleMenu() {
  popupMenu.style.display =
    popupMenu.style.display === "none" ? "block" : "none";
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
