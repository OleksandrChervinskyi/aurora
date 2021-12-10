import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const MainNav = () => {

    //Login status - auth or not
    const {header: {loginStatus}} = useSelector(store => store)  // default false

    return (
        <Row>
            <Col className={'d-none d-sm-block'}>
                <div className={!loginStatus ? 'main-nav' : 'main-nav login'}>
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

