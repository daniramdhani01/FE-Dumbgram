import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'

function Register() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Register</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title><span className='text-dark'>Register</span></Modal.Title>
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
              placeholder='Name'
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl
              aria-describedby="inputGroup-sizing-default"
              placeholder='Username'
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
            Register
          </Button>
          <div className="text-dark d-flex justify-content-center">Already have an account ?  Klik <Link to='/feed' style={{textDecoration:'none', color:'black'}}>Here</Link></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register