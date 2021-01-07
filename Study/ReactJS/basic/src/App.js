import React, { Component } from 'react'
import './App.css'
// import Header from './components/Header.js'
// import Product from './components/Product.js'
import ProductProps from './components/Product_props.js'

/**
 *        
 * Ghi nhớ
 * Dùng dấu {} để viết lệnh JS trong JSX
 * Trong JSX class phải ghi là className và thẻ đơn phải có dấu đóng: / ở cuối thẻ
 * Class Component gọi các tham số hay hàm phải có this, còn function component sẽ truyền vào tham số của function component đó
 * Nếu trả về 1 mảng các JSX thì thẻ bao bọc lấy nó phải có attribute key là duy nhất, có thể truyền index lúc lặp hoặc truyền ID của object lúc khai báo
 * Truyền props từ class cha vào class con rồi lấy bên class con bằng this.props.<tên props truyền vào>, không đặt tên props là children, vì children là lấy nội dung bên trong component đó
 * Bắt buộc dùng arrow function khi bắt sự kiện(Cách 1) (e) => {
                                    e.preventDefault();
                                    this.addToCart(this.props.name)
                                }
                                Cách 2: Khai báo constructor(props), trong constructor bind lại hàm muốn gắn sự kiện để có thể sử dụng props, hàm render là hàm mặc định nên ko cần bind lại
                                Cách 3: Gọi tên function và khai báo function đó ở ngoài với dạng arrow function
                                VD: addToCart2 = () => {}
* Muốn dùng refs để lấy value người dùng nhập vào ô input thì phải tắt strict mode ở bên index.js, lúc truyền ref vào làm props thì truyền số ít ref = "key" lúc lấy sẽ gọi số nhiều this.refs.key.value 
Cách 2 dùng ref(cách mới hiện nay) trong hàm constructor tạo một property để khởi tạo ref: this.input = React.createRef(); sau đó truyền ref vào props bằng cách ref = {this.input} khi muốn nhận giá trị thì dùng  
this.input.current.value
 */





export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.input = React.createRef();
    // }
    // showInfo(person) {
    //     if(person.status) {
    //         return (
    //             <div>
    //                 <h3>Tên: { person.name }</h3>
    //                 <h3>Tuổi: { person.age }</h3>
    //                 <h3>Địa chỉ: { person.address }</h3>
    //             </div>    
    //         ) 
    //     }
    // }
    testOnClick() {
        console.log('Hello world');
    }

    addProduct = () => {
        // console.log(this.input.current.value);
        console.log(this.refs.name.value);
    }

  render() {
    //Khai báo biến
    // var a = 3;
    // var b = [1,2,3];
    // var person = {
    //     name: 'Đức',
    //     age: 23,
    //     address: 'Hà Nội',
    //     status: true
    // };

    // var family = [
    //     {
    //         id: 1,
    //         name: 'Hùng',
    //         age: 20,
    //     },
    //     {
    //         id: 2,
    //         name: 'Quân',
    //         age: 21,
    //     },
    //     {
    //         id: 3,
    //         name: 'Hoàng Anh',
    //         age: 22,
    //     }
        
    // ];

    // var arrayFamily = family.map((person, index) => {
    //     return (
    //         <div key={index}>
    //             <h3>Tên: { person.name }</h3>
    //             <h3>Tuổi: { person.age }</h3>
    //             <h3>ID: { person.id }</h3>
    //             <br />
    //         </div>    
    //     )
    // })

    var phones = [
        {
            name: 'Iphone 12 mới nhất',
            price: 20000000,
            img: 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-mini-64gb-xtmobile.jpg',
            status: true,
        },
        {
            name: 'Samsung S20',
            price: 30000000,
            img: 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-hong-600x600-600x600.jpg',
            status: true,
        },
        {
            name: 'Realme 7',
            price: 40000000,
            img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/realme-7i-xanh-duong_1.jpg',
            status: true,
        },
    ];

    var phonesArray = phones.map((phone, index) => {
        let result;
        if(phone.status) {
            
            result =   <ProductProps
                            key = {index}
                            name = {phone.name}
                            price = {phone.price}
                            img = {phone.img}
                        />
            
        }
        return result;
    
    })


    return (
        /* <Header />
        Ví dụ render ra components Header và Product
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
          </div>
        </div> */
        

      //   Ví dụ render ra biến và biểu thức tính toán
        // <div >

        //         <nav className="navbar navbar-inverse ">
        //                 <a className="navbar-brand" href="a">Title</a>
        //                 <ul className="nav navbar-nav">
        //                     <li className="active">
        //                         <a href="a">Home</a>
        //                     </li>
        //                     <li>
        //                         <a href="a">Link</a>
        //                     </li>
        //                 </ul>
        //         </nav>
        //         <div className="ml-30">
        //             <h2> { a + 5 } </h2> 
        //             <h3>{ b[0] }</h3>
        //             { this.showInfo(person) }
        //             <br />
        //             <hr />
        //             { arrayFamily }

        //         </div>
        // </div> 
        
    
        //Props
        
    <div>
        <nav className="navbar navbar-inverse">
            <a className="navbar-brand" href="a">Title</a>
            <ul className="nav navbar-nav">
                <li className="active">
                    <a href="a">Home</a>
                </li>
                <li>
                    <a href="a">Link</a>
                </li>
            </ul>
        </nav>

        
        <div className="container">
            
            <div className="row">
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                                <h3 className="panel-title">Thêm sản phẩm</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor="">Tên sản phẩm</label>
                                <input type="text" className="form-control" ref = "name"  />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick = {this.addProduct}>
                                Lưu
                            </button>
                        </div>
                    </div>
                    
                    
                    
                </div>
                
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    { phonesArray }
                    
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    
                    <button type="button" className="btn btn-warning" onClick = { this.testOnClick }>
                        Click me
                    </button>
                    
                </div>
                
                
            </div>
            
        </div>
        
        
    </div>    
        
        
    
    )
  }
}





