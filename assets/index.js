const form = document.getElementById("contactForm");
const success = document.querySelector(".success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const inputs = form.querySelectorAll("input, textarea");
  const radioChecked = form.querySelector(
    "input[type='radio'][name='query']:checked"
  );

  inputs.forEach((input) => {
    let parent = input.parentElement;
    let error = parent.querySelector(".error");

    if (input.type === "radio") {
      parent = input.closest(".query-type");
      error = parent.querySelector(".error");
    }

    if (!error) return;

    const showError = () => (error.style.display = "block");
    const hideError = () => (error.style.display = "none");

    if (input.type === "checkbox") {
      if (!input.checked) {
        showError();
        isValid = false;
      } else hideError();
    } else if (input.type === "email") {
      if (!input.checkValidity()) {
        showError();
        isValid = false;
      } else hideError();
    } else if (input.type === "radio") {
      if (!radioChecked) {
        showError();
        isValid = false;
      } else hideError();
    } else {
      if (input.value.trim() === "") {
        showError();
        isValid = false;
      } else hideError();
    }
  });

  if (isValid) {
    success.style.display = "block";
    form.reset();
  } else {
    success.style.display = "none";
  }
});
