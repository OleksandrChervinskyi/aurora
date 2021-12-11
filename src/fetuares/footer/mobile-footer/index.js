import React from 'react';
import {Accordion} from "react-bootstrap";
import {Link} from "react-router-dom";
import insta from "../../../pictures/icons/insta.png";
import twitter from "../../../pictures/icons/twitter.png";
import snapchat from "../../../pictures/icons/snapchat.png";
import facebook from "../../../pictures/icons/facebook.png";
import youtube from "../../../pictures/icons/youtube.png";

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
            <p className={'copyright'}>
                © Copyright, Aurora 2020. All Rights reserved.
            </p>
        </footer>
    );
};

