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
            <div className="p-4 sticky-top bg-black pb-3">
                <Header />
                <h2>Edit Profile</h2>
            </div>

            <div className="p-4">
                <Button variant='secondary btn-rainbow'>Upload Photos or Video</Button>
                <Form>
                    <Form.Group>
                        <Form.Control 
                        className="my-3 bg-dark text-white"
                        as="input"
                        placeholder='Name'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        className="my-3 bg-dark text-white"
                        as="input"
                        placeholder='Username'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control 
                        className="my-3 bg-dark text-white"
                        as="textarea"
                        rows={6} 
                        placeholder='Bio'/>
                    </Form.Group>
                </Form>
                <div className='d-flex justify-content-end mt-5'>
                    <Button variant='secondary btn-rainbow px-5'>Upload</Button>
                </div>
            </div>
        </>
    )
}

export default CreatePostComponen