import {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import logoImg from "../../assets/img/logo.svg"
import icon1 from "../../assets/img/nav-icon1.svg";
import icon2 from "../../assets/img/nav-icon2.svg";
import icon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {

    return (
        <section className="footer" id="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logoImg} alt="Header Img"/>
                    </Col>
                    <Col sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            <a href={""}><img src={icon1}/></a>
                            <a href={""}><img src={icon2}/></a>
                            <a href={""}><img src={icon3}/></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved zkk</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer