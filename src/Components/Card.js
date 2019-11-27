import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAnswer: false };
    this.handleShowClick = this.handleShowClick.bind(this);
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
  }
  handleShowClick() {
    this.setState({ showAnswer: true });
  }
  handleYesClick() {
    return;
  }
  handleNoClick() {
    return;
  }
  render() {
    let frontArr = [];
    for (let key in this.props.data.side1) {
      frontArr.push(this.props.data.side1[key]);
    }

    let backArr = [];
    for (let key in this.props.data.side2) {
      backArr.push(this.props.data.side2[key]);
    }

    const front = (
      <div>
        <p>
          Front:{" "}
          {frontArr.map((front, index) => {
            return <span key={index}>{front} </span>;
          })}
        </p>
      </div>
    );

    const back = (
      <div>
        <p>
          Back:{" "}
          {backArr.map((back, index) => {
            return <span key={index}>{back} </span>;
          })}
        </p>
      </div>
    );

    const showButton = (
      <button onClick={this.handleShowClick}>Show Answer</button>
    );
    const feedbackButtons = (
      <div>
        <button onClick={this.handleYesClick}>Yes</button>
        <button onClick={this.handleNoClick}>No</button>
      </div>
    );

    if (this.state.showAnswer) {
      return (
        <div>
          <p>{front}</p>
          <p>{back}</p>
          <p>{feedbackButtons}</p>
        </div>
      );
    } else {
      return (
        <div>
          {front}
          {showButton}
        </div>
      );
    }
  }
}

export default Card;
