import React from 'react';
import Background from './components/Background';
import Messenger from './components/Messenger';
import Nav from './components/Nav';
import './App.css';

const App = ({ bot, id }) => (
  <div className="app">
    <Background />
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
