import React from 'react';

function ProductItem({ product, index }) {
    const statusName = product.status ? 'Còn Hàng' : 'Hết hàng';
    const statusClass = product.status ? 'label label-warning' : 'label label-default';
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={statusClass}>{statusName}</span>
            </td>
            <td>
                <button type='button' className='btn btn-success mr-20'>
                    Sửa
                </button>
                <button type='button' className='btn btn-danger'>
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;
