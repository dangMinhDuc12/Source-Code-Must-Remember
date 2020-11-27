async function showTemp() {
    let data1 = await fetch('http://localhost:3000/Premiere');
    let data2 = await fetch('http://localhost:3000/PhotoShop');
    let data3 = await fetch('http://localhost:3000/AfterEffect');
    let data4 = await fetch('http://localhost:3000/AdobeIllutrator');
    let data5 = await fetch('http://localhost:3000/commentUser');

    let dataPremiere = await data1.json();
    let dataPhotoShop = await data2.json();
    let dataAfterEffect = await data3.json();
    let dataAdobeIllutrator = await data4.json();
    let dataCommentUser = await data5.json();

    return [dataPremiere, dataPhotoShop, dataAfterEffect, dataAdobeIllutrator,dataCommentUser];
}