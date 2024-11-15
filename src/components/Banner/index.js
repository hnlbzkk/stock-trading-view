import {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import "animate.css";
import TrackVisibility from "react-on-screen";
import headerImg from "../../assets/img/header-img.svg";

const Banner = () => {
    // 循环数量（取决于数组长度）
    const [loopNum, setLoopNum] = useState(0)
    // 判断动画当前是删除还是展示
    const [isDeleting, setIsDeleting] = useState(false)
    // 数组
    const toRotate = ["Web Developer", "Java", "Go"]
    // 单个文本
    const [text, setText] = useState('')
    // 随机数
    const [random, setRandom] =useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        // 定时器: 每random秒后执行tick()
        let ticker = setInterval(() => {
            tick()
        }, random)

        return () => { clearInterval(ticker)}
    }, [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        // 设置新的文本
        setText(updatedText)

        // 删除和展示的速度不一样
        if (isDeleting) {
            setRandom(prevRandom => prevRandom / 2)
        }

        // 判断是否展示完全文本
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setRandom(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setRandom(500)
        }
    }

    return (
        <>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                                    <span className="tagline">Welcome to my </span>
                                    <h1>{`Hi I'm zkk  `}<span className="wrap">{text}|</span></h1>
                                    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                                    <button onClick={() => {console.log('button click')}}>
                                        Button <ArrowRightCircle size={25} />
                                    </button>
                                </div>}
                            </TrackVisibility>

                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header Img"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Banner