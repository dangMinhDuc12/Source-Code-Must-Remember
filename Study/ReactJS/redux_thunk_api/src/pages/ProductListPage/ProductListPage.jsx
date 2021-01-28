import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductListPage() {
    // const products = useSelector((state) => state.products);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await fetch('http://localhost:3004/products');
            const data = await res.json();
            setProducts(data);
        }

        getData();
    }, []);

    async function onDelete(id) {
        if (window.confirm('Bạn có chắc chắn muốn xóa')) {
            await fetch(`http://localhost:3004/products/${id}`, {
                method: 'DELETE',
            });
            const indexToDelete = findIndex(products, id);
            const newProducts = [...products];
            newProducts.splice(indexToDelete, 1);
            setProducts(newProducts);
        }
    }

    function findIndex(products, id) {
        let result;
        products.forEach((item, index) => {
            if (item.id === id) {
                result = index;
            }
        });
        return result;
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
