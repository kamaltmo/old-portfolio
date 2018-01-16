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
          <button className="modal-overlay" aria-label="Close" />
          <div className="modal-container">
            <div className="modal-header">
              <button onClick={this.handleClick} className="btn btn-clear float-right" />
              <div className="modal-title h5">Modal title</div>
            </div>
            <div className="modal-body">
              <div className="content" >
                This is the content inside the modal.
                Lorem ipsum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus leo,
                dictum in
                vehicula sit amet, feugiat tempus tellus. Duis quis sodales risus. Etiam
                 euismod ornare
                consequat.
                Climb leg rub face on everything give attitude nap all day for under the bed. Chase
                mice attack feet but rub face on everything hopped up on goofballs.
                Cupcake ipsum
              </div>
            </div>
            <div className="modal-footer">
              ...
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Overlay;
