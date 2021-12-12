import {Container, Row} from "react-bootstrap";
import {Logo} from "./logo";
import {Search} from "./search";
import {SingIn} from "./sing-in";
import {MainNav} from "./main-nav";
import {HamburgerIcon} from "./mobile-version/hamburger-icon";
import {SearchIcon} from "./mobile-version/search-icon";
import {CartIcon} from "./mobile-version/cart-icon";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setScrollPosition} from "./headerSlice";

export const Header = () => {

    //Dispatch
    const dispatch = useDispatch();

    //Scroll position for hover effect (add class)
    const {header: {scrollPosition, hamburgerMenuToggle}} = useSelector(store => store);
    const handleScroll = () => {
        const position = window.pageYOffset;
        dispatch(setScrollPosition(position))
    };

    //Scroll tracking
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {!hamburgerMenuToggle &&
                <header className={!scrollPosition ? 'header fixed-top' : 'header fixed-top scroll-header'}>
                    <Container fluid>
                        <Row className={'align-items-center'}>
                            {/*Extra mobile components*/}
                            <HamburgerIcon/>
                            <SearchIcon/>
                            {/*-----*/}
                            <Logo/>
                            {/*Extra mobile components*/}
                            <CartIcon/>
                            {/*-----*/}
                            <Search/>
                            <SingIn/>
                        </Row>
                        <MainNav/>
                    </Container>
                </header>}
        </>
    );
};