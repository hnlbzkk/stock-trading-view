import {Button, Col, Container, Nav, Row, Tab} from "react-bootstrap";
import projImg1 from "../../assets/img/project-img1.png"
import projImg2 from "../../assets/img/project-img2.png"
import projImg3 from "../../assets/img/project-img3.png"
import bgColor2 from "../../assets/img/color-sharp2.png"
import {ProjectCard} from "../ProjectCard";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCount} from "../../redux/reducer/reducer2";
const Projects = () => {

    const projects = [
        {
            title: "A",
            description: "desc",
            imgUrl: projImg1,
        },
        {
            title: "B",
            description: "desc",
            imgUrl: projImg2,
        },
        {
            title: "C",
            description: "desc",
            imgUrl: projImg3,
        },
    ]

    const dispatch = useDispatch()
    const count = useSelector(state => state.slice2.count)
    const [inputValue, setInputValue] = useState(count)
    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <section className={"project"} id={"project"}>
            <div>
                <input type={"number"} value={inputValue*1} onChange={handleInput}/>
                <Button onClick={() => dispatch(setCount(inputValue))}>Change</Button>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h2>Project</h2>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>
                            <Nav variant="pills" className={"nav-pills mb-5 justify-content-center align-items-center"} id={"pills-tab"}>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Option 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={"first"}>
                                    <Row>
                                        {
                                            projects.map((data, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...data}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    BBB
                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    CCC
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={bgColor2} alt={"Image"} className={"background-image-right"}/>
        </section>
    );
}

export default Projects