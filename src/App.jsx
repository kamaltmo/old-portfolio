import React, { Fragment } from 'react';
import './App.css';

const App = () => (
  <Fragment>
    <header className="pt-2">
      <div className="divider text-center" data-content="Kamal Osman" />
    </header>
    <div className="container pt-2">
      <div className="columns">
        <div className="column col-6 col-md-8 col-sm-12 col-mx-auto">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">Messenger</div>
            </div>
            <div className="panel-nav" />
            <div className="divider" />
            <div className="panel-body message-area">
              <div className="tile">
                <div className="tile-content">
                  <p className="tile-title text-right">The Bot</p>
                  <p className="tile-subtitle text-gray text-right">
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  </p>
                </div>
                <div className="tile-icon">
                  <figure className="avatar avatar-lg">
                    <img src="img/avatar-2.png" alt="Avatar" />
                  </figure>
                </div>
              </div>
              <div className="tile">
                <div className="tile-icon">
                  <figure className="avatar avatar-lg">
                    <img src="img/avatar-2.png" alt="Avatar" />
                  </figure>
                </div>
                <div className="tile-content">
                  <p className="tile-title">The User</p>
                  <p className="tile-subtitle text-gray">
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  </p>
                </div>
              </div>
              <div className="tile">
                <div className="tile-icon">
                  <figure className="avatar avatar-lg">
                    <img src="img/avatar-2.png" alt="Avatar" />
                  </figure>
                </div>
                <div className="tile-content">
                  <p className="tile-title">The User</p>
                  <p className="tile-subtitle text-gray">
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  </p>
                </div>
              </div>
              <div className="tile">
                <div className="tile-icon">
                  <figure className="avatar avatar-lg">
                    <img src="img/avatar-2.png" alt="Avatar" />
                  </figure>
                </div>
                <div className="tile-content">
                  <p className="tile-title">The User</p>
                  <p className="tile-subtitle text-gray">
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  Earth's Mightiest Heroes joined forces to take on threats that
                  were too big for any one hero to tackle...
                  </p>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="panel-footer">
              <div className="input-group">
                <input type="text" className="form-input" placeholder="User Message" />
                <button className="btn btn-primary input-group-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default App;
