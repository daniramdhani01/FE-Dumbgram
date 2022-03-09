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

    const [liked, setLiked] = useState(false)
    const handleLike = () => {
        API.post('/like/')
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 1])
    // console.log(feed)
    return (
        <Modal size="lg" {...props} centered>
            <Modal.Body className='bg-dark rounded p-0' >
                <div className="d-flex">
                    {/* image post */}
                    <div className='col-7'>
                        <div className='d-flex justify-content-center align-items-center' style={{ width: '465px', height: '500px' }}>
                            <img src={feed.filename} alt="" className='rounded' style={{ maxWidth: '465px', maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                    </div>

                    <div className='col-5 p-3' style={{ height: '500px' }}>

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
                        <div className='overflow-auto' style={{ height: 280 }}>
                            {dummy.map((item, index) => {
                                return (
                                    <div key={index} style={{ height: '' }}>
                                        <div className='d-flex' >
                                            <img src={zayn} alt="" className='userIcons' style={{ width: 32, height: '100%' }} />
                                            <div className='text-decoration-none text-white'>
                                                Abdul malik
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: 43, marginTop: '-5px' }} className='text-secondary mb-4'>
                                            comment here...
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
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

export default function FeedDetail() {
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
            const response = await API.get('/feed', config)
            setFeed(response.data.feed)
            // console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    // Call function get products with useEffect didMount (first call data) here ...
    useEffect(() => {
        getFeeds()
    }, [feed])

    const [isLike, setisLike] = useState([false])


    return (
        <div>
            <div>
                <div className="p-4 sticky-top bg-black pb-3">
                    <Header />
                    <h2>Feed</h2>
                </div>

                <div className="px-4">
                    {/* masonry gird here */}
                    <Masonry
                        breakpointCols={3}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">

                        {/* array of JSX items */}
                        {feed.map((item, index) => (
                            // return (
                            <div key={index} className='text-center'>
                                <a className="btn" onClick={() => { setModal(true); setDataFeedM(item) }}>
                                    <img src={item.filename} className='rounded w-100 mb-2' />
                                </a>
                                <div className="d-flex align-items-center mb-2 flex-wrap" >
                                    {/* <img src={item.user.image} className='userIcons' /> */}
                                    <img src={zayn} className='userIcons' />
                                    {item.user.username}
                                    <div className="w-100 text-end" style={{ minWidth: '50px' }}>
                                        {/* {isLike ?
                                                <a className='btn p-0' onClick={handleLike()} idFeed={item.id}><img src={heart} alt="" className='icons me-2 bg-danger' /></a>
                                                :
                                                <a className='btn p-0' onClick={handleLike()} idFeed={item.id}><img src={heart} alt="" className='icons me-2' /></a>
                                            } */}
                                        <img src={heart} alt="" className='icons me-2' />
                                        <img src={speechBubble} alt="" className='icons me-2' />
                                        <img src={paperPlane} alt="" className='icons' />
                                    </div>
                                </div>
                                <div className='text-end'>
                                    {item.like > 0 ? item.like + ' Like' : ''}
                                </div>
                            </div>
                        )
                        )}
                        <FeedModal
                            show={modal}
                            onHide={() => setModal(false)}
                            feed={dataFeedM} />
                    </Masonry>
                </div>
            </div >
        </div >
    )
}