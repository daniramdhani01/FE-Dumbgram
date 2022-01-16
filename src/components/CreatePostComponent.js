import { Button, Form } from 'react-bootstrap'
import Header from './Header'

//icons
import heart from '../assets/icons/heart.svg'
import paperPlane from '../assets/icons/paper-plane.svg'
import speechBubble from '../assets/icons/speech-bubble.svg'

//image
import kelapa from '../assets/kelapa.png'
import lisa from '../assets/lisa.png'
import man from '../assets/man.png'
import waterFall from '../assets/waterFall.png'
import moto from '../assets/moto.png'
import beach from '../assets/beach.png'
import holiday from '../assets/holiday.png'
import zayn from '../assets/zayn.png'
import city from '../assets/city.png'

function CreatePostComponen() {
    return (
        <>
            <div className="sticky-top p-4 mb-3" style={{ backgroundColor: 'black' }}>
                <Header />
                <h2>Create Post</h2>
            </div>

            <div className="sticky-top p-4 mb-3">
                <Button variant='secondary'>Upload Photos or Video</Button>
                <Form className='my-3'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={6} />
                    </Form.Group>
                </Form>
                <div className='d-flex justify-content-end mt-5'>
                    <Button variant='secondary'>Upload</Button>
                </div>
            </div>
        </>
    )
}

export default CreatePostComponen