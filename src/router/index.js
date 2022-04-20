import Vue from 'vue'
import Router from 'vue-router'
import CreateArticle from '../pages/CreateArticle'
import ListArticle from '../pages/ListArticle'
import EditArticle from '../pages/EditArticle'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            redirect: '/articles/index'
        },
        {
            path: '/articles/index',
            name: 'list-article',
            component: ListArticle
        },
        {
            path: '/articles/create',
            name: 'create-article',
            component: CreateArticle
        },
        {
            path: '/articles/:id/edit',
            name: 'edit-article',
            component: EditArticle
        }
    ]

})