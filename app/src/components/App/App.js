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

      this.setState({
        modalMessage: `Game Over! Score: ${this.state.clickedArr.length}`,
        showModal: true,
        shuffleCards: false
      })
      
      if (this.state.clickedArr.length > this.state.highScore) {
        // TODO: refactor next 4 lines into a function
        this.setState({
          highScore: this.state.clickedArr.length,
          clickedArr: [],
          message: "Click an image to begin!",
          shuffleCards: false
        })
      } else {
        this.setState({
          clickedArr: [],
          message: "Click an image to begin!",
          shuffleCards: false
        })
      }
    }

    if (this.state.clickedArr.length === 12) {
      this.setState({
        highScore: 12,
        modalMessage: "Max Score! Score: 12",
        showModal: true,
        shuffleCards: false
      })
    }
  }

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
        <Message message={this.state.message}/>
        <Score score={this.state.clickedArr.length}>Current Score:</Score>
        {this.renderModal()}
        <CardContainer 
          handleCardClick={this.handleCardClick}
          shuffleCards={this.state.shuffleCards}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
