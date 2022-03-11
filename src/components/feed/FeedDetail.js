import { useState, useContext, useEffect, } from 'react'
import Masonry from 'react-masonry-css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'
import FeedModal from './FeedModal'

//icons
import heart from '../../assets/icons/heart.svg'
import paperPlane from '../../assets/icons/paper-plane.svg'
import speechBubble from '../../assets/icons/speech-bubble.svg'

//image
import zayn from '../../assets/zayn.png'

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