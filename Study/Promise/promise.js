async function showTemp() {
  let data1 = await fetch("http://localhost:3000/Premiere");
  let data2 = await fetch("http://localhost:3000/PhotoShop");
  let data3 = await fetch("http://localhost:3000/AfterEffect");
  let data4 = await fetch("http://localhost:3000/AdobeIllutrator");

  let dataPremiere = await data1.json();
  let dataPhotoShop = await data2.json();
  let dataAfterEffect = await data3.json();
  let dataAdobeIllutrator = await data4.json();

  return [dataPremiere, dataPhotoShop, dataAfterEffect, dataAdobeIllutrator];
}
showTemp().then(function (ss) {
  console.log(ss[0]);
});

// https://dominhhai.github.io/vi/2016/10/js-async-await-is-simple/
