var openClose = document.querySelector(".write-us-btn"),
    popup = document.querySelector(".modal-content"),
    close = document.querySelector(".modal-content-close"),
    form = popup.querySelector("form"),
    username = popup.querySelector("[name='username']"),
    email = popup.querySelector("[name='e-mail']"),
    letter = popup.querySelector(".letter"),
    storage = localStorage.getItem("username");
openClose.addEventListener("click", function(e) {
    popup.classList.contains("modal-content-show") ? (e.preventDefault(), popup.classList.remove("modal-content-show")) : (e.preventDefault(), popup.classList.remove("modal-error"), popup.classList.add("modal-content-show"), storage ? (username.value = storage, email.focus()) : username.focus())
}), close.addEventListener("click", function(e) {
    e.preventDefault(), popup.classList.remove("modal-content-show")
}), window.addEventListener("keydown", function(e) {
    27 == e.keyCode && popup.classList.contains("modal-content-show") && popup.classList.remove("modal-content-show")
}), form.addEventListener("submit", function(e) {
    username.value && email.value && letter.value ? (localStorage.setItem("username", username.value), popup.classList.remove("modal-content-show")) : (e.preventDefault(), popup.classList.add("modal-error"))
});