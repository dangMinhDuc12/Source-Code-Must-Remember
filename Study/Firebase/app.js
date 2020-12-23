const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

//Tạo function render ra màn hình
function renderCafe(doc) {
  let li = document.createElement('li');
  let name = document.createElement('span');
  let city = document.createElement('span');
  let deleteBtn = document.createElement('div');
  

  li.setAttribute('data-id', doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  deleteBtn.textContent = 'Xóa';
  
  li.append(name, city,deleteBtn);
  cafeList.append(li);


  //Xóa dữ liệu: delete() và truyền id vào method doc()
  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('cafes').doc(id).delete();
  })

  //Sửa dữ liệu giống delete truyền vào id và truyền vào method update() object với các field thay đổi, set() khác với update là nó sẽ ghi đè data cũ và tạo ra data mới
          // updating records (console demo)
          // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
          //     name: 'mario world'
          // });

          // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').update({
          //     city: 'hong kong'
          // });

          // setting data
          // db.collection('cafes').doc('DOgwUvtEQbjZohQNIeMr').set({
          //     city: 'hong kong'
          // });
}

//Đọc dữ liệu với firebase: get(), orderBy(): sắp xếp theo alphabet các dữ liệu lấy ra
// db.collection('cafes').orderBy('name').get()
//       .then((snapshot) => {
//           snapshot.forEach((doc) => {
//             renderCafe(doc);
//           })
//       })

//Query method: where(), chỉ dùng ==
// db.collection('cafes').where('city', '==', 'Hà Nội').get()
//         .then((snapshot) => {
//           snapshot.forEach((doc) => {
//             renderCafe(doc);
//           })
//         })

//Tạo dữ liệu: add()
form.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('cafes').add({
    name: form.name.value,
    city: form.city.value,
  })
  form.name.value = '';
  form.city.value = '';
})


//Realtime dùng onSnapshot() nếu đang còn trong data type là added, bị xóa là removed, còn chỉnh sửa là modified
db.collection('cafes')
      .onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          if(change.type === 'added') {
            renderCafe(change.doc);
          }
          else if(change.type === 'removed') {
            let li = cafeList.querySelector(`[data-id = '${change.doc.id}']`);
            cafeList.removeChild(li);
          }
        })
      })


