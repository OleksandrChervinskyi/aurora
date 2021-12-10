import {Container, Row} from "react-bootstrap";
import {Logo} from "./logo";
import {Search} from "./search";
import {SingIn} from "./sing-in";
import {MainNav} from "./main-nav";
import {Hamburger} from "./mobile-version/hamburger";
import {SearchIcon} from "./mobile-version/search-icon";
import {CartIcon} from "./mobile-version/cart-icon";

export const Header = () => {
    return (
        <header className={'header'}>
            <Container fluid>
                <Row className={'align-items-center'}>
                    {/*Extra mobile components*/}
                    <Hamburger/>
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