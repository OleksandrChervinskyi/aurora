import React from 'react';
import {Col} from "react-bootstrap";
import {useSelector} from "react-redux";
import {Unregistered} from "./unregistered";
import {Registered} from "./registered";
import basket from '../../../pictures/icons/basket.png'
import basketBlack from "../../../pictures/icons/basket-black.png";
import {Link} from "react-router-dom";


export const SingIn = () => {

    //Login status - auth or not + store
    const {header: {loginStatus, cartCount, scrollPosition}} = useSelector(store => store)

    return (
        <Col md={3} className={'d-none d-md-block'}>
            <div
                className={(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ? 'sing-in black' : 'sing-in'}>
                {!loginStatus ? <Unregistered/> : <Registered/>}

                <Link to={'#'}>
                    {(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ?
                        <img src={basketBlack} alt="cart"/>
                        : <img src={basket} alt="cart"/>
                    }
                </Link>

                {loginStatus && <Link to={'#'}><span className={'cart-count'}>{cartCount}</span> </Link>}
            </div>
        </Col>
    );
};

