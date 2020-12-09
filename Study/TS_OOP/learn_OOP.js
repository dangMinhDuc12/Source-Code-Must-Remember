var NhanVatGame = /** @class */ (function () {
    //Method phải có: constructor
    function NhanVatGame(tenNhanVat, slogan, mau) {
        //this ở đây là những đối tượng được tạo ra sẽ có property là thế này
        this.tenNhanVat = tenNhanVat;
        this.slogan = slogan;
        this.mau = mau;
    }
    //Method
    NhanVatGame.prototype.hienthiten = function () {
        //this ở đây là đối tượng gọi đến method này
        return "T\u00EAn nh\u00E2n v\u1EADt l\u00E0: " + this.tenNhanVat;
    };
    return NhanVatGame;
}());
//Từ khóa new để gọi hàm constructor khởi tạo đối tượng
var garen = new NhanVatGame("Garen", "Đồ tể", 700);
var Dienthoai = /** @class */ (function () {
    function Dienthoai(ten, gia, sao, mauSac) {
        this.ten = ten;
        this.gia = gia;
        this.sao = sao;
        this.mauSac = mauSac;
    }
    Dienthoai.prototype.showNoiDung = function () {
        return "S\u1EA3n ph\u1EA9m n\u00E0y c\u00F3 t\u00EAn l\u00E0 " + this.ten + " c\u00F3 gi\u00E1 l\u00E0 " + this.gia + " c\u00F3 s\u1ED1 sao \u0111\u00E1nh gi\u00E1 l\u00E0 " + this.sao + " v\u00E0 c\u00F3 " + this.mauSac.length + " m\u00E0u";
    };
    return Dienthoai;
}());
var sp1 = new Dienthoai("Iphone", 10000000, 5, ["Đen", "Đỏ", "Vàng"]);
var sp2 = new Dienthoai("Samsung", 20000, 4, ["Xanh", "Cam", "Bạc"]);
console.log(sp1.showNoiDung());
console.log(sp2.showNoiDung());
//Cách dùng kiểu enum
var state;
(function (state) {
    state[state["Creat"] = 10] = "Creat";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var Congviec = /** @class */ (function () {
    function Congviec(id, ten, trangthai) {
        this.id = id;
        this.ten = ten;
        this.trangthai = trangthai;
    }
    return Congviec;
}());
var cv1 = new Congviec(1, "Coder", state.Processing);
console.log(cv1);
