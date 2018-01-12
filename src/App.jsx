import React from 'react';
import './App.css';
import Messenger from './components/Messenger';


const App = ({ bot, id }) => (
  <div className="app">
    <div className="background">
      <div className="one" />
      <div className="two" />
      <div className="three" />
    </div>
    <div className="container pt-2">
      <div className="columns">
        <div className="column col-4 hide-md col-ml-auto">
          <p className="info text-bold">
            KAMAL
            OSMAN
            <br />
            SOFTWARE
            DEVELOPER
            <br />
            ASK ABOUT ME →
          </p>
        </div>
        <div className="column col-md-12 show-md text-center col-ml-auto">
          <p className="info text-bold text-justify text-break">
            KAMAL
            OSMAN
            <br />
            SOFTWARE
            DEVELOPER
            <br />
            ASK ABOUT ME ↓
          </p>
        </div>
        <div className="column col-6 col-lg-8 col-md-10 col-sm-12 col-mx-auto">
          <Messenger bot={bot} id={id} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
