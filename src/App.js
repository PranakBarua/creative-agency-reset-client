import logo from './logo.svg';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddReview from './components/Add/AddReview/AddReview';
import AddService from './components/Add/AddService/AddService';
import Shipment from './components/Add/Shipment/Shipment';
import AddAdmin from './components/Add/AddAdmin/AddAdmin';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
export const userContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser]=useState({
    isSignedIn:false
  })
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <PrivateRoute path="/shipment/:title">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
           <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
