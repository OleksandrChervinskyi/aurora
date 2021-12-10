import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import icon1 from '../../pictures/icons/Shape.png'
import {Link} from "react-router-dom";

export const TopNote = () => {
    return (
        <Container fluid>
            <div className={'top-note'}>
                <Row>
                    <Col md={11}>
                        <p>
                            We deliver Worldwide
                        </p>
                    </Col>
                    <Col md={1}>
                        <p>
                            <Link to={'#'}>
                                <img src={icon1} alt="geo-icon"/>
                                <span>
                                    Our stores
                               </span>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};


