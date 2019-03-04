import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontawesome/index.js'
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart';
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route  component={Default} />
      </Switch>
       <Modal/>
      <Footer/>
    </React.Fragment>
    );
  }
}

export default App;
