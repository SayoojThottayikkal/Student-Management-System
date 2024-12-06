function login() {
  var usnm = document.getElementById("username1").value;
  var pswrd = document.getElementById("password1").value;
  const message = document.getElementsByClassName("msg");
  if (usnm == "admin" && pswrd == "password123") {
    window.location.href = "/pages/list.html";
    return false;
  } else {
    // alert("Invalid Username or Password");
    document.write("Invalid Username or Password");
  }
  console.log(login);
}
function added() {
  let studentsList = [];

  const task1 = document.getElementById("Target").value;
  const task2 = document.getElementsByClassName("drop_down").value;
  const task3 = document.getElementById("Target2").value;
  const task4 = document.getElementById("Target3").value;
  const input_list = document.getElementsByClassName("input");
  studentsList.push(task1);
  studentsList.push(task2);
  studentsList.push(task3);
  studentsList.push(task4);

  input_list.innerHTML = studentsList.map((list) => {
    return ` 
              <tr >
                <td>${list}</td>
                <td>${list}</td>
                <td>${list}</td>
                <td>${list}</td>
                <td><button id="del_btn">Delete</button></td>
                 </tr>
              
            
    `;
  });
  console.log(studentsList);
}

function del() {}
function edit() {}
