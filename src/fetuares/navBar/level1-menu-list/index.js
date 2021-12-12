import React from 'react';
import arrowRight from "../../../pictures/icons/Chevron Right.png";

export const Level1MenuList = ({item, chooseItemLevel1}) => {
    return (
        <p onClick={chooseItemLevel1} className={'item'}>
            {item}
            <img src={arrowRight} alt="arrow"/>
        </p>
    );
};

