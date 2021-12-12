import React from 'react';
import {Link} from "react-router-dom";

export const SingInLine = () => {

    return (
        <div className={'sing-in-line'}>
            <Link to={'#'}>
                <p>
                    Sing In
                </p>
            </Link>
            <span>
                |
            </span>
            <Link to={'#'}>
                <p>
                    Register
                </p>
            </Link>
        </div>
    );
};

