import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Col, Row, Button } from 'react-bootstrap'

import { UserContext } from '../../context/userContext'
import { API, } from '../../config/api'

//icons
import edit from '../../assets/icons/edit.svg'
import home from '../../assets/icons/home.svg'
import compass from '../../assets/icons/compass.svg'
import logout from '../../assets/icons/logout.svg'
import account from '../../assets/icons/account.svg'
//image
import logo from '../../assets/logo.svg'


export default function ProfilePeopleComponent() {
    const { id } = useParams()
    const [dataUser, setDataUser] = useState({
        following: '',
        follower: '',
        post: '',
        user: '',
    })
    const [isFollow, setIsFollow] = useState('false')
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
            const response = await API.get('/following/' + id, config)
            const response2 = await API.get('/follower/' + id, config)
            const response3 = await API.get('/feed/' + id, config)
            const response4 = await API.get('/user/' + id, config)
            setDataUser({
                following: response.data.data.following.length,
                follower: response2.data.data.follower,
                post: response3.data.feed.length,
                user: response4.data.data.user,
            })

            let checkFollower
            if (response2.data.data.follower) {
                if (state.user.id == id) {
                    return setIsFollow('myAccount')
                }

                checkFollower = response2.data.data.follower.find((item) => {
                    return item.id === state.user.id
                })
                if (checkFollower) {
                    setIsFollow('true')
                }

            }
            // console.log('status : ', isFollow)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        count()
    }, [])

    useEffect(() => {
        count()
    }, [isFollow])


    const handleLogout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }

    const handleFollow = async () => {
        try {
            const response = await API.post('/follow/' + id)
            setIsFollow('true')
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    const handleUnfollow = async () => {
        try {
            const response = await API.post('/unfollow/' + id)
            setIsFollow('false')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='text-center p-4 sticky-top'>
                <Link to='/Feed' className='d-flex justify-content-start'>
                    <img src={logo} alt="" className='img-fluid w-50' />
                </Link>

                {/* Photo Profile User */}
                {dataUser.user.image ?
                    dataUser.user.image.slice(-5) == '/null' ?
                        <img src={account}
                            className='mb-3 rounded-circle' style={{ width: 125, }} /> :
                        <img src={dataUser.user.image}
                            className='mb-3 rounded-circle' style={{ maxWidth: 125, maxHeight: 125, }} /> : 'no data'
                }

                <h4 className='name m-0'>{dataUser.user.fullName}</h4>
                <h6 className="text-secondary">@{dataUser.user.username}</h6>
                <div className='my-4'>
                    {isFollow == 'myAccount' ? '' : isFollow == 'true' ?

                        <div>
                            <Button variant='secondary btn-rainbow px-4' onClick={() => { navigate('/message') }}>Message</Button>{' '}
                            <Button variant='dark px-4' onClick={handleUnfollow}>Unfollow</Button>
                        </div>
                        :
                        <Button variant='secondary btn-rainbow px-4' onClick={handleFollow}>Follow</Button>
                    }
                </div>
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
                            {dataUser.follower.length}
                        </Col>
                        <Col>
                            {dataUser.following}
                        </Col>
                    </Row>
                </div>
                <div className='text-secondary text-start mt-3'>
                    {dataUser.user.bio}
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