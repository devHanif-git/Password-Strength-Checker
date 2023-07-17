const Strength = (password) => {
  let i = 0;
  password.length > 6 && i++;
  password.length >= 10 && i++;

  /[A-Z]/.test(password) && i++;
  /[0-9]/.test(password) && i++;
  /[A-Za-z0-8]/.test(password) && i++;

  return i;
};

document.addEventListener("keyup", function (e) {
  let container = document.querySelector(".container");
  let password = document.querySelector("#YourPassword").value;
  let strength = Strength(password);

  if (strength == 0) {
    container.classList.remove("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength <= 2) {
    container.classList.add("weak");
    container.classList.remove("moderate");
    container.classList.remove("strong");
  } else if (strength >= 2 && strength <= 4) {
    container.classList.remove("weak");
    container.classList.add("moderate");
    container.classList.remove("strong");
  } else {
    container.classList.remove("weak");
    container.classList.remove("weak");
    container.classList.add("strong");
  }
});

let show = document.querySelector(".show");
let password = document.querySelector("#YourPassword");

show.onclick = () => {
  if (password.type === "password") {
    password.setAttribute("type", "text");
    show.classList.add("hide");
  } else {
    password.setAttribute("type", "password");
    show.classList.remove("hide");
  }
};
