import React from 'react';
import {Col} from "react-bootstrap";
import searchIcon from '../../../../pictures/icons/Fill 1.png'
import closeIcon from '../../../../pictures/icons/close.png'
import searchIconBlack from '../../../../pictures/icons/Fill black.png'
import {useDispatch, useSelector} from "react-redux";
import {searchInputMobToggle} from "../../headerSlice";


export const SearchIcon = () => {

    //Off-on indicator
    const {header: {searchInputMob, loginStatus, scrollPosition}} = useSelector(store => store);

    //Dispatch
    const dispatch = useDispatch();

    return (
        <Col xs={1} className={'d-sm-none'}>
            {/*:D Change icons view depends of mode (white / black icons or close icon ) */}
            {!searchInputMob && ((!loginStatus && scrollPosition) || (loginStatus && scrollPosition)) ?
                <img src={searchIconBlack} alt="cart" onClick={() => dispatch(searchInputMobToggle())}/>
                : searchInputMob && ((!loginStatus && scrollPosition) || (loginStatus && scrollPosition))
                    ? <img src={closeIcon} alt="close" onClick={() => dispatch(searchInputMobToggle())}/>
                    : searchInputMob && ((!loginStatus && !scrollPosition) || (loginStatus && !scrollPosition))
                        ? <img src={closeIcon} alt="close" onClick={() => dispatch(searchInputMobToggle())}/>
                        : <img src={searchIcon} alt="cart" onClick={() => dispatch(searchInputMobToggle())}/>
            }
        </Col>
    );
};

