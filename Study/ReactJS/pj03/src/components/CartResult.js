import React, { Component } from 'react'

export default class CartResult extends Component {
    render() {
        const {cart} = this.props;
        
        return (
            <tr>
                <td colSpan="3">{this.showMessage(cart)}</td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>{this.showTotalAmount(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }

    showTotalAmount(cart) {
        return cart.reduce((acc, item, index) => (acc += (item.product.price * item.quantity)), 0);
        
    }
    showMessage = (cart) => {
        if(!cart.length) {
            return 'Chưa có sản phẩm nào trong giỏ hàng'
        }
    }
}



