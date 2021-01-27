import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import { Route } from 'react-router-dom';
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage />,
    },
    {
        path: '/product-list',
        exact: true,
        component: () => <ProductListPage />,
    },
    {
        path: '/product/add',
        exact: true,
        component: () => <ProductActionPage />,
    },
    {
        path: '/product/:id/edit',
        exact: true,
        component: () => <ProductActionPage />,
    },
    {
        path: '',
        exact: true,
        component: () => <NotFoundPage />,
    },
];

function createRoutes() {
    return routes.map((route, index) => (
        <Route path={route.path} exact={route.exact} key={index} component={route.component} />
    ));
}

export default createRoutes;
