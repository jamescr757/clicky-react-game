import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";

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
