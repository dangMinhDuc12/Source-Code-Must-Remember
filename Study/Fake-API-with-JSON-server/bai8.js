let menuApi = "http://localhost:3000/menu";
let indexUpdate;
let ul = document.getElementById("menu");

//Function chay project
function start() {
  getMenu(renderMenu);
  create();

  handleUpdate();
  btnUpdateAndDelete();
}

start();

//Function get API cua Menu
function getMenu(callback) {
  fetch(menuApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

//Function render ra man hinh

function renderMenu(menu) {
  let htmls = menu.map(function (m, index) {
    return `<li id = "${m.id}"><span class = "content">${m.name}</span><button class = "delete">Xoa</button><button  class = "update">Update</button></li>`;
  });
  let html = htmls.join("");
  ul.innerHTML = html;
}

//Function them mon an
function create() {
  let button = document.getElementById("button");
  let input = document.getElementById("input");
  button.onclick = function () {
    let name = input.value;
    let formMenu = {
      name: name,
    };
    creatMenu(formMenu, function () {
      getMenu(renderMenu);
    });
  };
}
//Function xoa
function deleteEvent(id) {
  deleteMenu(id, function () {
    getMenu(renderMenu);
  });
}

//Function gui yeu cau xoa mon an
function deleteMenu(id, callback) {
  let object = {
    method: "DELETE",

    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  fetch(menuApi + "/" + id, object)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

//Function gui yeu cau them mon an
function creatMenu(data, callback) {
  let object = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  fetch(menuApi, object)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

// Function render update
function renderUpdate(id) {
  let inputUpdate = document.getElementById("inputUpdate");
  let li = document.getElementById(id);
  inputUpdate.value = li.children[0].textContent;
  indexUpdate = id;
}

//Function creat update
function handleUpdate() {
  let buttonUpdate = document.getElementById("update-button");
  let inputUpdate = document.getElementById("inputUpdate");
  buttonUpdate.onclick = function (e) {
    let name = inputUpdate.value;
    let formMenuUpdate = {
      name: name,
    };
    updateToApi(indexUpdate, formMenuUpdate, function () {
      getMenu(renderMenu);
    });
  };
}

//Function gui yeu cau update
function updateToApi(id, data, callback) {
  let object = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
  };
  fetch(menuApi + "/" + id, object)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

//Function khoi tao 2 ham delete va update
function btnUpdateAndDelete() {
  ul.onclick = function (e) {
    if (e.target.classList.contains("delete")) {
      deleteEvent(e.target.parentElement.id);
    }
    if (e.target.classList.contains("update")) {
      renderUpdate(e.target.parentElement.id);
    }
  };
}
