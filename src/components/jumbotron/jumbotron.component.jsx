import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

export default class JumboTwo extends Component {

    render() {


        return (
           
            <Jumbotron id="about" className="jumbotron-two">
            <Container>
               
               <Row>
               <Col sm="4">
                 <div data-aos="fade-in" data-aos-duration="4000">
 
                 <h1 ><span className="band">Events Photography</span></h1>

                  <ul >
                    <li>Creative Photography</li>
                    <li>Parties, Weddings, ect..</li>
                    <li>Graduation Ceremony</li>
                    <li>Perfomance Shoot </li>
                  </ul>

                 </div>
               

               </Col>
               <Col xs="12" sm="4"></Col>
               <Col sm="4"></Col>
               </Row>
           
           </Container>
         </Jumbotron>
       
        );
      }
};