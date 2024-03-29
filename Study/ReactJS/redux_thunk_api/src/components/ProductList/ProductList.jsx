import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList({ products }) {
    return (
        <div className='panel panel-primary'>
            <div className='panel-heading'>
                <h3 className='panel-title'>Danh sách sản phẩm</h3>
            </div>
            <div className='panel-body'>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Mã</th>
                            <th>Tên</th>
                            <th>Giá</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>{products}</tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductList;
