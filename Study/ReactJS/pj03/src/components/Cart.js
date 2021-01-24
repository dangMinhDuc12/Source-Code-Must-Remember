import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import {connect} from 'react-redux';

class Cart extends Component {
    render() {
        const {cart} = this.props;
        
        return (
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showCartItem(cart)}

                            <CartResult cart = {cart} />
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }

    showCartItem(cart) {
        let result;
        if(cart.length > 0) {
            result = cart.map((item, index) => (
                <CartItem 
                    key = {index}
                    item = {item}


                />
            ))
        }

        return result;
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = dispatch => ({

});



export default connect(mapStateToProps, mapDispatchToProps) (Cart);