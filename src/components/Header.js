import { Link, } from 'react-router-dom'
import { Col, Dropdown, InputGroup, FormControl } from 'react-bootstrap'

//icons
import loupe from '../assets/icons/loupe.svg'
import bell from '../assets/icons/bell.svg'
import paperPlane from '../assets/icons/paper-plane.svg'
import plus from '../assets/icons/plus.svg'

// import image
import man from '../assets/man.png'

function Header() {
    return (
        <div className='d-flex mb-4'>
            <Col>
                <InputGroup>
                    <InputGroup.Text id="search" className='bg-dark btn btn-outline-dark d-flex justify-content-center align-items-center'>
                        <img src={loupe} alt="" />
                    </InputGroup.Text>
                    <FormControl
                        className="bg-dark btn-outline-dark"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="search"
                    />
                </InputGroup>
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
                <Dropdown>
                    <Dropdown.Toggle id="" variant="black">
                        <img src={bell} alt="" className='me-4' />
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="dark">
                        <Dropdown.Item href="#/action-1" className='mb-2'>
                            <div>
                            <img src={man} alt="" className='rounded-circle' style={{ width: 32, marginRight:12 }} /> Abdullah
                            </div>
                            <div className='ms-5'>
                                Komentar : <span className='text-secondary'>nice place</span>
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to='/message'>
                    <img src={paperPlane} alt="" className='me-4' />
                </Link>
                <Link to='/create-post' className='btn btn-rainbow text-white'>
                    <img src={plus} alt="" className='p-2 rounded' style={{ background: '#00000040' }} />{' '}
                    Create Post
                </Link>
            </Col>
        </div>
    )
}

export default Header