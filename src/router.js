import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue'
import Index from '@/pages/Index'
import Product from '@/pages/Product'
import Detail from '@/pages/Detail'
import Order from '@/pages/Order'
import Cart from '@/pages/Cart'
import OrderConfirm from '@/pages/OrderConfirm'
import OrderPay from '@/pages/OrderPay'
import OrderList from '@/pages/OrderList'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            children: [{
                    path: 'index',
                    component: Index,
                    name: 'index'
                },
                {
                    path: 'product/:id',
                    component: Product,
                    name: 'product'
                },
                {
                    path: 'detail/:id',
                    component: Detail,
                    name: 'detail'
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay
                },
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList
                }
            ]
        }
    ]
})