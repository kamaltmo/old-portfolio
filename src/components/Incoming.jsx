import React from 'react';

const Incoming = () => (
  <div className="tile">
    <div className="tile-content">
      <div className="tile-subtitle message" style={{ borderTopRightRadius: '0', float: 'right' }}>
        <div className="spinner">
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      </div>
    </div>
  </div>
);

export default Incoming;
