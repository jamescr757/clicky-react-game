import React from 'react';
import './style.css';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import CardContainer from "../CardContainer";
import CurrentScore from "../CurrentScore";
import Footer from "../Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentScore: 0
    }
  }

  increaseScore = () => {
    this.setState({
      currentScore: this.state.currentScore + 1
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Jumbotron />
        <CurrentScore currentScore={this.state.currentScore}/>
        <CardContainer increaseScore={this.increaseScore}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
