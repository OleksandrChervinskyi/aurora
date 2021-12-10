import React from 'react';
import {Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Unregistered} from "./unregistered";
import {Registered} from "./registered";

import basket from '../../../pictures/icons/basket.png'
import basketBlack from '../../../pictures/icons/basket-black.png'


export const SingIn = () => {

    //Login status - auth or not + store
    const {header: {loginStatus, cartCount}} = useSelector(store => store)

    return (
        <Col md={3} className={'d-none d-md-block'}>
            <div className={!loginStatus ? 'sing-in' : 'sing-in login'}>
                {!loginStatus ? <Unregistered/> : <Registered/>}
                <img src={basket} alt="cart-icon"/>
                {loginStatus && <span className={'cart-count'}>{cartCount}</span>}
            </div>
        </Col>
    );
};

