// DOM Elements

const body = document.body;
const swt = document.getElementById("switch");
const imgLogo = document.getElementById("logo");

//Other Elements

const darkLogo = "logo.png";
const whiteLogo = "logoWhite.png";

// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme === "dark") {
  body.classList.add(theme);
  imgLogo.src = whiteLogo;  
  swt.checked = true;
}

// Switch Event Handlers
swt.onclick = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");

    imgLogo.src = darkLogo;
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");

    imgLogo.src = whiteLogo;
  }
};
