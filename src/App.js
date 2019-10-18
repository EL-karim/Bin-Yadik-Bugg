import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/Dashboard'
import OrderDetails from './components/orders/OrdersDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateOrder from './components/orders/CreateOrders'
import CreateService from './components/services/CreateService'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <switch>
        <Route exact path = '/' component={ Dashboard } />
        <Route path='/order/:id' component={OrderDetails} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/createOrder' component={CreateOrder} />
        <Route path='/createService' component={CreateService} />
        

      </switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
