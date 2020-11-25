async function postData(url, data) {
  let object = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  let response = await fetch(url, object);
  return response.json();
}

let button = document.querySelector("button");
button.onclick = function () {
  let formData = {
    name: "Pho ga Phuong Lu",
  };
  postData("http://localhost:3000/menu", formData).then(function (dataDetail) {
    console.log(dataDetail);
  });
};
