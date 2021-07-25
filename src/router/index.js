import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Books from "../components/Books";
import Index from "../components/Index";
import addBook from "../components/AddBook";
import EditBook from "../components/EditBook";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/books',
      name:'Books',
      component:Books,
      children:[
        {
          path:'addBook',
          component:addBook,
          name:'AddBook'
        },
        {
          path:'editBook',
          component:EditBook,
          name:'EditBook'
        }
      ]
    }
  ]
})
