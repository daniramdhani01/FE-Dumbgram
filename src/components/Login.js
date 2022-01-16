import { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Login</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title><span className='text-dark'>Login</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Email'
              type='email'
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Password'
              type='password'
            />
          </InputGroup>
          <Button variant="primary" onClick={handleClose} className='w-100 mb-3'>
            Login
          </Button>
          <div className="text-dark d-flex justify-content-center">Don't have an account ? Klik Here</div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login