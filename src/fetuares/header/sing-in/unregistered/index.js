import React from 'react';
import {Link} from "react-router-dom";

export const Unregistered = () => {
    return (
        <>
            <p>
                <Link to={'#'}>
                    Sing In
                </Link>
            </p>
            <span>
                    |
                    </span>
            <p>
                <Link to={'#'}>
                    Register
                </Link>
            </p>
        </>
    );
};

