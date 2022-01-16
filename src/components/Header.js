import { Link } from 'react-router-dom'
import { Col, Button, InputGroup, FormControl } from 'react-bootstrap'

//icons
import loupe from '../assets/icons/loupe.svg'
import bell from '../assets/icons/bell.svg'
import paperPlane from '../assets/icons/paper-plane.svg'
import plus from '../assets/icons/plus.svg'

function Header() {
    return (
        <div className='d-flex mb-3'>
            <Col>
                <InputGroup className="">
                    <InputGroup.Text id="search" className='bg-dark'>
                        <img src={loupe} alt="" />
                    </InputGroup.Text>
                    <FormControl
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search"
                    />
                </InputGroup>
            </Col>
            <Col className='d-flex justify-content-end'>
                <img src={bell} alt="" className='me-4' />
                <img src={paperPlane} alt="" className='me-4' />
                <Link to='/CreatePost' >
                    <div className="btn btn-secondary"><img src={plus} alt="" />{' '}Create Post</div>
                </Link>
            </Col>
        </div>
    )
}

export default Header