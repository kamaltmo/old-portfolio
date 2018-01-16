import React from 'react';

const Icon = ({ img, repeat, bot }) => (
  <div className="tile-icon">
    <figure className="avatar avatar-lg" style={repeat ? { visibility: 'hidden' } : {}}>
      { bot ? <div id="ball"> <div id="eye" /> </div> : <img src={img} alt="Avatar" /> }
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
  const borderStyle = sender ? { borderTopLeftRadius: '0' } : { borderTopRightRadius: '0', float: 'right' };

  return (
    <div className="tile">
      {sender && <Icon img={img} repeat={repeat} />}
      <div className="tile-content">
        {!repeat && <p className={`tile-title ${!sender && 'text-right'}`}>{username}</p>}
        <p className="tile-subtitle message" style={borderStyle}>{text}</p>
      </div>
      {!sender && <Icon img={img} repeat={repeat} bot />}
    </div>
  );
};


export default Message;
