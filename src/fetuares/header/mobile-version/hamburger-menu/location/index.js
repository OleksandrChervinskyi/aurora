import React from 'react';
import loc from '../../../../../pictures/icons/Shape.png'

export const Location = ({level2Value}) => {

    //Styles
    const pStyle = {
        padding: '17px 0 16px 32px',
        backgroundColor: '#F7F7F7',
        fontSize: '13px',
    }

    const imgStyles = {
        margin: '0 10px 0 -10px'
    }

    return (
        <>
            <p style={pStyle}>
                {level2Value && <img src={loc} alt="location" style={imgStyles}/>}
                Our stores
            </p>
        </>
    );
};

