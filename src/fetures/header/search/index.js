import React, {useState} from 'react';
import {Col} from "react-bootstrap";
import icon from '../../../pictures/icons/Fill 1.png'
import {Link} from "react-router-dom";

export const Search = () => {
    // State
    const [inputValue, setInputValue] = useState('')

    // Input handler
    const inputHandler = (e) => {
        const {target: {value}} = e
        setInputValue(value)
    }

    return (
        <Col md={6}>
            <div className={'search'}>
                <input type={'text'}
                       name={'search'}
                       placeholder={'What are you looking for?'}
                       value={inputValue}
                       onChange={inputHandler}
                />
                <Link to={'#'}>
                    <img src={icon} alt="search-icon"/>
                </Link>
            </div>
        </Col>
    );
};

