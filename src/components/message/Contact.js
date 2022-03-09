import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import logo from '../../assets/logo.svg'
import man from '../../assets/man.png'

export default function Contact() {
    return (
        <>
            <div className='p-4 sticky-top'>
                {/* logo */}
                <Link to='/Feed' className='d-flex justify-content-start mb-5'>
                    <img src={logo} alt="" className='img-fluid w-50 ' />
                </Link>

                {/* sender here */}
                <div className='d-flex mb-4'>
                    <div className='me-4'>
                        <img src={man} alt="" className='userIcons-dm' />
                    </div>
                    <div>
                        <Col>egi_lol</Col>
                        <Col className='text-secondary'>Hello Lisa</Col>
                    </div>
                </div>

                <div className='d-flex mb-4'>
                    <div className='me-4'>
                        <img src={man} alt="" className='userIcons-dm' />
                    </div>
                    <div>
                        <Col>egi_lol</Col>
                        <Col className='text-secondary'>Hello Lisa</Col>
                    </div>
                </div>
            </div>
        </>
    )
}