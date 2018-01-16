import React from 'react';

class Overlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick} className="burger">
          <div className="burgerLine" />
          <div className="burgerLine" />
          <div className="burgerLine" />
        </button>
        <div className={`modal modal-lg modal-overlay ${this.state.open ? 'active' : ''}`} id="modal-id">
          <button onClick={this.handleClick} className="modal-overlay" aria-label="Close" />
          <div className="modal-container">
            <div className="modal-header">
              <button onClick={this.handleClick} className="btn btn-clear float-left" />
            </div>
            <div className="modal-body">
              <div className="content" >
                <div className="mobileText column col-12">
                  <div className="eyntk">
                    <h1 className="eyntk-r1">Kamal Osman</h1>
                    <h1 className="eyntk-r2">SOFTWARE DEVELOPER | ASK ABOUT ME:</h1>
                  </div>
                  <a href="https://twitter.com/_kamaltmo" className="fa fa-twitter" />
                  <a href="https://www.instagram.com/_kamaltm/" className="fa fa-instagram" />
                  <a href="https://www.linkedin.com/in/kamal-osman-53191989/" className="fa fa-linkedin" />
                  <a href="https://github.com/kamaltmo" className="fa fa-github" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Overlay;
