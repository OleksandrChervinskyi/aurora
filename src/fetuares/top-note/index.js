import React from 'react';
import {Col, Row} from "react-bootstrap";
import icon1 from '../../pictures/icons/Shape.png'
import {Link} from "react-router-dom";

export const TopNote = () => {
    return (
        <div className={'d-none d-sm-block top-note'}>
            <Row>
                <Col sm={9} md={10} xl={11}>
                    <p>
                        We deliver Worldwide
                    </p>
                </Col>
                <Col sm={3} md={2} xl={1} className={'text-end'}>
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
    );
};


