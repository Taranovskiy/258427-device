var link_catalog = document.querySelector(".catalog-menu-btn");
var menu_catalog = document.querySelector(".catalog-menu");
var catalog_overlay = document.querySelector(".catalog-overlay");
var body = document.querySelector("body");

link_catalog.addEventListener("mouseover", function(event) {
  event.preventDefault();
  menu_catalog.classList.add("catalog-menu-show");
  catalog_overlay.classList.add("catalog-overlay--show");
});

link_catalog.addEventListener("click", function(event) {
  event.preventDefault();
  if (menu_catalog.classList.contains("catalog-menu-show")) {
    menu_catalog.classList.remove("catalog-menu-show");
    catalog_overlay.classList.remove("catalog-overlay--show");
  }
});

body.addEventListener("click", function(event) {
  if (menu_catalog.classList.contains("catalog-menu-show")) {
    menu_catalog.classList.remove("catalog-menu-show");
    catalog_overlay.classList.remove("catalog-overlay--show");
  }

});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (menu_catalog.classList.contains("catalog-menu-show")) {
      menu_catalog.classList.remove("catalog-menu-show");
      catalog_overlay.classList.remove("catalog-overlay--show");
    }
  }
});
