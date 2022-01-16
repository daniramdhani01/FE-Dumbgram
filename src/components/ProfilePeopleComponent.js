import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'
//icons
import edit from '../assets/icons/edit.svg'
import home from '../assets/icons/home.svg'
import compass from '../assets/icons/compass.svg'
import logout from '../assets/icons/logout.svg' 
//image
import zayn from '../assets/zayn.png'

function ProfilePeopleComponent(){
    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <h1 className='title-dg text-start'>DumbGram</h1>
                <div className="d-flex justify-content-end">
                    <img src={edit} alt="" />
                </div>
                <img src={zayn} alt="" style={{ borderRadius: '1000px', width:125 }} />
                <h2>Zayn Malik</h2>
                <div className="mb-4">@zayn</div>
                <Button>Message</Button>{' '}
                <Button variant='secondary'>Unfollow</Button>

                <Row className='mt-4'>
                    <Col>
                        Post
                    </Col>
                    <Col>
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
                    <Col>
                        5.1 M
                    </Col>
                    <Col>
                        1
                    </Col>
                </Row>
               <p className='text-start my-3'>Nobody is Listening Out Now! 
                   www.inzayn.com
                   </p> 
                <hr />
                <Row className='text-start mb-3'>
                    <Col>
                        <Link to='/feed' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={home} alt="" className='me-3' />Feed
                        </Link>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Col>
                        <Link to='/explore' style={{ textDecoration: 'none', color: 'white' }}>
                            <img src={compass} alt="" className='me-3' />Explore
                        </Link>
                    </Col>
                </Row>
                <hr />
                <Row className='text-start'>
                    <Col>
                        <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
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