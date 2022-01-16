import { Container, Row } from 'react-bootstrap'
import '../styles/style.css'
import Register from '../components/Register'
import Login from '../components/Login'

// image
import kelapa from '../assets/kelapa.png'
import lisa from '../assets/lisa.png'
import man from '../assets/man.png'
import waterFall from '../assets/waterFall.png'
import moto from '../assets/moto.png'
import beach from '../assets/beach.png'
import holiday from '../assets/holiday.png'
import tree from '../assets/tree.png'


function LandingPage() {
    return (
        <Container className="d-flex my-5">
            <div className="leftSide col-5 h-75 p-2">
                <h1 className='title-dg'>DumbGram</h1>
                <h3 style={{ fontFamily: "Arial" }}>Share your best photo or video</h3>
                <h5>Join now, share your creations with another people and enjoy other creations.</h5>
                <Login />
                <Register />
            </div>
            <div className="rightSide col-7 d-flex">
                <Row className="col-4">
                    <img src={waterFall} alt="" className='mb-3' />
                    <img src={man} alt="" className='mb-3' />
                    <img src={holiday} alt="" />
                </Row>
                <Row className="col-4">
                    <img src={kelapa} alt="" className='mb-3' />
                    <img src={beach} alt="" />
                </Row>
                <Row className="col-4">
                    <img src={lisa} alt="" className='mb-3' />
                    <img src={moto} alt="" className='mb-3' />
                    <img src={tree} alt="" />
                </Row>
            </div>
        </Container >
    )
}

export default LandingPage