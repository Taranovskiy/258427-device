var mapOpen = document.querySelector(".contacts-block__map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map .modal-close-btn");


mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("modal-overlay--show");
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.remove("modal-overlay--show");
  mapPopup.classList.remove("modal-show");
});

overlay.addEventListener("click", function(event) {
  mapPopup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      overlay.classList.remove("modal-overlay--show");
      mapPopup.classList.remove("modal-show");
    }
  }
});
