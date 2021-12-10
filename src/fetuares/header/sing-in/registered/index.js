import React from 'react';
import {useDispatch} from "react-redux";
import {offLoginStatus} from "../../headerSlice";

export const Registered = () => {

    //Dispatch
    const dispatch = useDispatch()

    return (
        <p onClick={() => dispatch(offLoginStatus())}>
            Hi, Angels!
        </p>
    )
};

