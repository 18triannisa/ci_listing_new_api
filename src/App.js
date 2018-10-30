import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './menu/navbar.js';
import Content from './menu/content.js';
import Trending from './menu/trending.js';
import Footer from './menu/footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <header>
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <Trending/>
            </div>
            <div className="col-8">
              <Content/>
            </div>
          </div>
        </div>
        
        
          {/* { <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> } */}
        </header>
        <div className='footer2'>
        <Footer/>
        </div> 
      </div>
    );
  }
}

export default App;
