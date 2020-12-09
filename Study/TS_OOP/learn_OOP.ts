class NhanVatGame {
  //Property
  tenNhanVat: string;
  slogan: string;
  mau: number;

  //Method phải có: constructor
  constructor(tenNhanVat: string, slogan: string, mau: number) {
    //this ở đây là những đối tượng được tạo ra sẽ có property là thế này
    this.tenNhanVat = tenNhanVat;
    this.slogan = slogan;
    this.mau = mau;
  }

  //Method

  hienthiten() {
    //this ở đây là đối tượng gọi đến method này
    return `Tên nhân vật là: ${this.tenNhanVat}`;
  }
}

//Từ khóa new để gọi hàm constructor khởi tạo đối tượng
var garen = new NhanVatGame("Garen", "Đồ tể", 700);

class Dienthoai {
  ten: string;
  gia: number;
  sao: number;
  mauSac: string[];

  constructor(ten: string, gia: number, sao: number, mauSac: string[]) {
    this.ten = ten;
    this.gia = gia;
    this.sao = sao;
    this.mauSac = mauSac;
  }

  showNoiDung() {
    return `Sản phẩm này có tên là ${this.ten} có giá là ${this.gia} có số sao đánh giá là ${this.sao} và có ${this.mauSac.length} màu`;
  }
}

var sp1 = new Dienthoai("Iphone", 10000000, 5, ["Đen", "Đỏ", "Vàng"]);
var sp2 = new Dienthoai("Samsung", 20000, 4, ["Xanh", "Cam", "Bạc"]);
console.log(sp1.showNoiDung());
console.log(sp2.showNoiDung());

//Cách dùng kiểu enum
enum state {
  Creat = 10,
  Processing,
  Finish,
}

class Congviec {
  id: number;
  ten: string;
  trangthai: state;
  constructor(id: number, ten: string, trangthai: state) {
    this.id = id;
    this.ten = ten;
    this.trangthai = trangthai;
  }
}

var cv1 = new Congviec(1, "Coder", state.Processing);
console.log(cv1);
