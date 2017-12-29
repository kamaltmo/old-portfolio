import React from 'react';

const Icon = ({ img }) => (
  <div className="tile-icon">
    <figure className="avatar avatar-lg">
      <img src={img} alt="Avatar" />
    </figure>
  </div>
);

const Message = ({
  sender,
  username,
  img,
  children,
}) => (
  <div className="tile">
    {sender && <Icon img={img} />}
    <div className="tile-content">
      <p className={`tile-title ${!sender && 'text-right'}`}>{username}</p>
      <p className={`tile-subtitle message ${!sender && 'text-right'}`}>{children}</p>
    </div>
    {!sender && <Icon img={img} />}
  </div>
);


export default Message;
