import { useState, useContext, useEffect, } from 'react'
import { Modal, InputGroup, FormControl, Button } from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'

//icons
import heart from '../../assets/icons/heart.svg'
import paperPlane from '../../assets/icons/paper-plane.svg'
import speechBubble from '../../assets/icons/speech-bubble.svg'

//image
import holiday from '../../assets/holiday.png'
import zayn from '../../assets/zayn.png'

function FeedModal(props) {
    const { feed } = props

    const navigate = useNavigate()

    // console.log(feed)
    return (
        <Modal size="lg" {...props} centered>
            <Modal.Body className='bg-dark rounded p-0' style={{ minHeight: '350px' }}>
                <div className="d-flex">
                    {/* image post */}
                    <div className='col-7'>
                        <img src={feed.filename} alt="" className='rounded' style={{ width: '100%' }} />
                    </div>

                    <div className='col-5 p-3'>

                        {/* user post*/}
                        <div>
                            <img src={zayn} alt="" className='userIcons' style={{ width: 32 }} />
                            <a className='btn text-white p-0' onClick={() => { navigate('/profile-people/' + feed.user.id) }}>
                                {feed.user.username}
                            </a>
                        </div>
                        <div style={{ marginLeft: 43 }} className='text-secondary'>
                            {feed.caption}
                        </div>
                        <hr />
                        {/* end of user post */}

                        {/* user comment */}

                        {/* {feed.comments.map((item, index) => {
                            return (
                                <div key={index} style={{ height: '' }} className='overflow-auto'>
                                    <div>
                                        <img src={zayn} alt="" className='userIcons' style={{ width: 32 }} />
                                        <Link to='/profile-people' className='text-decoration-none text-white'>
                                            {item.user.username}
                                        </Link>
                                    </div>
                                    <div style={{ marginLeft: 43 }} className='text-secondary'>
                                        {item.comment}
                                    </div>
                                </div>
                            )
                        })} */}

                        {/* end of user comments */}

                        <div className="w-100 text-end">
                            <img src={heart} alt="" className='icons me-2' />
                            <img src={speechBubble} alt="" className='icons me-2' />
                            <img src={paperPlane} alt="" className='icons' />

                            {/* Count Likes */}
                            <div className="mt-2 mb-1">
                                {feed.like} Like
                            </div>
                        </div>
                        <InputGroup>
                            <FormControl
                                placeholder="Comment ..."
                                className='bg-secondary placeholder-edit text-white'
                            />
                        </InputGroup>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default function ExploreDetail() {
    const [modal, setModal] = useState(false)
    const [dataFeedM, setDataFeedM] = useState({
        caption: '',
        filename: '',
        id: '',
        like: '',
        likes: '',
        user: '',
        comments: '',
    })

    // start here
    const navigate = useNavigate()
    const [feed, setFeed] = useState([{
        caption: '',
        filename: '',
        id: '',
        like: '',
        likes: '',
        user: '',
    }])
    const [state] = useContext(UserContext)

    const checkAuth = () => {
        if (state.islogin == false) {
            navigate('/')
        }
    }
    checkAuth()

    const getFeeds = async () => {
        try {
            const config = {
                // method: "GET",
                headers: {
                    Authorization: "Bearer " + localStorage.token,
                },
            };
            const response = await API.get('/feeds', config)
            setFeed(response.data.feed)
            // console.log(response.data.feed)
        } catch (err) {
            console.log(err)
        }
    }
    // Call function get products with useEffect didMount (first call data) here ...
    useEffect(() => {
        getFeeds()
    }, [])

    const [isLike, setisLike] = useState(false)

    const handleLike = async (i) => {
        try {
            const response = await API.post('/like/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <div className="p-4 sticky-top bg-black pb-3">
                    <Header />
                    <h2>Explore</h2>
                </div>

                <div className="px-4">
                    {/* masonry gird here */}
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">

                        {/* array of JSX items */}
                        {feed.map((item, index) => {
                            return (
                                <div key={index}>
                                    <a className="btn" onClick={() => { setModal(true); setDataFeedM(item) }}>
                                        <img src={item.filename} className='rounded w-100 mb-2' />
                                    </a>
                                </div>
                            )
                        })}
                        <FeedModal
                            show={modal}
                            onHide={() => setModal(false)}
                            feed={dataFeedM} />
                    </Masonry>
                </div>
            </div>
        </div >
    )
}