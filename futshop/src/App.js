import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import React, { Component } from 'react';
import Login from './Login';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router> 
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/HomePage" exact component={<HomePage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
