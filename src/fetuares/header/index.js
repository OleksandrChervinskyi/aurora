import {Container, Row} from "react-bootstrap";
import {Logo} from "./logo";
import {Search} from "./search";
import {SingIn} from "./sing-in";
import {MainNav} from "./main-nav";

export const Header = () => {
    return (
        <header className={'header'}>
            <Container fluid>
                <Row>
                    <Logo/>
                    <Search/>
                    <SingIn/>
                </Row>
                <MainNav/>
            </Container>
        </header>
    )
}