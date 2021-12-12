import React from 'react';
import {Link} from "react-router-dom";
import insta from "../../../pictures/icons/insta.png";
import twitter from "../../../pictures/icons/twitter.png";
import snapchat from "../../../pictures/icons/snapchat.png";
import facebook from "../../../pictures/icons/facebook.png";
import youtube from "../../../pictures/icons/youtube.png";

export const SocialMedia = () => {
    return (
        <div className={'social-media'}>
            <Link to={'#'}>
                <img src={insta} alt="instagram-icon"/>
            </Link>
            <Link to={'#'}>
                <img src={twitter} alt="twitter-icon"/>
            </Link>
            <Link to={'#'}>
                <img src={snapchat} alt="snapchat-icon"/>
            </Link>
            <Link to={'#'}>
                <img src={facebook} alt="facebook-icon"/>
            </Link>
            <Link to={'#'}>
                <img src={youtube} alt="youtube-icon"/>
            </Link>
        </div>
    );
};

