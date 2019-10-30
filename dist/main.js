const popupMenu = document.getElementById("popup-menu");
const menuButtons = document.getElementsByClassName("menu-item");

document.querySelector("#menu-button").addEventListener("click", () => {
  popupMenu.style.display = "block";
  TweenLite.to(".menu-items", 0, { x: "15%" });
  TweenLite.to(popupMenu, 0, { opacity: 1 });
  TweenLite.from(popupMenu, 0.5, { opacity: 0 });
  TweenLite.from(".menu-items", 0.9, { ease: Power4.easeOut, x: 300 });
});
document.querySelector("#popup-menu-button").addEventListener("click", () => {
  closePopupMenu();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closePopupMenu();
  }
});
function closePopupMenu() {
  TweenLite.to(popupMenu, 0.3, { opacity: 0 });
  TweenLite.to(".menu-items", 0.3, { x: 300 });
  TweenLite.delayedCall(0.3, () => (popupMenu.style.display = "none"));
}

for (i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener("mouseenter", changeBackgroundColor);
  menuButtons[i].addEventListener("mouseleave", () => {
    popupMenu.style.backgroundBlendMode = "lighten";
    popupMenu.style.backgroundColor = "#0d1a28";
  });
}

function changeBackgroundColor() {
  popupMenu.style.backgroundBlendMode = "screen";
  popupMenu.style.backgroundColor = window
    .getComputedStyle(this)
    .getPropertyValue("background-color");
}
