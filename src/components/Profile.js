import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
//icons
import edit from '../assets/icons/edit.svg'
import home from '../assets/icons/home.svg'
import compass from '../assets/icons/compass.svg'
import logout from '../assets/icons/logout.svg'
//image
import logo from '../assets/logo.svg'
import lisa from '../assets/lisa.png'

function Profile() {
    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <Link to='/Feed' className='d-flex justify-content-start'>
                    <img src={logo} alt="" className='img-fluid w-50' />
                </Link>
                <div className="d-flex justify-content-end">
                    <Link to='/edit-profile'>
                        <img src={edit} alt="" />
                    </Link>
                </div>
                {/* Photo Profile User */}
                <img src={lisa} alt="" className='mb-3' style={{ borderRadius: '1000px', width: 125 }} />
                <h4 className='name m-0'>Lisa</h4>
                <h6 className="text-secondary">@lalalisa_m</h6>
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
                        200
                    </Col>
                    <Col className='hr'>
                        5.1 M
                    </Col>
                    <Col>
                        1
                    </Col>
                </Row>
                <div className='text-secondary text-start mt-3'>
                    Rapper in Black Pink, Brand Ambasador Penshoppe
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

export default Profile