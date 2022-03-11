import { Modal, InputGroup, FormControl } from 'react-bootstrap'
import { API } from '../../config/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//icons
import heart from '../../assets/icons/heart.svg'
import paperPlane from '../../assets/icons/paper-plane.svg'
import speechBubble from '../../assets/icons/speech-bubble.svg'

//image
import zayn from '../../assets/zayn.png'

export default function FeedModal(props) {
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