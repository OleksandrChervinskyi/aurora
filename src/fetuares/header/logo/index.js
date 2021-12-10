import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {useSelector} from "react-redux";

export const Logo = () => {
    //Login status - auth or not
    const {header: {loginStatus}} = useSelector(store => store)  // default false

    return (
        <Col xs={8} sm={4} md={3} className={'text-center'}>
            <div className={'logo'}>
                <Link to={'#'}>
                    <p className={loginStatus ? 'login' : ''}>
                        Aurora
                    </p>
                </Link>
            </div>
        </Col>
    );
};

