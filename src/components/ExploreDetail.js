import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'

//icons
import heart from '../assets/icons/heart.svg'
import paperPlane from '../assets/icons/paper-plane.svg'
import speechBubble from '../assets/icons/speech-bubble.svg'

//image
import kelapa from '../assets/kelapa.png'
import lisa from '../assets/lisa.png'
import man from '../assets/man.png'
import waterFall from '../assets/waterFall.png'
import moto from '../assets/moto.png'
import beach from '../assets/beach.png'
import holiday from '../assets/holiday.png'
import zayn from '../assets/zayn.png'
import city from '../assets/city.png'

function ExploreDetail() {
    return (
        <>
            <div className="sticky-top p-4 mb-3" style={{ backgroundColor: 'black' }}>
                <Header />
                <h2>Explore</h2>
            </div>
            <div className="p-4 d-flex flex-wrap">
                <Row className="col-4 px-2">
                    <img src={waterFall} alt="" className='rounded w-100 mb-2' />
                    <img src={city} alt="" className='rounded w-100 mb-2' />
                </Row>

                <Row className="col-4 px-2">
                    <img src={holiday} alt="" className='rounded w-100 mb-2' />
                    <img src={kelapa} alt="" className='rounded w-100 mb-2' />
                </Row>

                <Row className="col-4 px-2">
                    <img src={moto} alt="" className='rounded w-100 mb-2' />
                    <img src={man} alt="" className='rounded w-100 mb-2' />
                </Row>
            </div>
        </>
    )
}

export default ExploreDetail