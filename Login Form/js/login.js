let getUserData = JSON.parse(localStorage.getItem("all_users"));
let current_user = JSON.parse(localStorage.getItem("current_user"));
window.onload = () => {
  if (current_user !== null) {
    window.location = "home.html";
  }
};
function getLocalStorageData() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (getUserData !== null) {
    for (let i = 0; i <= getUserData.length; i++) {
      if (
        email === getUserData[i]?.email &&
        password === getUserData[i]?.password
      ) {
        let currentUser = {
          email,
          password,
        };
        localStorage.setItem("current_user", JSON.stringify(currentUser));
        swal(
          {
            title: "Congrats!",
            text: "Login Succesfully!",
            type: "success",
          },
          function () {
            window.location.href = "home.html";
          }
        );
        break;
      } else {
        swal({
          title: "Error!",
          text: "Login Credentials are wrong!",
          type: "error",
        });
        break;
      }
    }
  } else {
    swal(
      {
        title: "Error!",
        text: "You are not register please register yourself!",
        type: "error",
      },
      function () {
        window.location.href = "signup.html";
      }
    );
  }
}
