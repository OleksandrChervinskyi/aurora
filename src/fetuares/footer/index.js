import React from 'react';
import {MainFooter} from "./main-footer";
import {MobileFooter} from "./mobile-footer";
import {HamburgerMenu} from "../header/mobile-version/hamburger-menu";

export const Footer = () => {
    return (
        <>
            <MainFooter/>
            <MobileFooter/>
            <HamburgerMenu/>
        </>
    );
};

