// Contact form validation
// checks each field and shows error/success messages

var form = document.getElementById("contactForm");

var nameInput = document.getElementById("fullName");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var genderInput = document.getElementById("gender");
var messageInput = document.getElementById("message");

// validate name
function checkName() {
  if (nameInput.value.trim().length < 2) {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    document.getElementById("nameError").style.display = "block";
    return false;
  } else {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    document.getElementById("nameError").style.display = "none";
    return true;
  }
}

// validate email using a simple regex pattern
function checkEmail() {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!pattern.test(emailInput.value.trim())) {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    document.getElementById("emailError").style.display = "block";
    return false;
  } else {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    document.getElementById("emailError").style.display = "none";
    return true;
  }
}

// validate phone - digits only, at least 8 numbers
function checkPhone() {
  var pattern = /^[0-9]{8,}$/;
  if (!pattern.test(phoneInput.value.trim())) {
    phoneInput.classList.add("is-invalid");
    phoneInput.classList.remove("is-valid");
    document.getElementById("phoneError").style.display = "block";
    return false;
  } else {
    phoneInput.classList.remove("is-invalid");
    phoneInput.classList.add("is-valid");
    document.getElementById("phoneError").style.display = "none";
    return true;
  }
}

// validate gender select
function checkGender() {
  if (genderInput.value === "") {
    genderInput.classList.add("is-invalid");
    genderInput.classList.remove("is-valid");
    document.getElementById("genderError").style.display = "block";
    return false;
  } else {
    genderInput.classList.remove("is-invalid");
    genderInput.classList.add("is-valid");
    document.getElementById("genderError").style.display = "none";
    return true;
  }
}

// validate message
function checkMessage() {
  if (messageInput.value.trim().length < 10) {
    messageInput.classList.add("is-invalid");
    messageInput.classList.remove("is-valid");
    document.getElementById("messageError").style.display = "block";
    return false;
  } else {
    messageInput.classList.remove("is-invalid");
    messageInput.classList.add("is-valid");
    document.getElementById("messageError").style.display = "none";
    return true;
  }
}

// run checks when user leaves each field
nameInput.addEventListener("blur", checkName);
emailInput.addEventListener("blur", checkEmail);
phoneInput.addEventListener("blur", checkPhone);
genderInput.addEventListener("change", checkGender);
messageInput.addEventListener("blur", checkMessage);

// run all checks on submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  var nameOk = checkName();
  var emailOk = checkEmail();
  var phoneOk = checkPhone();
  var genderOk = checkGender();
  var messageOk = checkMessage();

  // if all checks pass, show success message and reset form
  if (nameOk && emailOk && phoneOk && genderOk && messageOk) {
    document.getElementById("formSuccessMsg").style.display = "block";
    form.reset();
    
    // remove valid styling after reset
    var inputs = form.querySelectorAll(".is-valid");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("is-valid");
    }
  } else {
    document.getElementById("formSuccessMsg").style.display = "none";
  }
});
