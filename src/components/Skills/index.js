import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import metric1 from "../../assets/img/meter1.svg"
import metric2 from "../../assets/img/meter2.svg"
import metric3 from "../../assets/img/meter3.svg"
import bgColor from "../../assets/img/color-sharp.png"
import {useDispatch, useSelector} from "react-redux";
import { increment, decrement } from '../../redux/reducer/reducer1';

const Skills = () => {
    const responsive = {}

    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    const num = useSelector(state => state.slice1.num)
    const dispatch = useDispatch()
    const count = useSelector(state => state.slice2.count)

    return (
        <section className={"skill"} id={"skills"}>
            <Container>
                <Row>
                    <Col>
                        <div className={"skill-bx"}>
                            <h2>Skills</h2>
                            <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <div className={"item"}>
                                    <img src={metric1} alt={"Image"}/>
                                    <h5>Web Developer</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={metric2} alt={"Image"}/>
                                    <h5>Web Developer</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={metric3} alt={"Image"}/>
                                    <h5>Web Developer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={bgColor} alt={"Image"} className={"background-image-left"}/>
            <div>
                <p>Count:{count}</p>
                <p>Num:{num}</p>
                <Button onClick={() => {
                    console.log(count)
                    dispatch(increment(count))
                }}>+</Button>
                <Button onClick={() => dispatch(decrement(count))}>-</Button>

            </div>
        </section>
    );
}

export default Skills