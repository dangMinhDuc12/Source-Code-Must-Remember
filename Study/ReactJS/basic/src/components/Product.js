import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="thumbnail">
              <img src="https://dienthoaimoi.vn/images/news/2020/10/14/original/tiet-lo-moi-pin-iphone-12_1602643297.jpg" alt="" />
              <div className="caption">
                <h3>Iphone 12</h3>
                <p>
                  20.000.000
                </p>
                
              </div>
              <button type="button" className="btn btn-success">Mua hàng</button>
          </div>
          
        </div>

        
       
      </div>

          

    
      
    );
  }
}
