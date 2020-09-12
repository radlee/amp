import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import JumboTwo from './components/jumbotron/jumbotron.component';
import JumboOne from './components/jumbotron-one/jumbotron.component';
import JumboSecond from './components/jumbotron-second/jumbotron.component';
// import JumboThree from './components/jumbotron-three/jumbotron.component';
import JumboAbout from './components/team-list/team-list.component';
import JumboContact from './components/jumbotron-contact/jumbotron.component';

import Slider from './components/slider/slider.component';
import './App.css';
// import Navigation from "./components/Navigation"
import { Jumbotron, Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
        <div className="App">
          {/* <Navigation /> */}
          <div data-aos="fade-in" data-aos-duration="4000">
            <Jumbotron id="about" className="jumbotron" >
                <h1 className="display-1 ase">  ASELMO|MAFANGA</h1>
                <h1 className="am">  ASELMO</h1>
                <h1 className="am">  MAFANGA</h1>
                <h1 className="display-3"> Photography</h1>
                <hr className="my-2" />
                <p className="lead">GRADUATION | OUTDOOR/FREE-STYLE | WEDDINGS | PARTIES | VIDEOS | NEW-BORN-BABY PHOTOSHOOT | ECT.. </p>
                <hr className="my-2" />
                <p className="para2">Pride in photoshoot quality served for the viewer's aesthetics indulgement.</p>
                <p className="lead">
                    <Button color="dark" href="#intro">Introduction</Button>
                </p>
            </Jumbotron>
          </div>
          {/* <h1 className="display-1">  EVENTS PHOTOGRAPHY</h1> */}
          <p id="intro" className="captions" data-aos="fade-in" data-aos-duration="4000">Welcome to Aselmo Mafanga Photography (AMP) portfolio intro. </p>
          <JumboTwo />
          <p className="captions" data-aos="fadeInUp"> Art Directionism</p>
          <JumboOne />
          <p className="captions" data-aos="fadeInUp">The S.A Photo Essay.</p>
          <p className="para-sa" data-aos="fadeInUp"><em>-South African Photo Essay- (SAPE)</em></p>
          <JumboSecond data-aos="fadeInUp"/>
          {/* <p className="captions">Adventurous </p>
          <JumboThree /> */}
          <br />
          <JumboAbout />
          <p className="captions" data-aos="fadeInUp">Portfolio</p>
          <Slider />
          <br />
          <JumboContact />
          <br />
          {/* <Spinner /> */}
          <br />
          <Footer />
        </div>
    );
  }
}

export default App;
