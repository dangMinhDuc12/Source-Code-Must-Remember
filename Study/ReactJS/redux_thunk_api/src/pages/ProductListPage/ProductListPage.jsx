import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';

function ProductListPage() {
    const products = [];

    function showProducts(products) {
        return products.map((product, index) => {
            return <ProductItem key={index} product={product} index={index} />;
        });
    }

    return (
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <button type='button' className='btn btn-info mb-20'>
                Thêm sản phẩm
            </button>

            <ProductList products={showProducts(products)} />
        </div>
    );
}

export default ProductListPage;
