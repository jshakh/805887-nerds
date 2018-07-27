var link = document.querySelector(".button-write-us");

var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");

var login = popup.querySelector("[name=login]");


link.addEventListener("click", function (evt) {   
	evt.preventDefault();				
	console.log("Click on write us buton");
	popup.classList.remove("visually-hidden"); 			
	login.focus(); 							
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("visually-hidden");
});


function validateForm() {
    var x = document.forms["contact-form"]["name"].value;
    if (x == "") {
		document.forms["contact-form"]["name"].classList.add("error");
        return false;
    }
} 