import { useState } from 'react'
import { Modal, Button, Col, InputGroup, FormControl } from 'react-bootstrap'
import Header from './Header'
import Masonry from 'react-masonry-css'
import { Link } from 'react-router-dom'

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

function FeedDetail() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Body closeButton className='bg-dark rounded'>
                    <div className="d-flex">
                        {/* image post */}
                        <img src={holiday} alt="" className='rounded w-100 mb-2' />
                        <div className='col-4 p-3 '>

                            {/* user post*/}
                            <table>
                                <tr>
                                    <td>
                                        <Link to='/profile-people' className='text-decoration-none text-white'>
                                            <img src={zayn} alt="" className='userIcons' />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/profile-people' className='text-decoration-none text-white'>
                                            zayn
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className='text-secondary'>
                                        To Begin Again..
                                    </td>
                                </tr>
                            </table>
                            <hr />
                            {/* end of user post */}

                            {/* user comment */}
                            <div style={{ height: '60%' }}>
                                <table>
                                    <tr>
                                        <td>
                                            <Link to='/profile-people' className='text-decoration-none text-white'>
                                                <img src={zayn} alt="" className='userIcons' />
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to='/profile-people' className='text-decoration-none text-white'>
                                                abdul_h
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className='text-secondary'>
                                            Nice Place
                                        </td>
                                    </tr>
                                </table>
                            </div>
                            {/* end of user comments */}

                            <div className="w-100 text-end">
                                <img src={heart} alt="" className='icons me-2' />
                                <img src={speechBubble} alt="" className='icons me-2' />
                                <img src={paperPlane} alt="" className='icons' />

                                {/* Count Likes */}
                                <div className="mt-2 mb-1">
                                    156.290 Like
                                </div>
                            </div>
                            <InputGroup>
                                <FormControl
                                    placeholder="Comment ..."
                                    className='bg-secondary placeholder-edit text-white'
                                />
                            </InputGroup>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div>
                <div className="p-4 sticky-top bg-black pb-3">
                    <Header />
                    <h2>Feed</h2>
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
                            <img src={holiday} alt="" className='rounded w-100 mb-2' onClick={handleShow} />
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
            </div>
        </div >
    )
}

export default FeedDetail