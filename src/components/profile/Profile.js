import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'

import { UserContext } from '../../context/userContext'
import { API, setAuthToken } from '../../config/api'

//icons
import edit from '../../assets/icons/edit.svg'
import home from '../../assets/icons/home.svg'
import compass from '../../assets/icons/compass.svg'
import logout from '../../assets/icons/logout.svg'
import account from '../../assets/icons/account.svg'
//image
import logo from '../../assets/logo.svg'
import lisa from '../../assets/lisa.png'

// Init token on axios every time the app is refreshed here ...
// if (localStorage.token) {
//     setAuthToken(localStorage.token);
// }

function Profile() {
    const [dataUser, setDataUser] = useState({
        following: '',
        follower: '',
        post: ''
    })
    const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate()

    const count = async () => {
        try {
            const config = {
                // method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.token,
                },
            };
            const response = await API.get('/following/' + state.user.id, config)
            const response2 = await API.get('/follower/' + state.user.id, config)
            const response3 = await API.get('/feed/' + state.user.id, config)
            setDataUser({
                following: response.data.data.following.length,
                follower: response2.data.data.follower.length,
                post: response3.data.feed.length
            })
            // console.log(response3.data.feed.length)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        count()
    }, [])

    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }

    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <Link to='/Feed' className='d-flex justify-content-start'>
                    <img src={logo} alt="" className='img-fluid w-50' />
                </Link>
                <div className="d-flex justify-content-end">
                    <Link to='/edit-profile'>
                        <img src={edit} alt="" />
                    </Link>
                </div>
                {/* Photo Profile User */}
                {state.user.image ?
                    state.user.image.slice(-5) == '/null' ?
                        <img src={account}
                            className='mb-3 rounded-circle' style={{ width: 125, }} /> :
                        <img src={state.user.image}
                            className='mb-3 rounded-circle' style={{ maxWidth: 125, maxHeight: 125, }} /> : 'no data'
                }
                <h4 className='name m-0'>{state.user.fullName}</h4>
                <h6 className="text-secondary">@{state.user.username}</h6>
                <div>
                    <Row className='text-secondary'>
                        <Col>
                            Post
                        </Col>
                        <Col className='hr'>
                            Follower
                        </Col>
                        <Col>
                            Following
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {dataUser.post}
                        </Col>
                        <Col className='hr'>
                            {dataUser.follower}
                        </Col>
                        <Col>
                            {dataUser.following}
                        </Col>
                    </Row>
                </div>
                <div className='text-secondary text-start mt-3'>
                    {state.user.bio}
                </div>
                <hr />
                <Row className='text-start mb-3'>
                    <Col>
                        <Link to='/feed' className='text-secondary text-decoration-none'>
                            <img src={home} alt="" className='me-3' />Feed
                        </Link>
                    </Col>
                </Row>
                <Row className='text-start'>
                    <Col>
                        <Link to='/explore' className='text-secondary text-decoration-none'>
                            <img src={compass} alt="" className='me-3 text-light' />Explore
                        </Link>
                    </Col>
                </Row>
                <hr />
                <Row className='text-start'>
                    <Col>
                        <a onClick={handleLogout} className='btn text-secondary text-decoration-none p-0'>
                            <img src={logout} alt="" className='me-3' />Logout
                        </a>
                    </Col>
                </Row>
                <hr />
            </div>
        </>
    )
}

export default Profile