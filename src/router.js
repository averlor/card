import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue'
import Book from './views/Book.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/book/:id',
      name: 'book',
      props: true,
      component: Book
    }
  ]
})
