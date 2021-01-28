import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

function ProductActionPage() {
    let name = useRef();
    let price = useRef();
    let status = useRef();
    const history = useHistory();

    async function onSubmit(e) {
        e.preventDefault();

        const res = await fetch('http://localhost:3004/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.current.value,
                price: Number(price.current.value),
                status: status.current.checked.toString(),
            }),
        });
        const data = await res.json();
        name.current.value = '';
        price.current.value = '';
        status.current.checked = false;
        history.push('/product-list');
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
