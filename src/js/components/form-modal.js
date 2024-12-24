document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("form-modal");
const name = form?.querySelector("form #inputName");
const nameError = form?.querySelector(
  "form #inputName ~ label + span.error"
);

const email = form?.querySelector("form #inputEmail");
const emailError = form?.querySelector(
  "form #inputEmail ~ label + span.error"
);

const phone = form?.querySelector("form #inputPhone");
const phoneError = form?.querySelector(
  "form #inputPhone ~ label + span.error"
);

const message = form?.querySelector("form #inputMessage");
const messageError = form?.querySelector(
  "form #inputMessage ~ label + span.error"
);
const messagePattern = message?.getAttribute("pattern");
const regex = new RegExp(messagePattern);

// console.log("messagePattern = " + regex);
// console.log("Realtime message text = " + message?.textContent);

//Each time a user types something in the input field, check if the form input is valid
//Clear form of any pre-existing help messages
//Reset error message styling to default
//Else show real error message
name?.addEventListener("input", function (event) {
  if (name.validity.valid) {
    nameError.innerHTML = "";
    nameError.className = "error";
  } else {
    showError();
  }
});

email?.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

phone?.addEventListener("input", function (event) {
  if (phone.validity.valid) {
    phoneError.innerHTML = "";
    phoneError.className = "error";
  } else {
    showError();
  }
});

message?.addEventListener("input", function (event) {
  if (message.validity.valid) {
    messageError.innerHTML = "";
    messageError.className = "error";
  } else {
    showError();
  }
});

//Check for errors in real time

//Activate submit button
//Allow form submittal if all input fields are valid
//If not, display error message, and
//cancel default action (send form)
form?.addEventListener("submit", function (event) {

  if (!name.validity.valid) {
    event.preventDefault();
    showError();
  }
  if (!email.validity.valid) {
    event.preventDefault();
    showError();
  }
  if (!phone.validity.valid) {
    event.preventDefault();
    showError();
  }
  if (!message.validity.valid) {
    event.preventDefault();
    showError();
  }
});

//Cycle through possible errors to show appropriate error message
function showError() {
  if (name.validity.valueMissing) {
    nameError.textContent = "Введите пожалуйста Ваше имя";
  } else if (name.validity.patternMismatch) {
    nameError.textContent = "Введите Ваше имя и фамилию. Например: Иван Иванов";
  } else {
    nameError.className = "error active";
  }

  if (email.validity.valueMissing) {
    emailError.textContent = "Введите пожалуйста Ваш email";
  } else if (email.validity.patternMismatch) {
    emailError.textContent = "Введите правильный email: me@yandex.ru";
  } else {
    emailError.className = "error active";
  }

  if (phone.validity.valueMissing) {
    phoneError.textContent = "Введите пожалуйста Ваш телефон";
  } else if (phone.validity.patternMismatch) {
    phoneError.textContent =
      "Number must be: (555) 555-5555, 555.555.5555, or 55555555555";
  } else {
    phoneError.className = "error active";
  }

  if (message.validity.valueMissing) {
    messageError.textContent = "Введите пожалуйста Ваше сообщение";
  } else if (message.validity.patternMismatch) {
    messageError = "Phone numbers, email addresses or URL's are not allowed.";
  } else if (message.validity.tooLong) {
    messageError = "Messages cannot exceed 500 characters including spaces.";
  } else {
    messageError.className = "error active";
  }
}
});
