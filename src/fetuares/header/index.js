import {Container, Row} from "react-bootstrap";
import {Logo} from "./logo";
import {Search} from "./search";
import {SingIn} from "./sing-in";
import {MainNav} from "./main-nav";
import {HamburgerIcon} from "./mobile-version/hamburger-icon";
import {SearchIcon} from "./mobile-version/search-icon";
import {CartIcon} from "./mobile-version/cart-icon";
import {TopNote} from "../top-note";

export const Header = () => {
    return (
        <header className={'header'}>
            <Container fluid className={'position-fixed'}>
                <TopNote/>
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
        </header>
    )
}