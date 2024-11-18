import React, {useState} from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {login} from "../../axios/service/authService";
import {useDispatch} from "react-redux";
import {setToken} from "../../redux/slice/authSlice";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(email, password);
            console.log("登录成功:", response);

            // 将 Token 存入 Redux
            dispatch(setToken(response.data.token));

            window.location.href = "/home"; // 跳转到主页
        } catch (err) {
            // setError(err.response?.data?.message || "登录失败");
            console.error(err)
        }
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center vh-100 bg-black text-light">
            <Row>
                <Col>
                    <Card style={{ width: "24rem" }} className="bg-dark text-light">
                        <Card.Body>
                            <Card.Title className="text-center mb-4 bg-dark text-light">登录</Card.Title>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-dark text-light"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="bg-dark text-light"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FloatingLabel>
                            <Button
                                type="submit"
                                variant="outline-info"
                                className="w-100 mt-5"
                                onClick={handleLogin}
                            >
                                确定
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Login;