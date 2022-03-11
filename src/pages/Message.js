import { useState } from "react"
import { Container } from "react-bootstrap"
import Chat from "../components/message/Chat"
import Contact from "../components/message/Contact"

import man from '../assets/man.png'

function Message() {
    const [contact, setContact] = useState(null)

    const dataContact = [
        {
            id: 1,
            name: 'Michael',
            chat: 'Hai Lisa',
            img: man
        },
        {
            id: 2,
            name: 'Zain',
            chat: 'Hello World',
            img: man
        }
    ]
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3 overflow-hidden">
                <Contact dataContact={dataContact} setContact={setContact} contact={contact} />
            </div>
            <div>
                <hr style={{ width: 1, height: '100%', minHeight: '100vh', margin: 0 }} />
            </div>
            <div className="col-9">
                <Chat contact={contact} />
            </div>
        </Container>
    )
}

export default Message