import React from 'react';
import './App.css';
import Messenger from './components/Messenger';
import Nav from './components/Nav';


const App = ({ bot, id }) => (
  <div className="app">
    <div className="background">
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </div>
    <div className="container pt-2">
      <div className="columns">
        <Nav />
        <div className="column col-6 col-md-7 col-sm-12 col-mx-auto">
          <Messenger bot={bot} id={id} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
