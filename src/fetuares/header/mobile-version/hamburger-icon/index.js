import React from 'react';
import {Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {hamburgerMenuOn} from "../../headerSlice";


export const HamburgerIcon = () => {

    // Dispatch
    const dispatch = useDispatch()

    //Store
    const {header: {scrollPosition}} = useSelector(store => store);

    return (
        <Col xs={1} className={'d-sm-none'}>
            <div className={scrollPosition ? 'hamburger black' : 'hamburger'}
                 onClick={() => dispatch(hamburgerMenuOn())}/>
        </Col>
    );
};

