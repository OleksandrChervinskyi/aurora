import React from 'react';
import {Col} from "react-bootstrap";
import basket from '../../../../pictures/icons/basket.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const CartIcon = () => {

    //Store
    const {header: {cartCount}} = useSelector(store => store)

    return (
        <Col xs={2} className={'d-sm-none'}>
            <div className={'cart-icon'}>
                <img src={basket} alt="cart"/>
                <Link to={'#'}>
                    <span className={'cart-count'}>{cartCount}</span>
                </Link>
            </div>
        </Col>
    );
};

