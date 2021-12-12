import React from 'react';
import {Link} from "react-router-dom";

export const LastLevel = ({item}) => {
    return (
        <Link to={'#'}>
            <p className={'item-last-level'}>
                {item}
            </p>
        </Link>
    );
};

