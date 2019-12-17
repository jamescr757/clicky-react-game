import React from 'react';
import './style.css';
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import CardContainer from "../CardContainer";
import Footer from "../Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Jumbotron />
      <CardContainer />
      <Footer />
    </React.Fragment>
  );
}

export default App;
