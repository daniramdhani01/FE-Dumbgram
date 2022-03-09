import { Container } from "react-bootstrap"
import MessageDetail from "../components/message/MessageDetail"
import Contact from "../components/message/Contact"

function Message() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3 overflow-hidden">
                <Contact />
            </div>
            <div>
                <hr style={{ width: 1, height: '100%', minHeight: '100vh', margin: 0 }} />
            </div>
            <div className="col-9">
                <MessageDetail />
            </div>
        </Container>
    )
}

export default Message