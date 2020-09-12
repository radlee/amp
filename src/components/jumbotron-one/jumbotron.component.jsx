import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default class JumboTwo extends Component {

    render() {


        return (
           
            <Jumbotron id="about" className="jumbotron-one">
            <Container>
               
               <Row>
               <Col sm="4"></Col>
               <Col xs="12" sm="4"></Col>
               <Col sm="4">

                 <div data-aos="fade-in" data-aos-duration="4000">

                  <h1><span className="band">Studio Photoshoot</span></h1>

                    <ul>
                      <li>Elegant Photoshoot Studios</li>
                      <li>Lights + Camera = Quality Photos</li>
                      <li>Photoshoot and Videography</li>
                      <li>Extra props to enhance style and feel </li>
                    </ul>
                  </div>

               </Col>
               </Row>
           
           </Container>
         </Jumbotron>
       
        );
      }
};