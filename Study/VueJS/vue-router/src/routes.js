import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserBegin from './components/user/UserBegin.vue';

export const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User, children: [{ path: 'begin', component: UserBegin }] },
    { path: '/user/:id', component: UserDetail },
    { path: '/error', redirect: '/' },
];
