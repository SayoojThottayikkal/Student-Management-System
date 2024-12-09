function login() {
  var usnm = document.getElementById("username1").value;
  var pswrd = document.getElementById("password1").value;
  const message = document.getElementsByClassName("msg");
  if (usnm == "admin" && pswrd == "password123") {
    window.location.href = "/pages/list.html";
    return false;
  } else {
    alert("Invalid Username or Password");
  }
  console.log(login);
}

function added() {
  let studentsList = JSON.parse(localStorage.getItem("student_list")) || [];

  const task1 = document.getElementById("Target").value;
  const task2 = document.getElementById("myselect").value;
  const task3 = document.getElementById("Target2").value;
  const task4 = document.getElementById("Target3").value;

  const newStudent = { name: task1, class: task2, grade: task3, phone: task4 };
  studentsList.push(newStudent);

  localStorage.setItem("student_list", JSON.stringify(studentsList));

  window.location.href = "/pages/list.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const inputlist = document.getElementById("tableinput");

  if (inputlist) {
    let studentsList = JSON.parse(localStorage.getItem("student_list")) || [];

    inputlist.innerHTML = `
      <table >
        <thead >
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Grade</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${studentsList
            .map(
              (list, index) => `
              <tr class="main">
                <td>${list.name}</td>
                <td>${list.class}</td>
                <td>${list.grade}</td>
                <td>${list.phone}</td>
                <td>
                  <button class="del_btn" onclick="del()" data-index="${index}">Delete</button>
                </td>
              </tr>
            `
            )
            .join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">Total</td>
            <td>${studentsList.length}</td>
          </tr>
        </tfoot>
      </table>`;
  }
});

function del() {
  var deld = document.querySelectorAll(".del_btn");
  deld.forEach((delet) => {
    delet.onclick = () => {
      delet.parentElement.parentElement.remove();
    };
  });
}
