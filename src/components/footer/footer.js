import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import mp from '../../media/mp.jpg';

export default class Footer extends Component {

    render() {

            // JavaScript for Scroll to Top 
            // var mybutton = document.getElementById("myBtn");
            // window.onscroll = function() {scrollFunction()};

            // function scrollFunction() {
            //     if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            //         mybutton.style.display = "block";
            //     } else {
            //         mybutton.style.display = "none";
            //     }
            // }
            // function topFunction() {
            //     document.body.scrollTop = 0;
            //     document.documentElement.scrollTop = 0;
            // }

        return (
           
            <div className="container" data-aos="fade-in" data-aos-duration="4000">

                     <Container>
      
                        <Row>
                            <Col sm="4"></Col>
                            <Col sm="4">
                            <img src={mp} className="App-logo" alt="logo" />
                                <hr />

                                <div className="twelve columns">        
                                    <div class="widget">
                                        <h1 className="footer-text">AM-Photography</h1>
                                    </div>
                                </div>

                                <hr />

                                <div className="row">
                                    <div className="twelve columns">        
                                        <div    class="fb-like" 
                                                data-href="https://radlee.github.io/amphotography" 
                                                data-width="" 
                                                data-layout="box_count" 
                                                data-action="recommend" 
                                                data-size="large" 
                                                data-share="true">
                                        </div>

                                    </div>

                                    <br/>
                                    
                                    {/* <button  onClick={() => topFunction()} id="myBtn" title="Go to top">Top</button>   */}
                                </div>
                                
                            </Col>
                            <Col sm="4"></Col>
                        </Row>
                        
                        </Container>
                    </div>
       
        );
      }
};