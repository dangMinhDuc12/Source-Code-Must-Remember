import React, { useEffect } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProducts } from '../../actions/products';

function ProductListPage() {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getProducts() {
            const res = await fetch(' http://localhost:3004/products');
            const data = await res.json();
            dispatch(fetchProducts(data));
        }

        getProducts();
    }, []);

    async function onDelete(id) {
        if (window.confirm('Bạn có chắc chắn muốn xóa')) {
            await fetch(`http://localhost:3004/products/${id}`, {
                method: 'DELETE',
            });

            dispatch(deleteProducts(id));
        }
    }

    function showProducts(products) {
        return products.map((product, index) => {
            return <ProductItem key={index} product={product} index={index} onDelete={onDelete} />;
        });
    }

    return (
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <Link to='/product/add' className='btn btn-info mb-20'>
                Thêm sản phẩm
            </Link>

            <ProductList products={showProducts(products)} />
        </div>
    );
}

export default ProductListPage;
