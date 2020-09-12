import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import hhf2 from '../../sections/amp.jpg';


const TeamList = (props) => {
    return (

        <div className="container" id="intro" data-aos="fade-in" data-aos-duration="4000">
            <br />
            <h1 className="h1">About AMP</h1>
            <hr className="heading-horizon" />
            <br />
            <Container>
                <Row>
                    <Col sm="6">
                        <div>
                            <Media>
                                <Media className="profile-pic" left>
                                    <Media className="Media" object src={hhf2} alt="Happy Hour" />
                                </Media>
                            </Media>
                        </div> 
                    </Col>
                    <Col sm="6">
                        <div className="text-box">
                        <Media body>
                              <Media className="media-heading" heading>
                                  Aselmo Mafanga Photography
                              </Media>
                              <br />
                              <h5>AMP for short. I am a hobbyist photographer and I aspire to make it to the professional world of photography and videography.
                                  I am available to contact for photoshoot. I am an experimental individual with a good taste in photography.
                                  
                              </h5>
                              
                              <p className="paragraph">
                              If you like the pictures and would like to make use of the services I provide or would like to give feedback, advice or comment about anything please <a href="#contact">scroll down</a> for my Instagram Handle.
                              </p>
                               
                          </Media>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default TeamList;