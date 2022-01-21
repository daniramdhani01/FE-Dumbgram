import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header'
import Masonry from 'react-masonry-css'

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

function FeedPeople() {
    return (
        <>
            <div className="p-4 sticky-top bg-black pb-3">
                <Header />
                <h2>Zayn, Feed</h2>
            </div>

            <div className="px-4">
                {/* masonry gird here */}
                <Masonry
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {/* array of JSX items */}

                    <Col>
                        <img src={waterFall} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>

                    <Col>
                        <img src={holiday} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>

                    <Col>
                        <img src={moto} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>
                    <Col>
                        <img src={city} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>
                    <Col>
                        <img src={kelapa} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>
                    <Col>
                        <img src={man} alt="" className='rounded w-100 mb-2' />
                        <div className="d-flex align-items-center mb-2">
                            <img src={zayn} alt="" className='userIcons' />
                            zayn
                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />
                            </div>
                        </div>
                        <div className='text-end'>
                            126.100 Like
                        </div>
                    </Col>
                </Masonry>
            </div>
        </>
    )
}

export default FeedPeople