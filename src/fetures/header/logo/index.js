import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

export const Logo = () => {
    return (
        <Col md={3}>
            <div className={'logo'}>
                <Link to={'#'}>
                    Aurora
                </Link>
            </div>
        </Col>
    );
};

