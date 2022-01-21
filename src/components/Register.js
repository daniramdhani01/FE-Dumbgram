import Login from './Login';
import { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

function Register(props) {
  const { isButton } = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {isButton ?
        <Button variant="btn btn-transparent" onClick={handleShow}>Register</Button> :
        <span className='text-white' onClick={handleShow}>{' '}Here</span>
      }

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className='rounded-2 bg-dark'>
          <Modal.Title className='mb-4 fs-1'>Register</Modal.Title>
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
              placeholder='Name'
              className="bg-secondary text-white placeholder-edit"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Username'
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
          <Button variant="primary btn-rainbow" onClick={handleClose} className='w-100 mb-3'>
            Register
          </Button>
          <div className="d-flex justify-content-center mb-2 text-secondary">
            Already have an account ?  Klik <Login isButton={false} onClick={handleClose} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register