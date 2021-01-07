import React, { Component } from 'react'

export default class ProductProps extends Component {
    // constructor(props) {
    //     super(props)
    //     this.addToCart = this.addToCart.bind(this)
    // }


    // addToCart(e) {
    //     e.preventDefault()
    //     console.log(`${this.props.name} có giá là ${this.props.price} VNĐ`);
    // }

    addToCart2 = (e) => {
        e.preventDefault()
        console.log(`${this.props.name} có giá là ${this.props.price} VNĐ`);
    }



    render() {
        return (
            <div>
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img src= {this.props.img} alt="" />
                        <div className="caption">
                            <h3>{ this.props.name }</h3>
                            <p>
                                { this.props.price } VNĐ
                            </p>
                            <p>
                                <a href="a" className="btn btn-primary" onClick = { this.addToCart2 }>Mua hàng</a>
                                
                            </p>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
