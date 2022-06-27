import { Button, Modal, InputGroup, FormControl, Form, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'

import { UserContext } from '../../context/userContext'
import { API } from '../../config/api';

function Login(props) {

  const navigate = useNavigate()
  const { show, setModalRegister, setModalLogin } = props

  const handleOpenModal = () => {
    setModalRegister(true)
    setModalLogin(false)
  }

  const [state, dispatch] = useContext(UserContext)

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Create Configuration Content-type here ...
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user to database here ...
      const response = await API.post('/login', body, config);


      // Notification
      if (response.data.status == 'success') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data.user,
        });
        navigate('/feed')
      } else {
        const alert = (
          <Alert variant="danger" className="py-1 text-center">
            Failed! {response.data.message}
          </Alert>
        );
        setMessage(alert);
      }

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1 text-center">
          Failed!
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  return (
    <>
      <Modal {...props} dialogClassName="modal-90w" centered className=''>
        <Modal.Body className='rounded-2 bg-dark'>
          <Modal.Title className='mb-4 fs-1'>Login</Modal.Title>
          {message && message}
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Email'
                type='email'
                name='email'
                className="bg-secondary text-white placeholder-edit"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Password'
                type='password'
                name='password'
                className="bg-secondary text-white placeholder-edit"
                onChange={handleChange}
              />
            </InputGroup>
            <Button type='submit' variant="primary btn-rainbow" className='w-100 mb-3'>
              Login
            </Button>
          </Form>
          <div className="text-secondary d-flex justify-content-center mb-2">
            Don't have an account ? Klik <a className='btn text-white p-0 ms-1' onClick={handleOpenModal}> here </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login