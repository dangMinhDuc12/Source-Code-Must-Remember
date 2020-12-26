const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

//Function ẩn hiện đăng nhập, đăng xuất ra màn hình
const setupUI = (user) => {
  if(user) {
    console.log(user);
    db.collection('users').doc(user.uid).get().then(doc => {
      accountDetails.innerHTML = `<div>Bạn đã đăng nhập với tài khoản: ${user.email}</div>
                                  <div>${doc.data().bio}</div>`;
    })
    loggedInLinks.forEach(item => {
      item.style.display = 'block';
      
    });
    loggedOutLinks.forEach(item => {
      item.style.display = 'none';
    });
   
  }
  else {
    loggedInLinks.forEach(item => {
      item.style.display = 'none';
      
    });
    loggedOutLinks.forEach(item => {
      item.style.display = 'block';
    });
    accountDetails.innerHTML = '';

  }
}



//Đưa dữ liệu từ db về guides (phải thêm property docs vào sau snapshot)
const setupGuides = (data) => {
  if(data.length) {
    let liArray = data.map((doc) => {
      let liElmArray = `
        <li>
          <div class="collapsible-header grey lighten-4">${doc.data().title}</div>
          <div class="collapsible-body white">${doc.data().content}</div>
        </li>
      
      `;
      return liElmArray;
      
    })
    let li = liArray.join('');
    guideList.innerHTML = li;
  }
  else {
    guideList.innerHTML = '<h1>Bạn chưa đăng nhập. Hãy đăng nhập để thấy nội dung</h1>';
  }
  
}







// setup materialize components dùng thư viện material
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});