let mainweb = document.querySelector("#mainweb");

//Save id to local storage
mainweb.onclick = function (e) {
  console.log(e.target);
  localStorage.setItem(
    "idDashBoard",
    JSON.stringify(e.target.parentElement.id)
  );
};
