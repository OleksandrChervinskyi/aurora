import React from 'react';
import {Col} from "react-bootstrap";
import cart from '../../../pictures/icons/cart-38-32.png'
import {useDispatch, useSelector} from "react-redux";
import {Unregistered} from "./unregistered";
import {Registered} from "./registered";

export const SingIn = () => {

    //Dispatch
    const dispatch = useDispatch()

    //Login status - auth or not
    const {header: {loginStatus, cartCount}} = useSelector(store => store)  // default false

    return (
        <Col md={3}>
            <div className={!loginStatus ? 'sing-in' : 'sing-in login'}>
                {!loginStatus ? <Unregistered/> : <Registered/>}
                <img src={cart} alt="cart-icon"/>
                {loginStatus && <span className={'cart-count'}>{cartCount}</span>}
            </div>
        </Col>
    );
};

