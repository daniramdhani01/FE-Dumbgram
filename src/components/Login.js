import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

import Register from './Register'
import { useState } from 'react'

function Login(props) {

  const navigate = useNavigate()
  const { isButton, setModalRegister, setModalLogin } = props

  console.log(props)

  const handleOpenModal = () => {
    setModalRegister(true)
    setModalLogin(false)
  }

  const handleClick = () => {
    navigate('/feed')
  }

  const [state, dispatch] = useContext(UserContext)

  const login = () => {
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        id: 1,
        name: 'dani',
        username: 'dani',
        email: 'dani01@gmail.com',
        token: 'disini tokennya',
      }
    })
    navigate('/feed')
  }

  return (
    <>
      <Modal {...props} dialogClassName="modal-90w" centered className=''>
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
            Don't have an account ? Klik <a className='btn text-white p-0 ms-1' onClick={handleOpenModal}> here </a>
          </div>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login