const updatesItems = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more!",
];

function createList() {
  const ul = document.getElementById("list");

  //map through updates
  updatesItems.forEach((updates) => {
    const list = document.createElement("li");
    list.textContent = updates;
    ul.appendChild(list);
  });
}

createList();

//form  validation
// const form = document.getElementById("emailForm");

// function verification(event) {
//   event.preventDefault();

//   const emailInput = document.getElementById("email");

//   //check if email is valid
//   if (emailInput.trim() === "") {
//     alert("Email is required");
//     return;
//   }
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(emailInput.value)) {
//     alert("Valid email required");
//     // emailInput.focus();
//     return;
//   }

//   const redirect = document.getElementById("submit");
//   redirect.addEventListener("click", function () {
//     window.location.href = "./confirm.html";
//   });
//   const backToPrevious = document.getElementById("dismiss");
//   backToPrevious.addEventListener("click", function () {
//     window.history.back();
//   });
//   return;
// }

// form.addEventListener("submit", verification);

//form validation

const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateEmail();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  // inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  // inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email.toLowerCase()));
};

const validateEmail = () => {
  const emailInputValue = emailInput.value.trim();

  if (emailInputValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailInputValue)) {
    setError(email, "Valid email is required");
  } else {
    window.location.href = `confirm.html?email=${encodeURIComponent(
      emailInputValue
    )}`;
  }
  console.log(emailInputValue);
};
