import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      
          <nav className="navbar navbar-inverse">
            <a href="https://www.google.com/" className="navbar-brand" >Bài 2 Component</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="https://www.google.com/" >Trang chủ</a>
              </li>
              <li>
                <a href="https://www.google.com/">Danh mục</a>
              </li>
            </ul>
          </nav>
      
    )
  }
}
