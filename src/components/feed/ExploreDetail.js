import { useState, useContext, useEffect, } from 'react'
import Masonry from 'react-masonry-css'
import { useNavigate } from 'react-router-dom'
import Header from '../Header'
import { API } from '../../config/api'
import { UserContext } from '../../context/userContext'
import FeedModal from './FeedModal'

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

        return () => {
            setFeed([{
                caption: '',
                filename: '',
                id: '',
                like: '',
                likes: '',
                user: '',
            }])
        }
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
        <>
            <div className="p-4 sticky-top bg-black pb-3">
                <Header />
                <h2>Explore</h2>
            </div>

            {!feed[0] ?
                <div className="p-4 mb-3 h-50 d-flex justify-content-center align-items-center">
                    <h3>
                        No Data Explore
                    </h3>
                </div>
                :
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
            }
        </>
    )
}