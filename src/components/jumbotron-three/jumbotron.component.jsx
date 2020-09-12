import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default class JumboTwo extends Component {

    render() {


        return (
           
            <Jumbotron className="jumbotron-three">
            <Container>
               
               <Row>
               <Col sm="4">
                <h1><span className="band">Free-style Capture</span></h1>

                <ul>
                  <li>Outdoor</li>
                  <li>Unlock possible creativity from the environment</li>
                  <li>Personalized | Fammily | Entourage</li>
                  <li>From The City to The Wild.</li>
                </ul>

               </Col>
               <Col xs="12" sm="4"></Col>
               <Col sm="4"></Col>
               </Row>
           
           </Container>
         </Jumbotron>
       
        );
      }
};