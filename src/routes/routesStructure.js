import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'

let routesStructure = [
    {
        name: 'Dashboard',
        path: '/',
        component: Dashboard,
        exact: true
    },
    {
        name: 'Login',
        path: '/login',
        component: Login,
        exact: true
    }
]

export default routesStructure;