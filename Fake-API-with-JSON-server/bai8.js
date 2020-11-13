let menuApi = "http://localhost:3000/menu";

//Function chay project
function start() {
  getMenu(renderMenu);
  create();
  deleteEvent();
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
  let ul = document.getElementById("menu");
  let htmls = menu.map(function (m, index) {
    return `<li id = "${m.id}">${m.name}<button class = "delete">X</button></li>`;
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
function deleteEvent() {
  let ul = document.getElementById("menu");
  ul.onclick = function (e) {
    if (e.target.classList.contains("delete")) {
      deleteMenu(e.target.parentElement.id, function () {
        getMenu(renderMenu);
      });
    }
  };
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
