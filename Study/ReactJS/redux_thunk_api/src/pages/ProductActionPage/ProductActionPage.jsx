import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { addProduct, fetchDataWithId, updateProduct } from '../../actions/products';

function ProductActionPage() {
    let name = useRef();
    let price = useRef();
    let status = useRef();
    const history = useHistory();
    const { id } = useParams();
    const productEdit = useSelector((state) => state.productEdit);
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    // if (productEdit) {
    //     console.log(productEdit);
    //     name.current.value = productEdit.name;
    //     price.current.value = productEdit.price;
    //     status.current.checked = productEdit.status === 'true' ? true : false;
    // }

    useEffect(() => {
        if (id) {
            console.log(products);
        }
    }, []);

    async function onSubmit(e) {
        e.preventDefault();
        if (!id) {
            dispatch(
                addProduct({
                    name: name.current.value,
                    price: Number(price.current.value),
                    status: status.current.checked.toString(),
                })
            );
            name.current.value = '';
            price.current.value = '';
            status.current.checked = false;
            history.push('/product-list');
        }
        // dispatch(
        //     updateProduct(
        //         {
        //             name: name.current.value,
        //             price: Number(price.current.value),
        //             status: status.current.checked.toString(),
        //         },
        //         id
        //     )
        // );
        // history.push('/product-list');
    }

    return (
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>Tên sản phẩm</label>
                    <input type='text' className='form-control' ref={name} />
                </div>

                <div className='form-group'>
                    <label>Giá</label>
                    <input type='number' className='form-control' ref={price} />
                </div>

                <div className='form-group'>
                    <label>Trạng thái</label>
                </div>

                <div className='checkbox'>
                    <label>
                        <input type='checkbox' ref={status} />
                        Còn hàng
                    </label>
                </div>

                <Link to='/product-list' className='btn btn-danger'>
                    Trở lại
                </Link>
                <button type='submit' className='btn btn-primary'>
                    Lưu lại
                </button>
            </form>
        </div>
    );
}

export default ProductActionPage;
