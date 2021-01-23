import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class Products extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">

                    <ProductItem />
                    <ProductItem />
                    <ProductItem />


                </div>
            </section>
        )
    }
}



