import React, { useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';



function Products() {
    const [products] = useState([
        {
            id: 1,
            name: 'Iphone 12',
            price: 100,
            slug: 'Iphone'
        },
        {
            id: 2,
            name: 'Samsung 12',
            price: 200,
            slug: 'Samsung'
        },
        {
            id: 3,
            name: 'Realme 12',
            price: 300,
            slug: 'Realme'
        },
    ]);

    const match = useRouteMatch();
    const location = useLocation();

    console.log(location);


    const result = products.map((product, index) => (
        <Link key={index} to={`${match.url}/${product.slug}`}>
            <li className="list-group-item" >
                {product.id} - {product.name} - {product.price}$
            </li>
        </Link>
    ))



    return (
        <div className="container">
            <h1>Danh sách sản phẩm</h1>

            <div className="row">

                <ul className="list-group">
                    {result}
                </ul>

            </div>


        </div>


    )
}

export default Products
