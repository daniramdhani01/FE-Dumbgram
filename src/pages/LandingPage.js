import { Container, Button, Modal, InputGroup, FormControl } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/style.css'
import { useState } from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

// image
import grupPhotos from '../assets/Group-photos.png'
import logo from '../assets/logo.svg'

function LandingPage() {
    return (
        <Container className="d-flex flex-wrap justify-content-center mb-4">
            <div className="col-5 mt-40" style={{ minWidth: 300 }}>
                <img src={logo} alt="" className='logo-lp img-fluid mb-5 mt-3' style={{ margin: -20 }} />
                <div className='title-lp'>Share your best photo or videos</div>
                <div className='subtitle-lp mt-2 mb-4'>Join now, share your creations with another people and enjoy other creations.</div>
                <Login isButton={true}/>{' '}
                <Register isButton={true}/>
            </div>
            <div className='mt-40 col-6 d-flex flex-wrap justify-content-center'>
                <img src={grupPhotos} alt="" className='img-grup-lp img-fluid' />
            </div>
        </Container >
    )
}

export default LandingPage