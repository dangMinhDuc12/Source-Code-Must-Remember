import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import LogIn from './components/LogIn';
import ProductItem from './components/ProductItem';
import { Route } from 'react-router-dom';


const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        component: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        component: () => <Contact />
    },
    {
        path: '/products',
        exact: true,
        component: ({ match }) => <Products match={match} />
    },
    {
        path: '/products/:slug',
        exact: true,
        component: () => <ProductItem />
    },
    {
        path: '/login',
        exact: false,
        component: () => <LogIn />
    },
    {
        path: '',
        exact: false,
        component: () => <NotFound />
    },

];


function createRoutes() {
    return routes.map((route, index) => (
        <Route path={route.path} exact={route.exact} key={index} component={route.component} />
    ))
}




export default createRoutes;