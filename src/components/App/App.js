import React from 'react';
import './style.css';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import CardContainer from "../CardContainer";
import Score from "../Score";
import Message from "../Message";
import Footer from "../Footer";
import Modal from "../Modal";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      highScore: 0,
      clickedArr: [],
      message: "Click an image to begin!",
      showModal: false,
      modalMessage: "",
      shuffleCards: true
    }
  }

  handleCardClick = (id) => {

    if (!this.state.clickedArr.includes(id)) {

      this.state.clickedArr.push(id);
      const newClickedArr = this.state.clickedArr;

      this.setState({
        clickedArr: newClickedArr,
        message: "Guessed correctly!"
      })

    } else {

      this.setStateAndShowModal(false, `Game Over! Score: ${this.state.clickedArr.length}`);
      
      // if user score higher than current high score
      if (this.state.clickedArr.length > this.state.highScore) {

        // set new high score
        this.setStateAtGameEnd(this.state.clickedArr.length);
        
      } else this.setStateAtGameEnd(false);
    }

    if (this.state.clickedArr.length === 12) {
      this.setStateAndShowModal(12, "Max Score! Score: 12");
    }
  }

  setStateAndShowModal = (highScore, modalMessage) => {

    if (highScore) this.setState({ highScore })

    this.setState({
      modalMessage,
      showModal: true,
      shuffleCards: false
    })
  }

  setStateAtGameEnd = (highScore) => {

    if (highScore) this.setState({ highScore })

    this.setState({
      clickedArr: [],
      message: "Guessed incorrectly!",
      shuffleCards: false
    })
  }

  // reset the game by resetting the state
  clickOutOfModal = () => {
    if (this.state.showModal) {
      this.setState({
        clickedArr: [],
        message: "Click an image to begin!",
        showModal: false,
        shuffleCards: true
      })
    }
  }

  renderModal = () => {
    if (this.state.showModal) { 
      return (
          <Modal 
            body={this.state.modalMessage} 
          />
      );
    }
  }

  render() {
    return (
      <div onClick={this.clickOutOfModal}>
        <Navbar score={this.state.highScore}/>
        <Jumbotron />
        {this.renderModal()}

        <div className="main-container">
          <div className="score-container">
            <Score
              className="current-score" 
              score={this.state.clickedArr.length}>Current Score:</Score>
          </div>

          <CardContainer 
            handleCardClick={this.handleCardClick}
            shuffleCards={this.state.shuffleCards}
            />
            
          <div className="message-container">
            <Message message={this.state.message}/>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
