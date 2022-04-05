import { Route, Switch } from 'react-router-dom'

import ChangePassword from '../pages/changePassword'
import ChangeProfile from '../pages/changeProfile'
import Customers from '../pages/Customers'
import Dashboard from '../pages/Dashboard'
import IncomeDetail from '../pages/IncomeDetail'
import Login from '../pages/login'
import Products from '../pages/Products';
import React from 'react'
import Register from '../pages/register'
import SelfDepositeAmount from '../pages/selfDepositeAmount'
import TeamDepositeAmount from '../pages/teamDepositeAmount'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact 
            component={Dashboard}/>
            <Route path='/myDirect' exact 
            component={Customers}/>
            <Route path='/incomeDetail' exact 
            component={IncomeDetail} />
            <Route path='/selfDepositeAmount' exact 
            component={SelfDepositeAmount} />
            <Route path='/teamDepositeAmount' exact 
            component={TeamDepositeAmount} />
            <Route path='/changePassword' exact 
            component={ChangePassword} />
            <Route path='/changeProfile'
            component={ChangeProfile} />
            <Route path='/genelogyTree'
            component={Products} />
            {/* <Route path='/login'
            component={Login} />
            <Route path='/register'
            component={Register} /> */}

        </Switch>
    )
}

export default Routes
