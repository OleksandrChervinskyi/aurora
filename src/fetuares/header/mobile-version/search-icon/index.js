import React from 'react';
import {Col} from "react-bootstrap";
import searchIcon from '../../../../pictures/icons/Fill 1.png'

export const SearchIcon = () => {
    return (
        <Col xs={1} className={'d-sm-none'}>
            <img src={searchIcon} alt="search"/>
        </Col>
    );
};

