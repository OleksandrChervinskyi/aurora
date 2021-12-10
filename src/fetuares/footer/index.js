import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import insta from '../../pictures/icons/insta.png'
import facebook from '../../pictures/icons/facebook.png'
import snapchat from '../../pictures/icons/snapchat.png'
import twitter from '../../pictures/icons/twitter.png'
import youtube from '../../pictures/icons/youtube.png'

export const Footer = () => {
    return (
        <footer className={'footer'}>
            <Container>
                <Row>
                    <Col sm={6} lg={{span: 2, offset: 1}}>
                        <div className={'footer__col'}>
                            <h5>
                                <Link to={'#'}>
                                    About Us
                                </Link>
                            </h5>
                            <p>
                                <Link to={'#'}>
                                    Who we are
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Our stores
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Customer Reviews
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={2}>
                        <div className={'footer__col'}>
                            <h5>
                                <Link to={'#'}>
                                    Categories
                                </Link>
                            </h5>
                            <p>
                                <Link to={'#'}>
                                    Women fashion
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Accessories
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Kids
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={2}>
                        <div className={'footer__col'}>
                            <h5>
                                <Link to={'#'}>
                                    Help
                                </Link>
                            </h5>
                            <p>
                                <Link to={'#'}>
                                    Customer service
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Size guide
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Contact us
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col sm={6} lg={2}>
                        <div className={'footer__col'}>
                            <h5 className={'last'}>
                                <Link to={'#'}>
                                    Payments & Delivery
                                </Link>
                            </h5>
                            <p>
                                <Link to={'#'}>
                                    Purchase terms
                                </Link>
                            </p>
                            <p>
                                <Link to={'#'}>
                                    Guarantee
                                </Link>
                            </p>
                        </div>
                    </Col>
                    <Col lg={2} className={'text-sm-center text-lg-start'}>
                        <h5>
                            <Link to={'#'}>
                                Social
                            </Link>
                        </h5>
                        <div className={'social-media'}>
                            <Link to={'#'}>
                                <img src={insta} alt="instagram-icon"/>
                            </Link>
                            <Link to={'#'}>
                                <img src={twitter} alt="twitter-icon"/>
                            </Link>
                            <Link to={'#'}>
                                <img src={snapchat} alt="snapchat-icon"/>
                            </Link>
                            <Link to={'#'}>
                                <img src={facebook} alt="facebook-icon"/>
                            </Link>
                            <Link to={'#'}>
                                <img src={youtube} alt="youtube-icon"/>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={'copyright'}>
                            © Copyright, Aurora 2020. All Rights reserved.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

