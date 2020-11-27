// -----biến Dashboard web-------

let premierepro = document.querySelector(".premiere-pro");
let afterEffect = document.querySelector(".after-effect");
let photoShop = document.querySelector(".photoshop");
let adobeIllutrator = document.querySelector(".adobe-illutrator");

let select = document.querySelector(".select");

let mainweb = document.getElementById("mainweb");

let component = document.querySelector(".component");

let idJsonComponent = localStorage.getItem("idDashBoard");

let idComponentConverted = JSON.parse(idJsonComponent);
console.log(idComponentConverted);

// ----- Dashboard ------

showTemp().then(function (ss) {
    console.log(ss[idComponentConverted]);

    component.innerHTML = "";
    let PremiereArray = ss[idComponentConverted].map(function (value, index) {
        return `<div class="component-child" id = "${value.id}">
        <a href="../ContentPage/ContentPage.html" target= "_blank" >
            <img src="${value.img}" alt="Ảnh bài viết" >
            <p>${value.title}</p>
        </a>
        </div>`;
    });
    let renderPremiere = PremiereArray.join("");
    component.innerHTML = renderPremiere;
});

select.onchange = function (event) {
    console.log(event.target.value);

    if (event.target.value == 0) {
        showTemp().then(function (ss) {
            console.log(ss[idComponentConverted]);
            component.innerHTML = "";

            let PremiereToRender = ss[idComponentConverted].map(function (value,index) {
                return `<div class="component-child" id = "${value.id}">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.title}</p>
                        </a>
                        </div>`;
            });
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        });
    }

    if (event.target.value == 1) {
        showTemp().then(function (ss) {
            console.log(ss[idComponentConverted]);

            component.innerHTML = "";
            let PremiereArray = ss[idComponentConverted].filter(function (value,index) {
                return value.view == "100";
            });
            let PremiereToRender = PremiereArray.map(function (value, index) {
                return `<div class="component-child" id = "${value.id}">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.title}</p>
                        </a>
                        </div>`;
            });
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        });
    }
    if (event.target.value == 2) {
        showTemp().then(function (ss) {
            console.log(ss[idComponentConverted]);
            component.innerHTML = "";
            let PremiereArray = ss[idComponentConverted].filter(function (value,index) {
                return value.like >= "100";
            });

            let PremiereToRender = PremiereArray.map(function (value, index) {
                return `<div class="component-child" id = "${value.id}">
                        <a href="../ContentPage/ContentPage.html" target= "_blank" >
                            <img src="${value.img}" alt="Ảnh bài viết">
                            <p>${value.title}</p>
                        </a>
                        </div>`;
            });
            let renderPremiere = PremiereToRender.join("");
            component.innerHTML = renderPremiere;
        });
    }
};

// ---------- tempage--------

// ------------------------------------

component.onclick = function (e) {
    localStorage.setItem(
        "idTempPage",
        JSON.stringify(e.target.parentElement.parentElement.id)
    );
};
