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

// 4 Object Literal: Giúp tạo một object với key là tham số của function và value là đối số truyền vào function
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
//   // Arrow function chỉ dùng để viết thay cho anonymous function thay chữ function thành mũi tên và viết logic sau dấu ngoặc nhọn nếu có giá trị return ngay thì viết ở dấu ngoặc tròn ngay sau mũi tên
//   let sum = number.reduce((acc, value) => (acc += value), 0);
//   return sum;
// }

// console.log(calculator(1, 2, 3, 4, 5));
