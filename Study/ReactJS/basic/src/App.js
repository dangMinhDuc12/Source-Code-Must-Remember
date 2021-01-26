import React, { useReducer } from 'react'
import './App.css';
import TestReducerContext from './components/testReducerContext';
// import Header from './components/Header.js'
// import Product from './components/Product.js'
// import ProductProps from './components/Product_props.js'

/**
 *        
 * Ghi nhớ
 * Dùng dấu {} để viết lệnh JS trong JSX
 * Trong JSX class phải ghi là className và thẻ đơn phải có dấu đóng: / ở cuối thẻ
 * Class Component gọi các tham số hay hàm phải có this, còn function component sẽ truyền vào tham số của function component đó
 * Nếu trả về 1 mảng các JSX thì thẻ bao bọc lấy nó phải có attribute key là duy nhất, có thể truyền index lúc lặp hoặc truyền ID của object lúc khai báo
 * Truyền props từ class cha vào class con rồi lấy bên class con bằng this.props.<tên props truyền vào>, không đặt tên props là children, vì children là lấy nội dung bên trong component đó
 * Bắt buộc dùng arrow function khi bắt sự kiện, khi bắt sự kiện truyền vào trong {} là 1 function (Cách 1) (e) => {
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





// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         // this.input = React.createRef();

//         this.state = {
//             product: [
//                 {
//                     name: 'Iphone 12 mới nhất',
//                     price: 20000000,
//                     img: 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-mini-64gb-xtmobile.jpg',
//                     status: true,
//                 },
//                 {
//                     name: 'Samsung S20',
//                     price: 30000000,
//                     img: 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-hong-600x600-600x600.jpg',
//                     status: true,
//                 },
//                 {
//                     name: 'Realme 7',
//                     price: 40000000,
//                     img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/realme-7i-xanh-duong_1.jpg',
//                     status: true,
//                 },
//             ],
//             isActive: true
//         };
//     }
//     // showInfo(person) {
//     //     if(person.status) {
//     //         return (
//     //             <div>
//     //                 <h3>Tên: { person.name }</h3>
//     //                 <h3>Tuổi: { person.age }</h3>
//     //                 <h3>Địa chỉ: { person.address }</h3>
//     //             </div>    
//     //         ) 
//     //     }
//     // }
//     // testOnClick() {
//     //     console.log('Hello world');
//     // }

//     // addProduct = () => {
//     //     // console.log(this.input.current.value);
//     //     console.log(this.refs.name.value);
//     // }

//     testSetState = () => {
//         this.setState({
//             isActive: !this.state.isActive
//         })
//     }


//   render() {
//     //Khai báo biến
//     // var a = 3;
//     // var b = [1,2,3];
//     // var person = {
//     //     name: 'Đức',
//     //     age: 23,
//     //     address: 'Hà Nội',
//     //     status: true
//     // };

//     // var family = [
//     //     {
//     //         id: 1,
//     //         name: 'Hùng',
//     //         age: 20,
//     //     },
//     //     {
//     //         id: 2,
//     //         name: 'Quân',
//     //         age: 21,
//     //     },
//     //     {
//     //         id: 3,
//     //         name: 'Hoàng Anh',
//     //         age: 22,
//     //     }

//     // ];

//     // var arrayFamily = family.map((person, index) => {
//     //     return (
//     //         <div key={index}>
//     //             <h3>Tên: { person.name }</h3>
//     //             <h3>Tuổi: { person.age }</h3>
//     //             <h3>ID: { person.id }</h3>
//     //             <br />
//     //         </div>    
//     //     )
//     // })

//     // var phones = [            
//     //     {
//     //         name: 'Iphone 12 mới nhất',
//     //         price: 20000000,
//     //         img: 'https://www.xtmobile.vn/vnt_upload/product/Hinh_DT/Iphone/thumbs/(600x600)_crop_iphone-12-mini-64gb-xtmobile.jpg',
//     //         status: true,
//     //     },
//     //     {
//     //         name: 'Samsung S20',
//     //         price: 30000000,
//     //         img: 'https://cdn.tgdd.vn/Products/Images/42/217935/samsung-galaxy-s20-hong-600x600-600x600.jpg',
//     //         status: true,
//     //     },
//     //     {
//     //         name: 'Realme 7',
//     //         price: 40000000,
//     //         img: 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/r/e/realme-7i-xanh-duong_1.jpg',
//     //         status: true,
//     //     },
//     // ];

//     // var phonesArray = phones.map((phone, index) => {
//     //     let result;
//     //     if(phone.status) {

//     //         result =   <ProductProps
//     //                         key = {index}
//     //                         name = {phone.name}
//     //                         price = {phone.price}
//     //                         img = {phone.img}
//     //                     />

//     //     }
//     //     return result;

//     // })

//     let phonesStateArray = this.state.product.map((phone, index) => {
//         let result;
//         if(phone.status) {

//             result = (
//                     <tr key = { index }>
//                         <td>{ index + 1 }</td>
//                         <td>{ phone.name }</td>
//                         <td><span className="label label-success">{ phone.price } VNĐ</span></td>
//                     </tr>
//             );
//         }
//         return result;
//     })








//     return (
//         /* <Header />
//         Ví dụ render ra components Header và Product
//         <div className="row">
//           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//             <Product />
//           </div>
//           <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
//             <Product />
//           </div>
//         </div> */


//       //   Ví dụ render ra biến và biểu thức tính toán
//         // <div >

//         //         <nav className="navbar navbar-inverse ">
//         //                 <a className="navbar-brand" href="a">Title</a>
//         //                 <ul className="nav navbar-nav">
//         //                     <li className="active">
//         //                         <a href="a">Home</a>
//         //                     </li>
//         //                     <li>
//         //                         <a href="a">Link</a>
//         //                     </li>
//         //                 </ul>
//         //         </nav>
//         //         <div className="ml-30">
//         //             <h2> { a + 5 } </h2> 
//         //             <h3>{ b[0] }</h3>
//         //             { this.showInfo(person) }
//         //             <br />
//         //             <hr />
//         //             { arrayFamily }

//         //         </div>
//         // </div> 


//         //Props

//     <div>
//         <nav className="navbar navbar-inverse">
//             <a className="navbar-brand" href="a">Title</a>
//             <ul className="nav navbar-nav">
//                 <li className="active">
//                     <a href="a">Home</a>
//                 </li>
//                 <li>
//                     <a href="a">Link</a>
//                 </li>
//             </ul>
//         </nav>


//         {/* <div className="container">
//             <div className="row">
//                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                     <div className="panel panel-danger">
//                         <div className="panel-heading">
//                                 <h3 className="panel-title">Thêm sản phẩm</h3>
//                         </div>
//                         <div className="panel-body">
//                             <div className="form-group">
//                                 <label htmlFor="">Tên sản phẩm</label>
//                                 <input type="text" className="form-control" ref = "name"  />
//                             </div>
//                             <button type="submit" className="btn btn-primary" onClick = {this.addProduct}>
//                                 Lưu
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                     { phonesArray }
//                 </div>
//                 <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
//                     <button type="button" className="btn btn-warning" onClick = { this.testOnClick }>
//                         Click me
//                     </button>
//                 </div>
//             </div>
//         </div> */}


//         {/* State */}


//         <div className="container">
//             <div className="row">
//                 <div className = "row">

//                     <table className="table table-bordered table-hover">
//                         <thead>
//                             <tr>
//                                 <th>STT</th>
//                                 <th>Tên sản phẩm</th>
//                                 <th>Giá</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {phonesStateArray}
//                         </tbody>
//                     </table>

//                     <button type="button" className="btn btn-warning" onClick = { this.testSetState }>
//                         Active : { this.state.isActive  ? 'true' : 'false'}
//                     </button>

//                 </div>
//             </div>
//         </div>
//     </div>    





//Handle Form
// constructor(props) {
//     super(props);
//     this.state = {
//         username: '',
//         password: '',
//         description: '',
//         select: 3,
//         language: '',
//         checkbox: false
//     };
// }


// handleChange = (e) => {
//     let name = e.target.name;
//     let value;

//     //Kiểm tra type của input rồi set value phù hợp với từng type đề ra
//     if (e.target.type === 'select-one') {
//         value = Number(e.target.value);
//     } else if (e.target.type === 'checkbox') {
//         value = !!e.target.value;
//     } else {
//         value = e.target.value
//     }

//     this.setState({
//         [name]: value
//     })


// }

// handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(this.state);

// }





// <div className="container mt-30">

//     <div className="row">
//         <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

//             <div className="panel panel-primary">
//                     <div className="panel-heading">
//                         <h3 className="panel-title">Form</h3>
//                     </div>
//                     <div className="panel-body">
//                         <form onSubmit = { this.handleSubmit }>
//                             <div className="form-group">
//                                 <label htmlFor="">Username: </label>
//                                 <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 name = "username"
//                                 onChange = { this.handleChange }
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="">Password: </label>
//                                 <input 
//                                 type="text" 
//                                 className="form-control" 
//                                 name = "password"
//                                 onChange = { this.handleChange }
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="">Mô tả:  </label>
//                                 <textarea  className="form-control" rows="3" name = "description" onChange = { this.handleChange }></textarea>

//                             </div>


//                             <select name="select"  className="form-control" onChange = { this.handleChange }>
//                                 <option>--Chọn giới tính</option>
//                                 <option value={0}>Nam</option>
//                                 <option value={1}>Nữ</option>
//                             </select>
//                             <br />


//                             <div className="radio">
//                                 <label>
//                                     <input type="radio" name="language"  value = "ENG" onChange = { this.handleChange }/>
//                                     Tiếng Anh
//                                 </label>
//                                 <br />
//                                 <label>
//                                     <input type="radio" name="language" value = "VN" onChange = { this.handleChange } />
//                                     Tiếng Việt
//                                 </label>
//                             </div>


//                             <div className="checkbox">
//                                 <label>
//                                     <input type="checkbox" name = "checkbox"  onChange = { this.handleChange } value = {true}/>
//                                     Trạng thái
//                                 </label>
//                             </div>


//                             <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
//                         </form>
//                     </div>
//             </div>

//         </div>
//     </div>

// </div>















//     )
//   }
// }






//Tao du lieu
const initialCount = 0;
const countReducer = (state, action) => {
    switch (action.type) {
        case 'tang':
            return state + 1;
        case 'giam':
            return state - 1;

        default:
            return state;
    }
}


const initialNum = 2;
const numReducer = (state, action) => {
    switch (action.type) {
        case 'nhan2':
            return state * 2;
        case 'chia2':
            return state / 2;

        default:
            return state;
    }
}






//Tao context
export const TestContext = React.createContext();






export default function App() {



    const [count, dispatchCount] = useReducer(countReducer, initialCount);
    const [num, dispatchNum] = useReducer(numReducer, initialNum);







    return (
        <TestContext.Provider
            value={{
                count,
                dispatchCount,
                num,
                dispatchNum
            }}

        >

            <TestReducerContext />
        </TestContext.Provider>

    )





}



