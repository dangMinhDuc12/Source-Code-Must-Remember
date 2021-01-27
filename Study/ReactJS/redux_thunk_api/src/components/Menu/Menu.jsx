import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Quản lý sản phẩm',
        to: '/product-list',
        exact: true,
    },
];

function MenuLink({ label, to, activeOnlyWhenExact }) {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact,
    });
    return (
        <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    );
}

function showMenuLink(menus) {
    return menus.map((menu, index) => (
        <MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />
    ));
}

function Menu() {
    return (
        <div className='navbar navbar-default'>
            <a className='navbar-brand' href='/#'>
                Call API
            </a>
            <ul className='nav navbar-nav'>{showMenuLink(menus)}</ul>
        </div>
    );
}

export default Menu;
