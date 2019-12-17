import React from 'react';
import './style.css';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import CardContainer from "../CardContainer";
import Score from "../Score";
import Footer from "../Footer";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highScore: 0,
      clickedArr: []
    }
  }

  handleCardClick = (id) => {

    if (!this.state.clickedArr.includes(id)) {

      this.state.clickedArr.push(id);
      const newClickedArr = this.state.clickedArr;

      this.setState({
        clickedArr: newClickedArr
      })

    } else {
      alert(`game over... your score was ${this.state.clickedArr.length}`);
      
      if (this.state.clickedArr.length > this.state.highScore) {
        this.setState({
          highScore: this.state.clickedArr.length,
          clickedArr: []
        })
      } else {
        this.setState({
          clickedArr: []
        })
      }
    }

    if (this.state.clickedArr.length === 12) {
      alert("highest score possible!")
      this.setState({
        highScore: 12, 
        clickedArr: []
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar score={this.state.highScore}/>
        <Jumbotron />
        <Score score={this.state.clickedArr.length}>Current Score:</Score>
        <CardContainer handleCardClick={this.handleCardClick}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
