import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

export const Offer = () => {

    //Login status - auth or not
    const {header: {loginStatus}} = useSelector(store => store)  // default false

    return (
        <section className={loginStatus ? 'offer offer-bg' : 'offer'}>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Hello! Welcome to Aurora
                        </h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

