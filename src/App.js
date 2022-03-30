import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Admin from './Components/Dashboard/Admin/Admin/Admin';
import BookingList from './Components/Dashboard/Traveller/BookingList/BookingList';
import AddReview from './Components/Dashboard/Traveller/AddReview/AddReview';
import OrderList from './Components/Dashboard/Admin/OrderList/OrderList';
import Manage from './Components/Dashboard/Admin/Manage/Manage';
import AddAdmin from './Components/Dashboard/Admin/AddAdmin/AddAdmin';
import AboutUs from './Components/About/AboutUs';
import ContactUsSection from './Components/ContactUsSection/ContactUsSection';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import ReviewSection from './Components/ReviewSection/ReviewSection';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
export const userContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  console.log(loggedInUser, 'from app')
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/servicesSection">
            <ServicesSection />
          </Route>
          <Route path="/serviceDetails">
            <ServiceDetails />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/contactUs">
            <ContactUsSection />
          </Route>
          <Route path="/reviews">
            <ReviewSection />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createAccout">
            <CreateAccount />
          </Route>
          <PrivateRoute path="/dashboard/book/:id">
            <Dashboard />
          </PrivateRoute>
          <Route path="/dashboard/book">
            <Dashboard />
          </Route>
          <Route path="/dashboard/bookingList">
            <BookingList />
          </Route>
          <Route path="/dashboard/addReview">
            <AddReview />
          </Route>
          <PrivateRoute path="/admin/addService">
            <Admin />
          </PrivateRoute>
          <Route path="/admin/orderList">
            <OrderList />
          </Route>
          <Route path="/admin/manage">
            <Manage />
          </Route>
          <Route path="/admin/makeAdmin">
            <AddAdmin />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
