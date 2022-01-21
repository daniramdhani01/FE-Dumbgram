import Register from './Register'
import { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

function Login(props) {
  const { isButton } = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/feed')
  }

  return (
    <>
      {isButton ?
        <Button variant="primary btn-rainbow px-5" onClick={handleShow}>Login</Button> :
        <span className='text-white' onClick={handleShow}>{' '}Here</span>
      }

      <Modal show={show} onHide={handleClose} dialogClassName="modal-90w" centered className=''>
        <Modal.Body className='rounded-2 bg-dark'>
          <Modal.Title className='mb-4 fs-1'>Login</Modal.Title>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Email'
              type='email'
              className="bg-secondary text-white placeholder-edit"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Password'
              type='password'
              className="bg-secondary text-white placeholder-edit"
            />
          </InputGroup>
          <Link to='/feed' style={{ textDecoration: 'none', color: 'black' }}>
            <Button onClick={handleClick} variant="primary btn-rainbow" className='w-100 mb-3'>
              Login
            </Button>
          </Link>
          <div className="text-secondary d-flex justify-content-center mb-2">
            Don't have an account ? Klik
            <Register isButton={false} />
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login