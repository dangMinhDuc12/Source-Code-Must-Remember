import React, { Component } from 'react';
import ProductItem from './ProductItem';
import {connect} from 'react-redux';


class Products extends Component {
    render() {
        const {products} = this.props;
        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">

                    {this.showProducts(products)}


                </div>
            </section>
        )
    }

    showProducts(products) {
        let result = '';
        if(products.length > 0) {
            result = products.map((product, index) => (
                < ProductItem
                    key={index}
                    product={product}
                />
            ))
        }


        return result;
    }
}



const mapStateToProps = (state) => ({
    products: state.products
})

const mapDispatchToProps = (dispatch) => ({
    
})


export default connect(mapStateToProps, mapDispatchToProps)(Products)


