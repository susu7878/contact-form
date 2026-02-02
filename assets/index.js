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

// submitBTN.addEventListener("click", function (e) {
//   e.preventDefault();

//   allInput.forEach((input) => {
//     const parent = input.parentElement;
//     const error = parent.querySelector(".error");
//     if (!error) return;

//     if (input.type === "checkbox") {
//       if (!input.checked) {
//         error.style.display = "block";
//       } else {
//         error.style.display = "none";
//       }
//     } else {
//       if (input.value.trim() === "") {
//         error.style.display = "block";
//       } else {
//         error.style.display = "none";
//       }
//     }
//   });
// });

// =============================================================================
// const allInput = document.querySelectorAll("input");
// const submit = document.querySelector(".submit");

// submit.addEventListener("click", function (e) {
//   e.preventDefault();

//   allInput.forEach((input) => {
//     const parent = input.parentElement;
//     const error = parent.querySelector(".error");

//     if (!error) return; // بعضی inputها اصلاً error ندارن

//     if (input.value.trim() === "") {
//       error.style.display = "block";
//     } else {
//       error.style.display = "none";
//     }
//   });
// });
// =======================================
// sir arefy
// const form = document.querySelector("form");
// const fields = document.querySelectorAll('input[type="text"], textarea');

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let hasError = false;

//   fields.forEach((field) => {
//     const parent = field.parentElement;

//     // remove old error if exists
//     const oldError = parent.querySelector(".error");
//     if (oldError) oldError.remove();

//     if (field.value.trim() === "") {
//       hasError = true;

//       parent.insertAdjacentHTML(
//         "beforeend",
//         <p class="error">این فیلد باید پر شود</p>
//       );
//     }
//   });

//   if (!hasError) {
//     alert("فرم با موفقیت ارسال شد 🎉");
//     form.reset();
//   }
// });

// AI ANSWEAR
// const form = document.querySelector("form");
// const fields = document.querySelectorAll('input[type="text"], textarea');

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let hasError = false;

//   fields.forEach((field) => {
//     const parent = field.parentElement;

//     const oldError = parent.querySelector(".error");
//     if (oldError) oldError.remove();

//     if (field.value.trim() === "") {
//       hasError = true;
//       const p = document.createElement("p");
//       p.className = "error";
//       p.innerText = "این فیلد باید پر شود";
//       parent.appendChild(p);
//     }
//   });

//   if (!hasError) {
//     alert("فرم با موفقیت ارسال شد 🎉");
//     form.reset();
//   }
// });
