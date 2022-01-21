import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
//icons
import edit from '../assets/icons/edit.svg'
import home from '../assets/icons/home.svg'
import compass from '../assets/icons/compass.svg'
import logout from '../assets/icons/logout.svg'
//image
import zayn from '../assets/zayn.png'
import logo from '../assets/logo.svg'

function ProfilePeopleComponent() {
    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <Link to='/Feed' className='d-flex justify-content-start mb-4'>
                    <img src={logo} alt="" className='img-fluid w-50' />
                </Link>
                {/* Photo Profile User */}
                <img src={zayn} alt="" className='mb-3' style={{ borderRadius: '1000px', width: 125 }} />
                <h4 className='name m-0'>Zayn Malik</h4>
                <h6 className="text-secondary">@zayn</h6>
                <div className='my-4'>
                    <Button variant='secondary btn-rainbow px-4'>Message</Button>{' '}
                    <Button variant='dark px-4'>Unfollow</Button>
                </div>

                <Row className='text-secondary'>
                    <Col>
                        Post
                    </Col>
                    <Col className='hr'>
                        Follower
                    </Col>
                    <Col>
                        Following
                    </Col>
                </Row>
                <Row>
                    <Col>
                        143
                    </Col>
                    <Col className='hr'>
                        40.5 M
                    </Col>
                    <Col>
                        28
                    </Col>
                </Row>
                <div className='text-secondary text-start mt-3'>
                    Nobody is Listening Out Now!
                    www.inzayn.com
                </div>
                <hr />
                <Row className='text-start mb-3'>
                    <Col>
                        <Link to='/feed' className='text-secondary text-decoration-none'>
                            <img src={home} alt="" className='me-3' />Feed
                        </Link>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Col>
                        <Link to='/explore' className='text-secondary text-decoration-none'>
                            <img src={compass} alt="" className='me-3 text-light' />Explore
                        </Link>
                    </Col>
                </Row>
                <hr />
                <Row className='text-start'>
                    <Col>
                        <Link to='/' className='text-secondary text-decoration-none'>
                            <img src={logout} alt="" className='me-3' />Logout
                        </Link>
                    </Col>
                </Row>
                <hr />
            </div>
        </>
    )
}

export default ProfilePeopleComponent