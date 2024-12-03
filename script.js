function login() {
  var usnm = document.getElementById("username1").value;
  var pswrd = document.getElementById("password1").value;
  if (usnm == "admin" && pswrd == "password123") {
    alert("Login Succesfully");
    window.location.href = "/pages/list.html";
    return false;
  } else {
    alert("Try Again");
  }
  console.log(login);
}
