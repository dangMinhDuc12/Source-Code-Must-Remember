// 1 Template string OK

// 2 Destructuring Object OK
// let person = {
//   firstName: "Dang Minh",
//   lastName: "Duc",
//   address: "Bach Mai",
// };

// let { firstName: a, lastName: b } = person;
// console.log(`${a} ${b}`);

//3 Destructuring Arrays
// let person = ["Dang", "Minh", "Duc"];

// let [a, b, c] = person;
// console.log(c);

// 4 Object Literal: Giúp tạo một object với key là tham số của function và value là đối số truyền vào function(hoặc có thể được khai báo từ trước chứ không nhất thiết là function)
// function person(name, age) {
//   let personObject = { name, age };
//   console.log(personObject);
// }

// person("Duc", 23);

// 5 For of Loop OK

//6 Spread Operator
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [...array1];
// array2.push("ok");
// console.log(array2);

// let object1 = {
//   name: "Dang Minh Duc",
//   age: 23,
//   address: "Ha Noi",
// };

// let object2 = { ...object1 };
// console.log(object2);

// //7 Rest Operator
// function getNumber(...number) {
//   // arguments trả về một mảng giống spread operator
//   // console.log(arguments);
//   console.log(number);
// }
// getNumber(1, 2, 3, 4, 5);

//8 Arrow Function
// function calculator(...number) {
//  Arrow function chỉ dùng để viết thay cho anonymous function và expression function thay chữ function thành mũi tên và viết logic sau dấu ngoặc nhọn nếu có giá trị return ngay thì viết ở dấu ngoặc tròn ngay sau mũi tên
//   let sum = number.reduce((acc, value) => (acc += value), 0);
//   return sum;
// }

// console.log(calculator(1, 2, 3, 4, 5));

// let calc = (a, b) => {
//   let c = a + b;
//   return c;
// };
// console.log(calc(2, 3));

//9 Default Params
// Khai báo kiểu dữ liệu tham số của 1 hàm trong khi định nghĩa hàm
// function dp(numArray = []) {
//   let total = 0;
//   numArray.forEach((element) => {
//     total += element;
//   });
//   return total;
// }
// console.log(dp());

//10 Includes
//Ngoài method indexOf để kiểm tra một phần tử có nằm trong mảng hay không ta có thể dùng includes
// let array = [1, 2, 3, 4, 5];

// console.log(array.includes(3));

//11 Import & Export
//Bắt buộc phải có type = module tại file import
// import { a, b, c } from "./Export_ES6.js";
// console.log(a);
// console.log(b);
// console.log(c(2, 3));

//12 padStart & padEnd;

//2 method pad trên sẽ nhận vào 2 tham số, đầu tiên là số ký tự mong muốn, 2 là chuỗi muốn truyền vào

// let a = "Duc";

// console.log(a.padStart(10, "a"));
// console.log(a.padEnd(5, "ab"));

//13 Set
// let exampleSet = new Set([1, 1, 1, 1, 2, 2, 2, 2, 2]);
// console.log([...exampleSet]);

// exampleSet.add(5);
// exampleSet.delete(5); // trả về boolean
// console.log(exampleSet.has(2));
// exampleSet.clear(); // Xóa tất cả phần tử của set
// console.log(exampleSet.size);

//14 Class

// class Person {
//   //Trong 1 class chỉ có 1 constructor và có thể có nhiều method
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }

//   getName(a) {
//     console.log(`Day la ten cua ban ${this.name} va ${a}`);
//   }

//   //setter & getter không phải 1 function
//   set addressInfo(add) {
//     this.add = add;
//   }

//   get addressInfo() {
//     return this.add;
//   }

//   //Hàm static chỉ có thể được gọi bởi class gốc đã tạo chứ không thể gọi từ các đối tượng con tạo ra từ class
//   static des() {
//     console.log(`Day la class ve con nguoi`);
//   }
// }

// let person1 = new Person("Duc", 23);

// person1.getName("abc");

// //setter & getter
// person1.addressInfo = "Bach Mai";
// console.log(person1.addressInfo);

// //Call static
// Person.des();

// //Extends Class tạo hàm con trong hàm cha
// class myH extends Person {
//   hobby() {
//     //Muốn gọi hàm cha trong hàm con ta có thể dùng super
//     super.getName();
//     console.log("toi thich choi game");
//   }
// }

// let person2 = new myH("Hung", 20);

// person2.hobby();

//15 Rest Parameter Lấy ra những thằng còn lại sau khi dùng Destructuring

// let course = {
//   name: "Javascript",
//   price: 1000,
//   image: "image-address",
//   children: {
//     name: "ReactJS",
//   },
// };

// // let { name, ...rest } = course;
// // console.log(name);
// // console.log(rest);

// let {
//   name: parentName,
//   children: { name },
// } = course;
// console.log(parentName, name);

//Phân biệt spread và rest
// let array = ["Javascript", "PHP", "Ruby"];
// function logger(...param) /*Rest*/ {
//   console.log(param);
// }

// logger(...array); //Spread

//16 Tagged template literals

// function highlight([first, ...strings], ...value) {
//   let result = value.reduce(
//     function (acc, curr) {
//       return [...acc, `<span>${curr}</span>`, strings.shift()];
//     },
//     [first]
//   );
//   return result.join("");
// }

// let brand = "F8";
// let course = "Javascript";

// let html = highlight`Học lập trình ${course} tại ${brand} !`;
// console.log(html);

//17 Optional chaining

// let person1 = {
//   age: 23,
//   // person2: {
//   //   // person3: {
//   //   //   name: "Quan",
//   //   // },
//   // },
// };

// //Thay vì dùng if else để check xem có giá trị đó tồn tại hay không ta có thể dùng OC để check sau vị trí của phần tử mà ta nghi ngờ
// console.log(person1.person2?.person3?.name);

class Tuong {
  constructor(ten, moTa, mau) {
    this.ten = ten;
    this.moTa = moTa;
    this.mau = mau;
  }
  showThongTin() {
    console.log(`
    Tên tướng : ${this.ten}
    Mô tả: ${this.moTa}
    Máu: ${this.mau}
    `);
  }

  static testStatic() {
    console.log("Đây là hàm static");
  }

  set themchieuCuoi(chieuCuoi) {
    this.chieuCuoi = chieuCuoi;
  }
  // get themchieuCuoi() {
  //   return this.chieuCuoi;
  // }
}

class SatThu extends Tuong {
  constructor(ten, moTa, mau, donSatThu) {
    super(ten, moTa, mau);
    this.donSatThu = donSatThu;
  }

  showThongTinSatThu() {
    super.showThongTin();
    console.log(`Đòn sát thủ : ${this.donSatThu}`);
  }

  set themMana(mana) {}
}
var tuong = new Tuong("Ashe", "Cung Băng", 500);
tuong.chieuCuoi = "Đại Băng Tiễn";
console.log(tuong.chieuCuoi);

var satThu = new SatThu("Talon", "Nhát chém", 200, "Khiêu khích");
satThu.chieuCuoi = "Chém gió";
console.log(satThu.chieuCuoi);


