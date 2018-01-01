import React from 'react';

const Icon = ({ img, repeat }) => (
  <div className="tile-icon">
    <figure className="avatar avatar-lg" style={repeat ? { visibility: 'hidden' } : {}}>
      <img src={img} alt="Avatar" />
    </figure>
  </div>
);

const Message = ({
  sender,
  repeat,
  username,
  img,
  text,
}) => {
  const borderStyle = sender ? { borderTopLeftRadius: '0' } : { borderTopRightRadius: '0' };

  return (
    <div className="tile">
      {sender && <Icon img={img} repeat={repeat} />}
      <div className="tile-content">
        {!repeat && <p className={`tile-title ${!sender && 'text-right'}`}>{username}</p>}
        <p className={`tile-subtitle message ${!sender && 'text-right'}`} style={borderStyle}>{text}</p>
      </div>
      {!sender && <Icon img={img} repeat={repeat} />}
    </div>
  );
};


export default Message;
