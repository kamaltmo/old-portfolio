import React from 'react';
import Overlay from './Overlay';

const Nav = () => (
  <React.Fragment>
    <div className="myText column col-5 hide-sm">
      <div className="eyntk">
        <h1 className="eyntk-r1">Kamal Osman</h1>
        <h1 className="eyntk-r2">SOFTWARE DEVELOPER | ASK ABOUT ME:</h1>
      </div>
      <a href="https://twitter.com/_kamaltmo" className="fa fa-twitter" />
      <a href="https://www.instagram.com/_kamaltm/" className="fa fa-instagram" />
      <a href="https://www.linkedin.com/in/kamal-osman-53191989/" className="fa fa-linkedin" />
      <a href="https://github.com/kamaltmo" className="fa fa-github" />
    </div>
    <div className="column col-4 show-sm">
      <Overlay />
    </div>
    <div className="myText column col-8 show-sm">
      <div className="eyntk">
        <h1 className="eyntk-r1">Kamal Osman</h1>
      </div>
    </div>
  </React.Fragment>
);

export default Nav;
