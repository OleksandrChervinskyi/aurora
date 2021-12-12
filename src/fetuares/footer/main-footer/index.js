import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SocialMedia} from "../social-media";

export const MainFooter = () => {
    return (
        <footer className={'footer d-none d-sm-block'}>
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
                        <SocialMedia/>
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

