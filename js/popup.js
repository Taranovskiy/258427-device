var link = document.querySelector(".contacts-block__btn");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-feedback .modal-close-btn");
var userName = popup.querySelector("[name=user-name]");
var mail = popup.querySelector("[name=mail]");
var letter = popup.querySelector("[name=letter]");
var form = popup.querySelector("form");
var storageUserName = localStorage.getItem("user-name");
var storageMail = localStorage.getItem("mail");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("modal-overlay--show");
  if (storageUserName && storageMail) {
    userName.value = storageUserName;
    mail.value = storageMail;
    letter.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay--show");
  popup.classList.remove("modal-feedback--error");
});

overlay.addEventListener("click", function(event) {
  popup.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay--show");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!userName.value || !mail.value || !letter.value) {
    event.preventDefault();
    popup.classList.remove("modal-feedback--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-feedback--error");
  } else {
    localStorage.setItem("user-name", userName.value);
    localStorage.setItem("mail", mail.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay--show");
      popup.classList.remove("modal-feedback--error");
    }
  }
});
