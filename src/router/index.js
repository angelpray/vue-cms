import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member/Member.vue'
import Shopcart from '@/components/Shopcart/Shopcart.vue'
import Search from '@/components/Search/Search.vue'
import NewsList from '@/components/News/NewsList.vue'
import NewsDetail from '@/components/News/NewsDetail.vue'
import PhotoList from '@/components/PhotoList/PhotoList.vue'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/member',
    name: 'Member',
    component: Member
  }, {
    path: '/shopcart',
    name: 'Shopcart',
    component: Shopcart
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/news/list',
    name: 'NewsList',
    component: NewsList
  }, {
    path: '/news/detail/:id',
    name: 'NewsDetail',
    component: NewsDetail
  }, {
    path: '/photo/list',
    name: 'PhotoList',
    component: PhotoList
  }]
})
