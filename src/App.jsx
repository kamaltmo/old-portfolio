import React, { Fragment } from 'react';
import './App.css';
import Messenger from './components/Messenger';
import Message from './components/Message';

const text = 'Earths Mightiest Heroes joined forces to take on threats that' +
'were too big for any one hero to tackle...' +
'Earths Mightiest Heroes joined forces to take on threats that' +
'were too big for any one hero to tackle...' +
'Earths Mightiest Heroes joined forces to take on threats that' +
'were too big for any one hero to tackle...' +
'Earths Mightiest Heroes joined forces to take on threats that' +
'were too big for any one hero to tackle...';

const App = () => (
  <Fragment>
    <header className="pt-2">
      <div className="divider text-center" data-html data-content="Kamal Osman" />
    </header>
    <div className="container pt-2">
      <div className="columns">
        <div className="column col-6 col-lg-8 col-md-10 col-sm-12 col-mx-auto">
          <Messenger>
            <Message username="The Bot" img="/favicon.ico">
              {text}
            </Message>
            <Message sender username="The User" img="/favicon.ico">
              {text}
            </Message>
            <Message username="The Bot" img="/favicon.ico">
              {text}
            </Message>
          </Messenger>
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;
