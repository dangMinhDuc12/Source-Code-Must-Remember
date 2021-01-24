import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class CartItem extends Component {


    render() {
        let {item} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.img}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                        className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
                        onClick={() => {
                            this.props.onUpdateQuantity(item.product, -1);
                            this.props.onChangeMessage('Cập nhật giỏ hàng thành công');
                        }}

                
                >
                            <a 
                            href="/#"

                            >—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                btn-rounded waves-effect waves-light"
                onClick={() => {
                    this.props.onUpdateQuantity(item.product, 1);
                    this.props.onChangeMessage('Cập nhật giỏ hàng thành công');
                }}
                >
                            <a 
                            href="/#"

                            >+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubToTal(item.product.price, item.quantity)}$</td>
                <td>
                    <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    title="" 
                    data-original-title="Remove item"
                    onClick = {() => {
                        this.props.onDelete(item.product);
                        this.props.onChangeMessage('Xóa sản phẩm thành công')
                    }}
                    
                    >
                        X
                    </button>
                </td>
            </tr>
        )
    }

    showSubToTal(price, quantity) {
        return price * quantity
    }
}



const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    onDelete: (product) => dispatch(actions.removeProductInCart(product)),
    onChangeMessage: (message) => dispatch(actions.changeMessage(message)),
    onUpdateQuantity: (product, quantity) => dispatch(actions.updateQuantity(product, quantity))
})


export default connect(mapStateToProps, mapDispatchToProps)(CartItem)