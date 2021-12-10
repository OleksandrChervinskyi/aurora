import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import cart from '../../../pictures/icons/cart-38-32.png'

export const SingIn = () => {
    return (
        <Col md={3}>
            <div className={'sing-in'}>
                <p>
                    <Link to={'#'}>
                        Sing In
                    </Link>
                    <span>
                        |
                    </span>
                    <Link to={'#'}>
                        Register
                    </Link>
                </p>
                <img src={cart} alt="cart-icon"/>
            </div>
        </Col>
    );
};

