import React, { Component } from 'react';
import Header from './components/headerComponent';
import Form from './components/formComponent';
import MovieTable from './components/movieComponent';
import MovieBox from './components/movieBoxComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="AppContainer" className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div id="videoContainer" className="col-lg-8">
              
            </div>
            <div id="tableContainer" className="col-lg-4">
              
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
