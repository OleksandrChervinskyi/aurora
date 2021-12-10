import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const MainNav = () => {
    return (
        <Row>
            <Col>
                <div className={'main-nav'}>
                    <Link to={'#'}>
                        what’s new
                    </Link>
                    <Link to={'#'}>
                        women
                    </Link>
                    <Link to={'#'}>
                        accessories
                    </Link>
                    <Link to={'#'}>
                        kids
                    </Link>
                    <Link to={'#'}>
                        beauty
                    </Link>
                    <Link to={'#'}>
                        outlet
                    </Link>
                    <Link to={'#'}>
                        stories
                    </Link>
                </div>
            </Col>
        </Row>
    );
};

