const allInput = document.querySelectorAll("input, textarea");
const submitBTN = document.querySelector(".submit");
const succed = document.querySelector(".succed");

submitBTN.addEventListener("click", function (e) {
  e.preventDefault();

  let isValid = true;

  const checked = document.querySelector(
    "input[type='radio'][name='queryType']:checked"
  );

  allInput.forEach((input) => {
    let parent = input.parentElement;
    let error = parent.querySelector(".error");

    if (input.type === "radio") {
      parent = input.closest(".Quary-type");
      error = parent.querySelector(".error");
    }

    if (!error) return;

    const displayErr = () => (error.style.display = "block");
    const hideErr = () => (error.style.display = "none");

    if (input.type === "checkbox") {
      if (!input.checked) {
        displayErr();
        isValid = false;
      } else hideErr();
    } else if (input.type === "email") {
      if (!input.checkValidity()) {
        displayErr();
        isValid = false;
      } else hideErr();
    } else if (input.type === "radio") {
      if (!checked) {
        displayErr();
        isValid = false;
      } else hideErr();
    } else {
      if (input.value.trim() === "") {
        displayErr();
        isValid = false;
      } else hideErr();
    }
  });

  if (isValid) {
    succed.style.display = "block";
  } else {
    succed.style.display = "none";
  }
});
