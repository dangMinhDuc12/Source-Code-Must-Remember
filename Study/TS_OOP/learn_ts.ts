// //string
// var chu: string;
// chu = "Dang Minh Duc";
// console.log(chu);

// //number
// var so: number = 10;
// console.log(so);

//array

// var hocsinh: string[]; //array string
// hocsinh = ["Duc", "Quan", "Hung"];
// console.log(hocsinh);

// var mangso: number[]; // number string
// mangso = [1, 2, 3, 4, 5];
// console.log(mangso);

//Boolean

// var dung: boolean = true;
// console.log(dung);

//Enum

// enum color {
//   red = 10,
//   green = 100,
//   blue,
// }

// console.log(color.green);

//Tuple
//Khai báo một mảng dùng được cả string và number
// var a: [string, number, number];
// a = ["Duc", 23, 20];
// console.log(a);

//Any
//Thường dùng với object
// var x: any;
// x = {
//   name: "Duc",
//   age: 23,
// };
// console.log(x);

//Void
//Hàm có void thì function trong void sẽ không được return
// function hello(): void {
//   console.log("hello world");
// }
// hello();

//Ép kiểu chỉ dùng được với any

// var kieu1: any;
// kieu1 = "Dang Minh Duc";

// //Cách 1: Dùng dấu ngoặc <> như bên dưới
// console.log((<string>kieu1).length);

// //Cách 2 dùng từ khóa as

// console.log((kieu1 as string).length);

//Các loại hàm trong TS
//1 Hàm return về một giá trị
// function tinhtong(a: number, b: number): number {
//   return a + b;
// }
// console.log(tinhtong(5, 6));

// function mang(): [string, number, number] {
//   return ["Duc", 20, 21];
// }
// console.log(mang());

// function doituong(): any {
//   var hocsinh = {
//     ten: "Duc",
//     tuoi: 20,
//   };
//   return hocsinh;
// }
// console.log(doituong());

//Expression function trong TS

// var exp = function (x: number, y: string): string {
//   return `Day la so ${x} va chu ${y}`;
// };

// console.log(exp(2, "duc"));

//Anonymous function gần giống arrow
// var fakeArrow: (x: number, y: string) => string = function (x, y) {
//   return `Day la so ${x} va chu ${y}`;
// };

// console.log(fakeArrow(2, "Duc"));

//Arrow function
// var arrow = (x: number, y: string): string => `Day la so ${x} va chu ${y}`;
// console.log(arrow(9, "Duc"));
