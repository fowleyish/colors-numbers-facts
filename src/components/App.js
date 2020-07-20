import React, { Component } from 'react';
import randomColor from 'randomcolor';
import Buttons from './Buttons';
import axios from 'axios';

class App extends Component {
  state = {
    clickCount: 0,
    bgColor: {
      backgroundColor: randomColor()
    },
    fact: null
  }

  componentDidMount = () => {
    axios.get(`http://numbersapi.com/${this.state.clickCount}`)
    .then(res => {
      this.setState({ fact: res.data })
    })
  }

  handleClick = () => {
    const clickCount = this.state.clickCount + 1;
    const bgColor = this.setColor();
    this.setFact();
    this.setState({ clickCount, bgColor });
  }

  handleReset = () => {
    this.setState({
      clickCount: 0,
      bgColor: {
        backgroundColor: randomColor()
      },
      fact: this.setFact(0)
    });
  }

  setFact = (count = this.state.clickCount + 1) => {
    axios.get(`http://numbersapi.com/${count}`)
    .then(res => {
      this.setState({ fact: res.data });
    })
  }

  setColor = () => {
    const bgColor = {
      backgroundColor: randomColor(),
      transitionDuration: '0.4s'
    };
    return bgColor;
  }

  render() {
    return (
      <React.Fragment>
        <Buttons className="myButtons" resetCount={this.handleReset}/>
        <div className="App" onClick={this.handleClick} style={this.state.bgColor}>
          <h1>{this.state.clickCount}</h1>
          <p>{this.state.fact}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default App;