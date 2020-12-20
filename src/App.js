import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
// import ClientDashboard from './components/Dashboard/Dashboard/ClientDashboard';
// import AdminDashboard from './components/Dashboard/Dashboard/AdminDashboard';
import Review from './components/Client/Review/Review';
import AddService from './components/Admin/AddService/AddService';
import Order from './components/Client/Order/Order';
import OrderList from './components/Admin/OrderList/OrderList';
import ServiceList from './components/Client/ServiceList/ServiceList';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
      <Router>
        <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/service-list">
              <ServiceList></ServiceList>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/order-list">
              <OrderList></OrderList>
            </Route>
            <Route path="/add-service">
              <AddService></AddService>
            </Route>
            <Route path="/make-admin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
