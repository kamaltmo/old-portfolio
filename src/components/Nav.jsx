import React from 'react';
import Overlay from './Overlay';
import Social from './Social';

const Nav = () => (
  <React.Fragment>
    <div className="column col-4 show-sm">
      <Overlay />
    </div>
    <div className="myText column col-5-md col-8-sm">
      <div className="eyntk">
        <h1 className="eyntk-r1">Kamal Osman</h1>
        <h1 className="eyntk-r2 hide-sm">SOFTWARE DEVELOPER | ASK ABOUT ME:</h1>
      </div>
      <Social className="hide-sm" />
    </div>
  </React.Fragment>
);

export default Nav;
