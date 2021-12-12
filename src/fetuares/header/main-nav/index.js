import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const MainNav = () => {

    //Login status - auth or not + Scroll position
    const {header: {loginStatus, scrollPosition}} = useSelector(store => store);

    return (
        <Row>
            <Col className={'d-none d-sm-block'}>
                <div
                    className={(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ? 'main-nav black' : 'main-nav'}>
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

