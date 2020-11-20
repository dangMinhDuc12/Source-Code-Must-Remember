let timeSheet = [
  {
    project: "Learn Front End",
    task: "Learn HTML",
    timeSpent: 6,
  },
  {
    project: "Learn Front End",
    task: "Learn CSS",
    timeSpent: 8,
  },
  {
    project: "Learn Front End",
    task: "Learn Variables and Data types",
    timeSpent: 6,
  },
  {
    project: "Learn git",
    task: "Learn git basics",
    timeSpent: 2,
  },
];
// console.log(timeSheet);
//Goi bang
let table = document.getElementById("table");
// console.log([table]);

//Goi body trong table
let body = table.children[1];
// console.log(body);

//Ham in ra man hinh du lieu timeSheet
function inra(data) {
  body.innerHTML = ""; //reset lai the body khong thi no se in chong len nhau;
  // for (let i = 0; i < timeSheet.length; i++) {
  //   body.innerHTML += `<tr id = "${i}">
  //                           <td>${timeSheet[i].project}</td>
  //                           <td>${timeSheet[i].task}</td>
  //                           <td>${timeSheet[i].timeSpent}</td>
  //                           <td><button class = "update btn btn-success">Sửa lại</button></td>
  //                           <td><button class = "delete btn btn-danger">Xóa khỏi bảng</button></td>
  //                         </tr>`;
  // }

  // cach 2
  let timeSheetWithMap = timeSheet.map(function (value, index) {
    return `<tr id = "${index}">
              <td>${value.project}</td>
              <td>${value.task}</td>
              <td>${value.timeSpent}</td>
              <td><button class = "update btn btn-success">Sửa lại</button></td>
              <td><button class = "delete btn btn-danger">Xóa khỏi bảng</button></td>
            </tr>`;
  });
  let timeSheetRender = timeSheetWithMap.join("");
  body.innerHTML = timeSheetRender;
}

//in ra lan dau tien
inra(timeSheet);

// Lay ra nut add va 3 input
let add = document.getElementById("add");
let project = document.getElementById("project");
let task = document.getElementById("task");
let time = document.getElementById("time");

//Gan su kien cho nut add
add.onclick = function () {
  let newTimeSheet = {
    project: project.value,
    task: task.value,
    timeSpent: time.value,
  };
  timeSheet.push(newTimeSheet);
  inra(timeSheet);
};

//Lay ra nut clear
let clear = document.getElementById("clear");

//Gan su kien cho nut clear
clear.onclick = function () {
  project.value = "";
  task.value = "";
  time.value = "";
};

//Gan su kien cho body sau do target den delete va update trong do
let capnhat = document.getElementById("capnhat");
let index1;
body.onclick = function (e) {
  // console.log(e.target.className);
  if (e.target.classList.contains("delete")) {
    let index = e.target.parentElement.parentElement.id;
    // console.log(index);
    timeSheet.splice(index, 1);
    inra(timeSheet);
  }
  if (e.target.classList.contains("update")) {
    index1 = e.target.parentElement.parentElement.id;
    project.value = timeSheet[index1].project;
    task.value = timeSheet[index1].task;
    time.value = timeSheet[index1].timeSpent;
    add.classList.add("an");
    capnhat.classList.remove("an");
  }
};

//gan su kien cho nut cap nhat
capnhat.onclick = function (e) {
  timeSheet[index1].project = project.value;
  timeSheet[index1].task = task.value;
  timeSheet[index1].timeSpent = time.value;
  inra(timeSheet);
  add.classList.remove("an");
  capnhat.classList.add("an");
};
