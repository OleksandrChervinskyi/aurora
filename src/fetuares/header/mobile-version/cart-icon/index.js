import React from 'react';
import {Col} from "react-bootstrap";
import basket from '../../../../pictures/icons/basket.png'
import basketBlack from '../../../../pictures/icons/basket-black.png'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const CartIcon = () => {

    //Store
    const {header: {cartCount, loginStatus, scrollPosition}} = useSelector(store => store)

    return (
        <Col xs={2} className={'d-sm-none'}>
            <div className={'cart-icon'}>
                {(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ?
                    <img src={basketBlack} alt="cart"/>
                    : <img src={basket} alt="cart"/>
                }
                <Link to={'#'}>
                    <span className={'cart-count'}>{cartCount}</span>
                </Link>
            </div>
        </Col>
    );
};

