let idJsonComponent = localStorage.getItem("idDashBoard");

let idComponentConverted = JSON.parse(idJsonComponent);
console.log(idComponentConverted)

let idJsonContent = localStorage.getItem("idTempPage");

let idContentConverted = JSON.parse(idJsonContent);
console.log(idContentConverted);

let author = document.querySelector('.author');
let titleOfContent = document.querySelector('.title-of-content');
let content = document.querySelector('.content-detail');
let image = document.querySelector('.left-side');
let views = document.querySelector('.views')
let date = document.querySelector('.date-public')

showTemp().then(function (ss) {
    let pauthor = `<p>${ss[idComponentConverted][idContentConverted - 1].author}</p>`;
    let ptitle = `<p>${ss[idComponentConverted][idContentConverted - 1].title}</p>`;
    let pcontent = `<p>${ss[idComponentConverted][idContentConverted - 1].content}</p>`;
    let pviews = `<i class="far fa-eye">&ensp;</i>${ss[idComponentConverted][idContentConverted - 1].view} views`;
    let pdate = `<i class="far fa-calendar-alt">&ensp;</i>${ss[idComponentConverted][idContentConverted - 1].date}`;
    image.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${ss[idComponentConverted][idContentConverted - 1].img}')`;

    date.innerHTML = pdate;
    views.innerHTML = pviews;
    author.innerHTML = pauthor;
    titleOfContent.innerHTML = ptitle;
    content.innerHTML = pcontent;
})

function showNameContent() {
    let nameContent = document.querySelector(".name-content");
    nameContent.textContent = "";
    if (idComponentConverted == 0) {
        nameContent.textContent = "Premiere Pro"
    }
    if (idComponentConverted == 1) {
        nameContent.textContent = "Photo Shop"
    }
    if (idComponentConverted == 2) {
        nameContent.textContent = "After Effect"
    }
    if (idComponentConverted == 3) {
        nameContent.textContent = "Adobe Illutrator"
    }
}
showNameContent();



let email = document.querySelector('.EmailContribute');
let contentEmail = document.getElementById('content-email');
let nameMailUser = document.getElementById('name-mail-user');
email.onclick = function () {
    email.setAttribute('href', `mailto:nmhung1234@hotmail.com?subject=${nameMailUser.value}&body=${contentEmail.value}`);
    console.log(contentEmail.value)
}


// ----DOM for comment----
let userInput = document.querySelector('#input-comment');
let buttonComment = document.querySelector('#button-comment');
let allComment = document.querySelector('.all-comment');
let inputName = document.querySelector('#input-name');
let inputAvatar = document.querySelector('#input-avatar');

showTemp().then(function (ss) {

    let commentArr = ss[4].map(function (value) {
        return `<div class="render-comment">
            <img src="${value.avatar}" alt="avatar">
            <div class="name-and-comment">
                <p class="p-name">${value.name}</p>
                <p class="p-comment">${value.comment}
                </p>
                <p id = ${value.id} class="del">Xóa</p>
            </div>
        </div>`
    })
    let commentRender = commentArr.join("");
    allComment.innerHTML = commentRender;
})


async function postData(url = '', data = {}) {
    let response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    });
    return response.json();
  }

  async function deleteData(url) {
    let response = await fetch(url, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
  }


buttonComment.onclick = function(){
    let formData = {
        name: inputName.value,
        avatar: inputAvatar.value,
        comment: userInput.value,
    }
    postData('http://localhost:3000/commentUser', formData )
}


allComment.onclick = function(e) {
    if (e.target.classList.contains("del")) {
        console.log(e.target.id);
        
        deleteData(`http://localhost:3000/commentUser/${e.target.id}`);
    }
}