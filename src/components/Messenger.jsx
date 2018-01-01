import React from 'react';
import Message from './Message';


class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const userMessage = {
      text: this.state.text,
      user: 'The User',
      id: Date.now(),
    };

    this.setState(prevState => ({
      messages: prevState.messages.concat(userMessage),
      text: '',
    }));
  }
  render() {
    return (
      <div className="panel messenger">
        <div className="panel-header">
          <div className="panel-title">Messenger</div>
        </div>
        <div className="divider" />
        <div className="panel-body message-area">
          {this.state.messages.map((message, i) => (
            <Message
              key={message.id}
              sender={!(message.user === 'The Bot')}
              repeat={(i > 0) && this.state.messages[i - 1].user === message.user}
              username={message.user}
              img="/favicon.ico"
              text={message.text}
            />
          ))}
        </div>
        <div className="divider" />
        <div className="panel-footer input">
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input type="text" className="form-input" placeholder="User Message" onChange={this.handleChange} value={this.state.text} />
            <button className="btn btn-primary input-group-btn">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;
