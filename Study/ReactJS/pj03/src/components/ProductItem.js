import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class ProductItem extends Component {
    render() {
        const { product} = this.props
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src = {product.img}
                            className="img-fluid" alt={product.name} />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                        
                                {this.showRating(product.rating)}
                            
                            
                        </ul>
                        <p className="card-text">
                            {product.des}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a 
                                href="/#" 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top" 
                                title="" 
                                data-original-title="Add to Cart"
                                onClick = {(e) => {
                                    e.preventDefault();
                                    this.props.onAddToCart(product);
                                    this.props.onChangeMessage('Mua hàng thành công');
                                }}
                                
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    

    showRating(rating) {
        let result = [];
        for(let i = 0; i < rating; i++) {
            result.push(<li key = {i}>
                            <i  className="fa fa-star"></i>
                        </li>
                            
                        )
        }
        for(let j = 0; j < (5-rating) ; j++) {
            result.push(<li key = {5-j}>
                            <i  className="fa fa-star-o"></i>
                        </li>)
        }
        return result;
        
    }
}




const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    onAddToCart: (product) => dispatch(actions.addToCart(product, 1)), 
    onChangeMessage: (message) => dispatch(actions.changeMessage(message))
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)