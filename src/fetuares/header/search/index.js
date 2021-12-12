import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import icon from '../../../pictures/icons/Fill 1.png'
import iconBlack from '../../../pictures/icons/Fill black.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Search = () => {

    // State
    const [inputValue, setInputValue] = useState('');

    //Login status - auth or not and Scroll position
    const {header: {loginStatus, searchInputMob, scrollPosition}} = useSelector(store => store);

    // Input handler
    const inputHandler = (e) => {
        const {target: {value}} = e
        setInputValue(value)
    };

    return (
        <Col sm={8} md={6} className={!searchInputMob ? 'd-none d-sm-block' : 'd-block'}>
            <div
                className={(!loginStatus && scrollPosition) || (loginStatus && scrollPosition) ? 'search black' : 'search'}>
                <input type={'text'}
                       name={'search'}
                       placeholder={'What are you looking for?'}
                       value={inputValue}
                       onChange={inputHandler}
                />
                <Link to={'#'}>
                    {scrollPosition ? <img src={iconBlack} alt="search-icon"/> : <img src={icon} alt="search-icon"/>}
                    {/*{!loginStatus && <img src={icon} alt="search-icon"/>}*/}
                    {/*{loginStatus && <img src={iconBlack} alt="search-icon"/>}*/}
                </Link>
            </div>
        </Col>
    );
};

