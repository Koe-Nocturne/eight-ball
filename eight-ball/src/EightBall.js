import React from 'react';
import './App.css';

class EightBall extends React.Component {
  // static defaultProps = { msg: "Think of a Question", color: "black" };

  constructor(props) {
    super(props);
    this.answers = [{ msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
    ];
    this.state = { msg: "Think of a Question", color: "black" };
    this.handleClick = this.getRandomAnswer.bind(this);
  }
  changeState(key, newValue) {
    this.setState({ [key]: newValue });
  }
  getRandomAnswer() {
    console.log("change change state")
    let index = Math.floor(Math.random() * this.answers.length);
    for (let key in this.answers[index]) {
      this.changeState(key, this.answers[index][key]);
    }
  }


  render() {
    return (
      <button style={{ height: "100%", width: "100%" }} onClick={this.handleClick}>
        <div style={{ backgroundColor: this.state.color, borderRadius: "50%", height: "100vw"}}>
          <div style={{ color: "white", zIndex: 2, padding: "50vh 40vw"}}>
          {this.state.msg}
          </div>
        </div>
      </button>

    );
  }
};


export default EightBall;