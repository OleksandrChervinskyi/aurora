import React from 'react';
import {Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {hamburgerMenuOn} from "../../headerSlice";


export const HamburgerIcon = () => {
    const dispatch = useDispatch()
    return (
        <Col xs={1} className={'d-sm-none'}>
            <div className={'hamburger'} onClick={() => dispatch(hamburgerMenuOn())}/>
        </Col>
    );
};

