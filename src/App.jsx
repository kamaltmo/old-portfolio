import React, { Fragment } from 'react';
import './App.css';
import Messenger from './components/Messenger';

const App = () => (
  <Fragment>
    <header className="pt-2">
      <div className="divider text-center" data-html data-content="Kamal Osman" />
    </header>
    <div className="container pt-2">
      <div className="columns">
        <div className="column col-6 col-lg-8 col-md-10 col-sm-12 col-mx-auto">
          <Messenger />
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;
