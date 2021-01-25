import React from 'react';
import './Contact.css';
import { useParams, useHistory, Link } from "react-router-dom";

function ProductItem() {
    let { slug } = useParams();
    const history = useHistory();

    // function redirect() {
    //     history.push('/products');
    // }

    return (
        // <h1 onClick={redirect}>Đây là sản phẩm {slug}</h1>
        <Link to="/products" exact="true" className="text">Đây là sản phẩm {slug}</Link>
    )




}

export default ProductItem
