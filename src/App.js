import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import HomePage from './components/pages/homePage';
import StyleIdeas from './components/pages/styleIdeas';
import Contact from './components/pages/contact';

//Includes
import './assets/css/common.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Header/>

            <Route exact path='/' component={HomePage} />
            <Route exact path='/StyleIdeas' component={StyleIdeas} />
            <Route exact path='/Contact' component={Contact} />
          <Footer/>

        </div>
      </Router>
    );
  }
}

export default App;
