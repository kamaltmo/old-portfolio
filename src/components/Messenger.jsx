import React from 'react';
import Message from './Message';
import Incoming from './Incoming';

class Messenger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], text: '', incoming: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    const lastMessage = document.getElementsByClassName('message')[document.getElementsByClassName('message').length - 1];
    if (lastMessage) lastMessage.scrollIntoView();
  }

  async getResponse(convoID, text) {
    const res = await fetch(`http://localhost:4000/converation/${convoID}/send/${text}`);

    const resMessages = await res.json();
    const botMessages = [];

    resMessages.map(message => (
      botMessages.push({
        text: message.content,
        user: 'The Bot',
        id: Date.now(),
      })
    ));

    this.setState(prevState => ({
      messages: [...prevState.messages, ...botMessages],
      incoming: false,
    }));
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
      incoming: true,
    }));

    this.getResponse('1', userMessage.text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="panel messenger">
        <div className="panel-header">
          <div className="panel-title">Messenger</div>
        </div>
        <div className="divider" />
        <div className="panel-body message-area">
          <Message
            key="OG"
            username="The Bot"
            img="/favicon.ico"
            text="Hello! Welcome to Kamal's website, Im here to assist you :)"
          />
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
          {this.state.incoming && <Incoming />}
        </div>
        <div className="divider" />
        <div className="panel-footer input">
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input autoFocus type="text" className="form-input" placeholder="User Message" onChange={this.handleChange} value={this.state.text} />
            <button className="btn btn-primary input-group-btn">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Messenger;
