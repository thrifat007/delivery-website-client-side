import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Shared/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Shared/Footer';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Login from './components/Login/Login';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Allitems from './components/Allitems/Allitems';
import SingleItem from './components/SingleItem/SingleItem';
import ItemDetails from './components/ItemDetails/ItemDetails';
import MyOrders from './components/MyOrders/MyOrders';

import AddService from './components/AddService/AddService';
import ManageAllService from './components/ManageAllService/ManageAllService';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/login'>
              <Login></Login>
            </Route>

            <PrivateRoute exact path='/allitems'>
              <Allitems></Allitems>
            </PrivateRoute>

            <PrivateRoute exact path='/allitems/:id'>
              <ItemDetails></ItemDetails>
            </PrivateRoute>

            <PrivateRoute exact path='/manageallservice'>
              <ManageAllService></ManageAllService>
            </PrivateRoute>

            <PrivateRoute exact path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>

            <Route exact path='/myorders'>
              <MyOrders></MyOrders>
            </Route>

            <Route exact path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </Route>

            <Route exact path='/about'>
              <About></About>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
