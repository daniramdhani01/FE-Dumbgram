import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Modal, InputGroup, FormControl, Alert, Form } from 'react-bootstrap'
import { UserContext } from '../../context/userContext';
import { API } from '../../config/api';

function Register(props) {
  const navigate = useNavigate()
  const [state, dispatch] = useContext(UserContext)
  const { setModalRegister, setModalLogin } = props

  const handleOpenModal = () => {
    setModalRegister(false)
    setModalLogin(true)
  }

  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });

  const { email, fullName, username, password } = form;

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
      // Content-type: application/json
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      // Convert form data to string here ...
      const body = JSON.stringify(form);

      // Insert data user to database here ...
      const response = await API.post('/register', body, config);

      // Notification
      if (response.data.status == 'success') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response.data.data.user,
        })
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
      <Modal {...props} centered>
        <Modal.Body className='rounded-2 bg-dark'>
          <Modal.Title className='mb-4 fs-1'>Register</Modal.Title>
          {message && message}
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Email'
                name='email'
                type='email'
                className="bg-secondary text-white placeholder-edit"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Name'
                name='fullName'
                className="bg-secondary text-white placeholder-edit"
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Username'
                name='username'
                className="bg-secondary text-white placeholder-edit"
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                aria-describedby="inputGroup-sizing-default"
                placeholder='Password'
                name='password'
                className="bg-secondary text-white placeholder-edit"
                type='password'
                onChange={handleChange}
              />
            </InputGroup>
            <Button type='submit' variant="primary btn-rainbow" className='w-100 mb-3'>
              Register
            </Button>
            <div className="d-flex justify-content-center mb-2 text-secondary">
              Already have an account ?  Klik <a className='btn text-white p-0 ms-1' onClick={handleOpenModal}> here </a>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register