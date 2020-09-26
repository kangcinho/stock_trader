import Home from '../components/Home/Home'
import Portfolio from '../components/Portfolio/Portfolio'
import Stocks from '../components/Stocks/Stocks'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/portfolio',
        component: Portfolio,
        name: 'portfolio'
    },
    {
        path: '/stocks',
        component: Stocks,
        name: 'stocks'
    }
]

export default routes;