import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';

export default class JumboTwo extends Component {

    render() {


        return (
            <div data-aos="fade-in" data-aos-duration="4000">

                    <Jumbotron id="about" className="jumbotron-contact">
                    <Container id="contact">
                        <h1 className="h1">Contact</h1>
                        <hr className="heading-horizon" />
                        <h3 className="insta"> <span className="handle">Instagram Handle: @ahsellmo</span></h3>
                        <hr className="my-2" />
                        <h5>Delft South</h5>
                        <h5>7100</h5>
                        <h5>Cape Town</h5>
                        <h5>Western Cape</h5>
                        <h5>South Africa</h5>
                        <hr className="my-2" />
                        <h3><span className="handle">062 8741 542</span></h3>
                    </Container>
                    </Jumbotron>
            </div>
        );
      }
};