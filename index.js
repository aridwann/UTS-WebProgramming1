const mainSection = document.getElementById("main");
const navSection = document.getElementById("nav");

init();

function init() {
  mainSection.innerHTML = welcomeContent;
  navSection.innerHTML = navAwal;
}

function replaceMain(htmlContent) {
  mainSection.innerHTML = htmlContent;
}

function login() {
  const form = document.getElementById("form");
  if (form.checkValidity()) {
    event.preventDefault();
    const uname = document.getElementById("login_uname").value;
    const pw = document.getElementById("login_pw").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (uname == user.uname && pw == user.pw) {
      Swal.fire("Login successfully!");
      navSection.innerHTML = navSudahLogin;
      mainSection.innerHTML = homeContent;
    } else {
      Swal.fire("Cannot find account!");
    }
  }
}

function logout() {
  Swal.fire({
    title: "Do you want to logout?",
    showCancelButton: true,
    confirmButtonText: "Yes",
  }).then((result) => {
    if (result.isConfirmed) {
      navSection.innerHTML = navAwal;
      mainSection.innerHTML = loginContent;
    }
  });
}

function register() {
  const form = document.getElementById("form");
  if (form.checkValidity()) {
    event.preventDefault();
    const uname = document.getElementById("reg_uname").value;
    const email = document.getElementById("reg_email").value;
    const pw = document.getElementById("reg_pw").value;

    const user = {
      uname,
      email,
      pw,
    };

    localStorage.setItem("user", JSON.stringify(user));
    Swal.fire("User account created!");
    mainSection.innerHTML = loginContent;
  }
}
