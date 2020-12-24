const guideList = document.querySelector('.guides');

//Đưa dữ liệu từ db về guides (phải thêm property docs vào sau snapshot)
const setupGuides = (data) => {
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







// setup materialize components dùng thư viện material
document.addEventListener('DOMContentLoaded', function() {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});