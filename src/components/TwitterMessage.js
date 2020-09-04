import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInputChange}/>
      <p>{this.props.maxChars - this.state.message.length}</p>
      </div>
    );
  }

  handleInputChange = (event) => {
    this.setState({
      message: event.target.value,
    })
  }
}

export default TwitterMessage;
