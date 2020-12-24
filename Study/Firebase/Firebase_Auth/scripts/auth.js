//Lấy dữ liệu từ db (phải thêm property docs vào sau snapshot)
db.collection('guides').get()
      .then(snapshot => {
        setupGuides(snapshot.docs)
      })




//Lắng nghe trạng thái đăng nhập của người dùng, nếu đăng nhập sẽ hiện thông tin user, nếu out user sẽ nhận giá trị null
auth.onAuthStateChanged(user => {
  if(user) {
    console.log('Người dùng đã đăng nhập: ', user);
  }else{
    console.log('Người dùng đã thoát');
  }
})




//Chức năng đăng ký
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
   //Nhận thông tin của user
   const email = signupForm['signup-email'].value; //Từ thẻ form tìm đến thẻ có id là signup-email
   const password = signupForm['signup-password'].value;
   

   //Đăng ký tài khoản cho user đó
   auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
          console.log(cred.user);
          const modal = document.querySelector('#modal-signup');
          M.Modal.getInstance(modal).close(); //lệnh đóng modal sau khi đăng ký của material
          signupForm.reset();
        })
        .catch(err => {
          alert(err);
        })
  
});

//Thoát đăng nhập
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
    .then(() => {
      // console.log('Người dùng đã thoát');
    })
});

//Đăng nhập
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //Lấy thông tin đăng nhập
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password)
      .then((cred) => {
        // console.log(cred.user);
      })
      .catch(err => {
        alert(err)
      })

  //Đóng Modal sau khi đăng nhập
  const modal = document.querySelector('#modal-login');
  M.Modal.getInstance(modal).close(); //lệnh đóng modal sau khi đăng ký của material
  loginForm.reset();
})