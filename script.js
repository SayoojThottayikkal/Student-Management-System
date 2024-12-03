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

function added() {
  const adding = document.getElementsByClassName("field").value;
  const input = document.getElementById("input");

  // const name = document.getElementById("name").value;
  // const classe = document.getElementById("classes");
  // const grade = document.getElementById("grade").value;
  // const phone = document.getElementById("phone").value;
  let data = [(Name = ""), (classes = ""), (grade = ""), (phone = "")];

  input.innerHTML = data.map((value) => {
    return `
      
              <tr>
                <td class="Name">${Name.value}</td>
                <td class="classses">${classes.value}</td>
                <td class="Grade">${grade.value}</td>
                <td class="Action">${phone.value}</td>
                <td><button id="del_btn">Delete</button></td>
              </tr>
           
          
    `;
  });
  console.log(data);
}
