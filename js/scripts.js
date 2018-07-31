var link = document.querySelector(".letter-button");
var popup = document.querySelector(".modal-login");   
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var fullname = popup.querySelector("[name=full-name]");
var email = popup.querySelector("[name=email]");
var lettertext = popup.querySelector("[name=letter]");

var isStorageSupport = true;

try {
  storage = localStorage.getItem("fullname");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  fullname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show"); 
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!fullname.value || !email.value || !lettertext.value) {
    evt.preventDefault(); 
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains ("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
  }
});