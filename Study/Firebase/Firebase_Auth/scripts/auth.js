

//Lắng nghe trạng thái đăng nhập của người dùng, nếu đăng nhập sẽ hiện thông tin user, nếu out user sẽ nhận giá trị null
auth.onAuthStateChanged(user => {
  if(user) {
    console.log('Người dùng đã đăng nhập: ', user);
    //Lấy dữ liệu từ db (phải thêm property docs vào sau snapshot)
    db.collection('guides').onSnapshot(snapshot => {
      setupGuides(snapshot.docs);
      setupUI(user);
    });
  
  }else{
    console.log('Người dùng đã thoát');
    setupGuides([]);
    setupUI();
  }
})


//Tạo mới guide
const createForm = document.querySelector('#create-form');

createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  db.collection('guides').add({
    //Cách 1 lấy các thẻ input từ thẻ form
    // title: createForm.querySelector(`[id = "title"]`).value,
    // content: createForm.querySelector(`[id="content"]`).value

    //Cách 2 lấy các thẻ input từ thẻ form từ ID
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(() =>{
    //Đóng Modal và reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close(); 
    createForm.reset();
  })
  .catch(err => {
    alert(err);
  })
})



//Chức năng đăng ký
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
   //Nhận thông tin của user
   const email = signupForm['signup-email'].value; //Từ thẻ form tìm đến thẻ có id là signup-email
   const password = signupForm['signup-password'].value;
   

   //Đăng ký tài khoản cho user đó với UID của tài khoản trùng với UID bên database
   auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
          //Lệnh return ở dưới: firebase sẽ tự tạo 1 collection users có id của document là id của firebase tạo ra khi đăng ký tài khoản người dùng
          return db.collection('users').doc(cred.user.uid).set({
            bio: signupForm['signup-bio'].value
          })
          
        })
        .then(() => {
          // console.log(cred.user);
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