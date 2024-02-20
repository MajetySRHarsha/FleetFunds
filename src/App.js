import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import Information from './components/information.component';
import MarketInfo from './components/marketInfo.component'
import Product from './components/products.component';
import FormDataComponent from './components/information.component';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/information'}>
              fleetFunds<i class="bi bi-bank"></i>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/information'} role="button">
                    About
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: '10px' }}>
                  <Link className="nav-link" to={'/market-info'} role="button">
                    Market Starategies
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: '10px' }}>
                  <Link className="nav-link" to={'/form'} role="button">
                    Our Products
                  </Link>
                </li>

              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="btn btn-primary" to={'/sign-in'} role="button">
                    Login
                  </Link>
                </li>
                <li className="nav-item" style={{ marginLeft: '10px' }}>
                  <Link className="btn btn-info" to={'/sign-up'} role="button">
                    Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="mt-10">
          <div className="">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/information" element={<Information />} />
              <Route path="/market-info" element={<MarketInfo />} />
              <Route path="/form" element={<FormDataComponent />} />
              <Route path="/products" element={<Product />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
