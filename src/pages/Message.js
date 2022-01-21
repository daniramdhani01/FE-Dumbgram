import { Container } from "react-bootstrap"
import MessageDetail from "../components/MessageDetail"
import Sender from "../components/Sender"

function Message() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3">
                <Sender />
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