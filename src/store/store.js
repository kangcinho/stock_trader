import Vue from 'vue'
import Vuex from 'vuex'

import portfolio from './modules/portfolio/portfolio'
import stock from './modules/stock/stock'

Vue.use(Vuex);


const store = new Vuex.Store({
    modules:[
        stock,
        portfolio
    ]
})

export default store;