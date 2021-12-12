import React from 'react';
import loc from '../../../pictures/icons/Shape.png'
import {Link} from "react-router-dom";

export const Location = ({level2Value}) => {
    return (
        <Link to={'#'}>
            <p className={'location'}>
                {level2Value && <img src={loc} alt="location"/>}
                Our stores
            </p>
        </Link>
    );
};

