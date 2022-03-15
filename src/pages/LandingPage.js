import { Container, Button } from 'react-bootstrap'
import { useState } from 'react'
import Register from '../components/auth/Register'
import Login from '../components/auth/Login'
import '../styles/style.css'

// image
import grupPhotos from '../assets/Group-photos.png'
import logo from '../assets/logo.svg'

export default function LandingPage() {

    document.title = 'DumbGram'

    const [modalRegister, setModalRegister] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)

    return (
        <Container className="d-flex flex-wrap justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="col-5" style={{ minWidth: 300 }}>
                <img src={logo} alt="" className='logo-lp img-fluid mb-5 mt-3' style={{ margin: -20 }} />
                <div className='title-lp'>Share your best photo or videos</div>
                <div className='subtitle-lp mt-2 mb-4'>Join now, share your creations with another people and enjoy other creations.</div>
                <Button variant="primary btn-rainbow px-5" onClick={() => { setModalLogin(true) }}>Login</Button> {' '}
                <Login
                    show={modalLogin}
                    onHide={() => setModalLogin(false)}
                    setModalLogin={setModalLogin}
                    setModalRegister={setModalRegister} />

                <Button variant="btn btn-transparent" onClick={() => { setModalRegister(true) }}>Register</Button>

                <Register
                    show={modalRegister}
                    onHide={() => setModalRegister(false)}
                    setModalLogin={setModalLogin}
                    setModalRegister={setModalRegister} />
            </div>
            <div className='col-6 d-flex flex-wrap justify-content-center'>
                <img src={grupPhotos} alt="" className='img-grup-lp img-fluid' />
            </div>
        </Container >
    )
}