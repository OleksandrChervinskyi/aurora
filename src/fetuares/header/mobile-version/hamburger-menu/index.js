import React, {useState} from 'react';
import {Offcanvas} from "react-bootstrap";
import arrowRight from '../../../../pictures/icons/Chevron Right.png';
import arrowLeft from '../../../../pictures/icons/Chevron Left.png';
import {Link} from "react-router-dom";
import {SingInLine} from "./sing-in-line";
import {Location} from "./location";
import {useDispatch, useSelector} from "react-redux";
import {hamburgerMenuOff} from "../../headerSlice";

export const HamburgerMenu = () => {
    // Selected menu item
    const [selectedItems, setSelectedItems] = useState({
        level1: '',
        level2: '',
    })

    //Switch between lists in menu
    const chooseItemLevel1 = (e) => {
        setSelectedItems({...selectedItems, level1: e.target.textContent})
    }
    const chooseItemLevel2 = (e) => {
        setSelectedItems({...selectedItems, level2: e.target.textContent})
    }

    //Dispatch
    const dispatch = useDispatch()

    // Hamburger menu status
    const {header: {hamburgerMenuToggle}} = useSelector(store => store)

    //Switch off hamburger menu
    const offOffcanvas = () => {
        dispatch(hamburgerMenuOff())
    }

    
    // Bed section :(
    //Styles (because offcanvas is behind the Root and Sass don't watch it)
    const titleClass = {
        fontSize: '25px',
        margin: '0 auto',
    };

    const selectedItemMenuLevel1Wrap = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #000',
        padding: '0 0 13px',
    };

    const selectedItemMenuLevel1Title = {
        fontSize: '20px',
        margin: '0 0 0 20px',
        fontWeight: '600',
        textTransform: 'uppercase',
    };

    const selectedItemMenuLevel1ViewAll = {
        margin: '0',
    };

    const selectedItemMenuLevel1NameUnderItem = {
        fontSize: '18px',
        margin: '20px 0px 16px 16px',
        letterSpacing: '1.2px',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    };

    const arrow = {
        height: '15px'
    };

    const arrowL = {
        height: '15px',
        marginRight: '15px',
    };

    const linkStyle = {
        color: '#000',
        fontSize: '18px',
        textDecoration: 'none',
    }

    const marginStyle = {
        margin: '15px 0 15px 16px'
    }
    //------------------End styles-------

    return (
        <>
            <Offcanvas show={hamburgerMenuToggle} onHide={offOffcanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={titleClass}>
                        Aurora
                    </Offcanvas.Title>
                </Offcanvas.Header>


                <Offcanvas.Body>
                    {!selectedItems.level1 && <div>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Women
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Men
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Accessories
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Kids
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Beauty
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Outlet
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                        <p onClick={chooseItemLevel1} style={selectedItemMenuLevel1NameUnderItem}>
                            Stories
                            <img src={arrowRight} alt="arrow" style={arrow}/>
                        </p>
                    </div>}
                    {selectedItems.level1 && !selectedItems.level2 &&
                        <div>
                            <div style={selectedItemMenuLevel1Wrap}>
                                <p style={selectedItemMenuLevel1Title}>
                                    {selectedItems.level1}
                                </p>
                                <p onClick={() => setSelectedItems({...selectedItems, level1: '', level2: ''})}
                                   style={selectedItemMenuLevel1ViewAll}>
                                    View all
                                </p>
                            </div>
                            <div>
                                <p onClick={chooseItemLevel2} style={selectedItemMenuLevel1NameUnderItem}>
                                    Clothing
                                    <img src={arrowRight} alt="arrow" style={arrow}/>
                                </p>
                                <p onClick={chooseItemLevel2} style={selectedItemMenuLevel1NameUnderItem}>
                                    Collections
                                    <img src={arrowRight} alt="arrow" style={arrow}/>
                                </p>
                                <p onClick={chooseItemLevel2} style={selectedItemMenuLevel1NameUnderItem}>
                                    Collabs
                                    <img src={arrowRight} alt="arrow" style={arrow}/>
                                </p>
                                <p onClick={chooseItemLevel2} style={selectedItemMenuLevel1NameUnderItem}>
                                    Brands
                                    <img src={arrowRight} alt="arrow" style={arrow}/>
                                </p>
                            </div>
                        </div>}
                    {selectedItems.level2 && <div>
                        <div style={selectedItemMenuLevel1Wrap}>
                            <p style={selectedItemMenuLevel1Title}>
                                <img src={arrowLeft} alt="arrow" style={arrowL}
                                     onClick={() => setSelectedItems({...selectedItems, level2: ''})}/>
                                {selectedItems.level2}
                            </p>
                            <p onClick={() => setSelectedItems({...selectedItems, level1: '', level2: ''})}
                               style={selectedItemMenuLevel1ViewAll}>
                                View all
                            </p>
                        </div>
                        <div>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    T-shirts
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Sweatshirts
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Knitwear
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Jeans
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Jumpsuits
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Skirts
                                </Link>
                            </p>
                            <p style={marginStyle}>
                                <Link to={'#'} style={linkStyle}>
                                    Dresses
                                </Link>
                            </p>
                        </div>
                    </div>}
                    <SingInLine/>
                    {selectedItems.level1 && <Location level2Value={selectedItems.level2}/>}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

