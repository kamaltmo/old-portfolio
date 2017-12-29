import React from 'react';

const Messenger = ({ children }) => (
  <div className="panel messenger">
    <div className="panel-header">
      <div className="panel-title">Messenger</div>
    </div>
    <div className="divider" />
    <div className="panel-body message-area">
      {children}
    </div>
    <div className="divider" />
    <div className="panel-footer input">
      <div className="input-group">
        <input type="text" className="form-input" placeholder="User Message" />
        <button className="btn btn-primary input-group-btn">Send</button>
      </div>
    </div>
  </div>
);


export default Messenger;
