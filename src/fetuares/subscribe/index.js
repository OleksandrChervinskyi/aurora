import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {SubscribeForm} from "./subscribe-form";

export const Subscribe = () => {
    return (
        <section className={'subscribe'}>
            <Container>
                <Row>
                    <Col>
                        <p>
                            New arrivals. Exclusive previews.
                            First access to sales. Sign up to stay in the know.
                        </p>
                        <SubscribeForm/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

