import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import icon from '../../../pictures/icons/Fill 1.png'
import iconBlack from '../../../pictures/icons/Fill black.png'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Search = () => {
    // State
    const [inputValue, setInputValue] = useState('')

    //Login status - auth or not
    const {header: {loginStatus}} = useSelector(store => store)  // default false

    // Input handler
    const inputHandler = (e) => {
        const {target: {value}} = e
        setInputValue(value)
    }

    return (
        <Col sm={8} md={6} className={'d-none d-sm-block'}>
            <div className={!loginStatus ? 'search' : 'search login'}>
                <input type={'text'}
                       name={'search'}
                       placeholder={'What are you looking for?'}
                       value={inputValue}
                       onChange={inputHandler}
                />
                <Link to={'#'}>
                    {!loginStatus && <img src={icon} alt="search-icon"/>}
                    {loginStatus && <img src={iconBlack} alt="search-icon"/>}
                </Link>
            </div>
        </Col>
    );
};

