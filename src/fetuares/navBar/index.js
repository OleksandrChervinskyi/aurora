import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import close from '../../pictures/icons/close.png'
import arrowLeft from '../../pictures/icons/Chevron Left.png';
import {Level1MenuList} from "./level1-menu-list";
import {Level2MenuList} from "./level2-menu-list";
import {LastLevel} from "./last-level";
import {Location} from "./location";
import {SingInLine} from "./sing-in-line";
import {hamburgerMenuOff} from "../header/headerSlice";

export const NavBar = () => {

    //Array of level 1-2-3 categories
    const categoriesLevel0 = ['Women', 'Men', 'Accessories', 'Kids', 'Beauty', 'Outlet', 'Stories']
    const categoriesLevel1 = ['Clothing', 'Collections', 'Collabs', 'Brands']
    const categoriesLastLevel = ['T-shirts', 'Sweatshirts', 'Knitwear', 'Jeans', 'Jumpsuits', 'Skirts', 'Dresses']

    // Hamburger menu status
    const {header: {hamburgerMenuToggle}} = useSelector(store => store)

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

    return (
        <div className={!hamburgerMenuToggle ? 'nav-bar d-none' : 'nav-bar d-block'}>
            <div className={'header'}>
                <h2>
                    <img src={close} alt="exit" onClick={() => dispatch(hamburgerMenuOff())}/>
                    Aurora
                </h2>
            </div>
            <div className={'body'}>
                {/*Default items */}
                {!selectedItems.level1 &&
                    categoriesLevel0
                        .map(value =>
                            <Level1MenuList key={value} item={value} chooseItemLevel1={chooseItemLevel1}/>)}

                {/*Items level1*/}
                {selectedItems.level1 && !selectedItems.level2 &&
                    <div className={'menu_levels'}>
                        <div className={'header'}>
                            <h3>
                                {selectedItems.level1}
                            </h3>
                            <p onClick={() => setSelectedItems({...selectedItems, level1: ''})} className={'view-all'}>
                                View all
                            </p>
                        </div>
                        <div className={'body'}>
                            {categoriesLevel1
                                .map(value => <Level2MenuList
                                    key={value}
                                    item={value}
                                    chooseItemLevel1={chooseItemLevel1}
                                    chooseItemLevel2={chooseItemLevel2}/>)
                            }
                        </div>
                    </div>
                }
                {/*    Items last level*/}
                {selectedItems.level2 &&
                    <div className={'menu_levels'}>
                        <div className={'header'}>
                            <h3>
                                <img src={arrowLeft} alt="arrow"
                                     onClick={() => setSelectedItems({...selectedItems, level2: ''})}/>
                                {selectedItems.level2}
                            </h3>
                            <p onClick={() => setSelectedItems({...selectedItems, level1: ''})} className={'view-all'}>
                                View all
                            </p>
                        </div>
                        <div className={'body'}>
                            {categoriesLastLevel
                                .map(value => <LastLevel
                                    key={value}
                                    item={value}
                                    chooseItemLevel1={chooseItemLevel1}
                                    chooseItemLevel2={chooseItemLevel2}/>)
                            }
                        </div>
                    </div>}
            </div>

            {/*Location line*/}
            <SingInLine/>
            {selectedItems.level1 && <Location level2Value={selectedItems.level2}/>}
        </div>
    );
};

