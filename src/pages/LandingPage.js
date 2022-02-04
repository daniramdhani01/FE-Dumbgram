import { Container, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import { useContext, useState } from 'react'

import { UserContext } from '../context/userContext'
import Register from '../components/Register'
import Login from '../components/Login'
import '../styles/style.css'

// image
import grupPhotos from '../assets/Group-photos.png'
import logo from '../assets/logo.svg'

export default function LandingPage() {

    const title = "Landing Page"
    document.title = 'DumbGram | ' + title

    const [modalRegister, setModalRegister] = useState(false)
    const [modalLogin, setModalLogin] = useState(false)
    // let navigate = useNavigate();

    // const [state] = useContext(UserContext)

    // const checkAuth = () => {
    //     if (state.isLogin === false) {
    //         navigate("/")
    //     }
    // }
    // checkAuth()

    return (
        <Container className="d-flex flex-wrap justify-content-center align-items-center mb-4" style={{ height: '100vh' }}>
            <div className="col-5 mt-40" style={{ minWidth: 300 }}>
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
            <div className='mt-40 col-6 d-flex flex-wrap justify-content-center'>
                <img src={grupPhotos} alt="" className='img-grup-lp img-fluid' />
            </div>
        </Container >
    )
}