import React from 'react';

export const SingInLine = () => {

    //Styles
    const wrapStyle = {
        margin: '70px 0 0 0 ',
        padding: '17px 16px 0 15px',
        backgroundColor: '#F7F7F7',
        display: 'flex',
    }

    const textStyle = {
        fontSize: '15px',
        fontWeight: '600',
    }

    const spanStyle = {
        margin: '0 10px'
    }

    return (
        <div style={wrapStyle}>
            <p style={textStyle}>
                Sing In
            </p>
            <span style={spanStyle}>
                |
            </span>
            <p style={textStyle}>
                Register
            </p>
        </div>
    );
};

