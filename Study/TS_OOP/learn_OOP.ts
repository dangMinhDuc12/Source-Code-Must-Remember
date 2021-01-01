// class NhanVatGame {
//   //Property
//   tenNhanVat: string;
//   slogan: string;
//   mau: number;

//   //Method phải có: constructor
//   constructor(tenNhanVat: string, slogan: string, mau: number) {
//     //this ở đây là những đối tượng được tạo ra sẽ có property là thế này
//     this.tenNhanVat = tenNhanVat;
//     this.slogan = slogan;
//     this.mau = mau;
//   }

//   //Method

//   hienthiten() {
//     //this ở đây là đối tượng gọi đến method này
//     return `Tên nhân vật là: ${this.tenNhanVat}`;
//   }
// }

// //Từ khóa new để gọi hàm constructor khởi tạo đối tượng
// var garen = new NhanVatGame("Garen", "Đồ tể", 700);

// class Dienthoai {
//   ten: string;
//   gia: number;
//   sao: number;
//   mauSac: string[];

//   constructor(ten: string, gia: number, sao: number, mauSac: string[]) {
//     this.ten = ten;
//     this.gia = gia;
//     this.sao = sao;
//     this.mauSac = mauSac;
//   }

//   showNoiDung() {
//     return `Sản phẩm này có tên là ${this.ten} có giá là ${this.gia} có số sao đánh giá là ${this.sao} và có ${this.mauSac.length} màu`;
//   }
// }

// var sp1 = new Dienthoai("Iphone", 10000000, 5, ["Đen", "Đỏ", "Vàng"]);
// var sp2 = new Dienthoai("Samsung", 20000, 4, ["Xanh", "Cam", "Bạc"]);
// console.log(sp1.showNoiDung());
// console.log(sp2.showNoiDung());

// //Cách dùng kiểu enum và từ khóa static
// enum state {
//   Creat = 10,
//   Processing,
//   Finish,
// }

// class Congviec {
//   id: number;
//   ten1: string;
//   static ten: string = "Quan";
//   trangthai: state;
//   constructor(id: number, ten: string, trangthai: state) {
//     this.id = id;
//     this.ten1 = ten;
//     this.trangthai = trangthai;
//   }

//   static testStatic() {
//     console.log("hello, this is static function");
//   }
// }

// var cv1 = new Congviec(1, "Coder", state.Processing);
// console.log(cv1);

// Congviec.testStatic();

// //Cách khai báo class con và cách dùng từ khóa super
// class Tuong {
//   ten: string;
//   moTaTuong: string;
//   kyNang: string[];
//   constructor(ten: string, moTaTuong: string, kyNang: string[]) {
//     this.ten = ten;
//     this.moTaTuong = moTaTuong;
//     this.kyNang = kyNang;
//   }

//   showThongTin() {
//     var knMang: string[] = this.kyNang.map(
//       (value, index) => `Kỹ năng ${index + 1}: ${value}`
//     );
//     var knChuoi: string = knMang.join(",");
//     return `Tên tướng: ${this.ten}
// Mô tả tướng: ${this.moTaTuong}
// Các Kỹ năng của tướng: ${knChuoi}`;
//   }
// }

// class SatThu extends Tuong {
//   donSatThu: string;

//   constructor(
//     ten: string,
//     moTaTuong: string,
//     kyNang: string[],
//     donSatThu: string
//   ) {
//     super(ten, moTaTuong, kyNang);
//     this.donSatThu = donSatThu;
//   }

//   showThongTinSatThu() {
//     return `Đây là thông tin của class Sát Thủ: ${super.showThongTin()} và đòn sát thủ của tướng là ${
//       this.donSatThu
//     }`;
//   }
// }

// var ashe = new Tuong("Ashe", "Cung Băng", [
//   "Chú Tâm Tiễn",
//   "Tán Xạ Tiễn",
//   "Ưng Tiễn",
//   "Đại Băng Tiễn",
// ]);
// console.log(ashe.showThongTin());

// var ahri = new SatThu(
//   "Ahri",
//   "Hồ Ly Chín Đuôi",
//   ["Hút hồn", "Quả cầu ma thuật", "Lửa Hồ Ly", "Hôn gió"],
//   "Khiêu khích"
// );
// console.log(ahri.showThongTinSatThu());

//Cách dùng acess modifier (Public,Private,Protected)
// class KhoaHoc {
//   public id: number;
//   private ten: string;
//   public doDai: number;
//   constructor(id: number, ten: string, doDai: number) {
//     this.id = id;
//     this.ten = ten;
//     this.doDai = doDai;
//   }

//   xemKhoaHoc() {
//     console.log(`
//       ID khóa học là: ${this.id}
//       Tên khóa học là: ${this.ten}
//       Độ dài khóa học là: ${this.doDai}

//     `);
//   }
//   testPrivate() {
//     console.log(this.ten);
//   }
// }

// class KhoaLapTrinh extends KhoaHoc {
//   public fileDinhKem: string;
//   constructor(id: number, ten: string, doDai: number, fileDinhKem: string) {
//     super(id, ten, doDai);
//     this.fileDinhKem = fileDinhKem;
//   }

//   xemKhoaHocLapTrinh() {
//     super.xemKhoaHoc();
//     console.log(`File đính kèm là: ${this.fileDinhKem}`);
//   }
//   // testPublic() {
//   //   console.log(this.ten);
//   // }
// }

// var khoa08 = new KhoaHoc(8, "Typescript", 6);
// var khoa09 = new KhoaLapTrinh(9, "Javascript", 13, "a.zip");
// // console.log(khoa08.ten);
// khoa08.testPrivate();
// // console.log(khoa09.ten);
// // khoa09.testPublic();

// /**
//  * Public có thể truy nhập từ mọi nơi
//  * Private chỉ có thể truy cập ở bên trong class
//  * Protected thì có thể truy cập từ class đó và các class con của class đó
//  */

// Cách dùng Accessor
class Hero {
  private _ten: string;

  constructor(_ten: string) {
    this._ten = _ten;
  }

  public get ten(): string {
    return this._ten;
  }
}

var zeus = new Hero("zeus");
console.log(zeus.ten);
