import React from 'react';

function ProductItem({ product, index, onDelete }) {
    const statusName = product.status === 'true' ? 'Còn Hàng' : 'Hết hàng';
    const statusClass = product.status === 'true' ? 'label label-warning' : 'label label-default';

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
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => onDelete(product.id)}>
                    Xóa
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;
