import { Container, Button, Row, Col, Modal } from 'react-bootstrap'
import '../styles/style.css'
import Register from '../components/Register'

// image
import Rectangle3 from '../assets/Rectangle3.png'
import Rectangle4 from '../assets/Rectangle4.png'
import Rectangle5 from '../assets/Rectangle5.png'
import Rectangle6 from '../assets/Rectangle6.png'
import Rectangle8 from '../assets/Rectangle8.png'
import Rectangle9 from '../assets/Rectangle9.png'
import Rectangle10 from '../assets/Rectangle10.png'
import Rectangle12 from '../assets/Rectangle12.png'


function LandingPage() {
    return (
        <Container className="d-flex my-5">
            <div className="leftSide col-5 h-75 p-2">
                <h1 className='title-dg'>DumbGram</h1>
                <h3 style={{ fontFamily: "Arial" }}>Share your best photo or video</h3>
                <h5>Join now, share your creations with another people and enjoy other creations.</h5>
                <Button>Login</Button>{' '}
                <Register />
            </div>
            <div className="rightSide col-7 d-flex">
                <Row className="col-4">
                    <img src={Rectangle6} alt="" className='mb-3' />
                    <img src={Rectangle5} alt="" className='mb-3' />
                    <img src={Rectangle10} alt="" />
                </Row>
                <Row className="col-4">
                    <img src={Rectangle3} alt="" className='mb-3' />
                    <img src={Rectangle9} alt="" />
                </Row>
                <Row className="col-4">
                    <img src={Rectangle4} alt="" className='mb-3' />
                    <img src={Rectangle8} alt="" className='mb-3' />
                    <img src={Rectangle12} alt="" />
                </Row>
            </div>
        </Container >
    )
}

export default LandingPage