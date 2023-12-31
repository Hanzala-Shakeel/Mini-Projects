let current_user = JSON.parse(localStorage.getItem("current_user"));
window.onload = () => {
  if (current_user !== null) {
    window.location = "home.html";
  }
};
function savedata() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let dateofbirth = document.getElementById("dateofbirth").value;

  if (
    name !== "" &&
    email !== "" &&
    password !== "" &&
    age !== "" &&
    dateofbirth !== ""
  ) {
    let getAllUsers = JSON.parse(localStorage.getItem("all_users"));
    if (getAllUsers !== null) {
      let saveLoginUser = {
        name,
        email,
        password,
        age,
        dateofbirth,
      };
      getAllUsers.push(saveLoginUser);
      localStorage.setItem("all_users", JSON.stringify(getAllUsers));
    } else {
      let saveLoginUser = [
        {
          name,
          email,
          password,
          age,
          dateofbirth,
        },
      ];
      localStorage.setItem("all_users", JSON.stringify(saveLoginUser));
    }

    swal(
      {
        title: "Congrats!",
        text: "Signup Succesfully!",
        type: "success",
      },
      function () {
        window.location.href = "index.html";
      }
    );
  } else {
    swal("Error!", "Please Fill The Empty Form Fields!", "error");
  }
}
