import React from 'react';
import {onLoginStatus} from "../../headerSlice";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

export const Unregistered = () => {

    //Dispatch
    const dispatch = useDispatch()

    return (
        <>
            <p onClick={() => dispatch(onLoginStatus())}>
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

