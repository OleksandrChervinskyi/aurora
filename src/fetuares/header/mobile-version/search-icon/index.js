import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import searchIcon from '../../../../pictures/icons/Fill 1.png'
import closeIcon from '../../../../pictures/icons/close.png'
import searchIconBlack from '../../../../pictures/icons/Fill black.png'
import {useDispatch, useSelector} from "react-redux";
import {searchInputMobToggle} from "../../headerSlice";


export const SearchIcon = () => {

    //Off-on indicator
    const {header: {searchInputMob, loginStatus, scrollPosition}} = useSelector(store => store)

    //Dispatch
    const dispatch = useDispatch()

    return (
        <Col xs={1} className={'d-sm-none'}>
            {!searchInputMob
                ?
                <img src={searchIcon} alt="search" onClick={() => dispatch(searchInputMobToggle())}/>
                :
                <img src={closeIcon} alt="search" onClick={() => dispatch(searchInputMobToggle())}/>}


        </Col>
        // <img src={closeIcon} alt="search" onClick={() => dispatch(searchInputMobToggle())}/>
        // <img src={searchIcon} alt="search" onClick={() => dispatch(searchInputMobToggle())}/>
    )
        ;
};

