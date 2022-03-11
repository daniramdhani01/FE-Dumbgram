import { useNavigate } from 'react-router-dom'
import { Col } from 'react-bootstrap'

import logo from '../../assets/logo.svg'

export default function Contact({ dataContact, setContact, contact }) {
    const navigate = useNavigate()

    const clickContact = (id) => {
        const data = dataContact.find((item) => item.id == id);
        setContact(data);
        // console.log(data)
    };
    return (
        <>
            <div className='p-4 sticky-top'>
                {/* logo */}
                <img src={logo} alt="" className='img-fluid w-50 btn p-0 mb-5' onClick={() => navigate('/feed')} />

                {/* contact here */}
                {dataContact.map((item) => (
                    <div
                        class={`d-flex mb-4 ${contact?.id == item?.id && "contact-active"}`}
                        onClick={() => { clickContact(item.id) }}
                    >
                        <div className='me-4'>
                            <img src={item.img} alt="" className='userIcons-dm' />
                        </div>
                        <div>
                            <Col>{item.name}</Col>
                            <Col className='text-secondary'>{item.chat}</Col>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}