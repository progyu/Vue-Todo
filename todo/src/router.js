import Vue from 'vue'
import Router from 'vue-router'
import Todo from './components/Todo'
import Home from './components/Home'

Vue.use(Router)

const About = () => {
    return import(/* webpackChunkName: "about" */ './components/About');
}

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'todo',
            component: Todo,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        }
    ]
})
