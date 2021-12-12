import React from 'react';
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";
import {SocialMedia} from "../social-media";

export const MobileFooter = () => {
    return (
        <footer className={'footer d-sm-none'}>
            <Accordion className={'accordion'}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Us</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Categories</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Help</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Payments & Delivery</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <SocialMedia/>
            <p className={'copyright'}>
                © Copyright, Aurora 2020. All Rights reserved.
            </p>
        </footer>
    );
};

