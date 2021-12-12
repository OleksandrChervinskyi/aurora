import React from 'react';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setLoginStatus} from "../headerSlice";

export const Logo = () => {
    //Login status - auth or not + Scroll position
    const {header: {loginStatus, scrollPosition}} = useSelector(store => store)

    //Dispatch
    const dispatch = useDispatch()

    return (
        <Col xs={8} sm={4} md={3} className={'text-center'}>
            <div className={'logo'}>
                <Link to={'#'}>
                    <p className={(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ? 'black' : ''}
                       onClick={() => dispatch(setLoginStatus())}>
                        Aurora
                    </p>
                </Link>
            </div>
        </Col>
    );
};

