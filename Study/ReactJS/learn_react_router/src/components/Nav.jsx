import React from 'react';
import { Link, Route } from 'react-router-dom';



//Custom Link trong react-router
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active abc' : '';
                return (
                    <li className={`my-li ${active}`}>
                        <Link to={to}  >{label}</Link>
                    </li>
                )
            }}

        />
    )
}


const menus = [
    {
        label: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        label: 'Trang about',
        to: '/about',
        exact: false
    },
    {
        label: 'Trang contact',
        to: '/contact',
        exact: false
    },
    {
        label: 'Trang sản phẩm',
        to: '/products',
        exact: false
    },
    {
        label: 'Đăng nhập',
        to: '/login',
        exact: false
    },

];


function showMenu(menus) {
    return menus.map((menu, index) => {
        return (<MenuLink label={menu.label} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />)
    })
}




function Nav() {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                {/* <li className="active">
                <NavLink to="/" exact >Trang chủ</NavLink>
            </li>
            <li>
                <NavLink to="/about" >Trang about</NavLink>
            </li>
            <li>
                <NavLink to="/contact" >Trang contact</NavLink>
            </li> */}

                {showMenu(menus)}
            </ul>
        </nav>
    )
}

export default Nav
