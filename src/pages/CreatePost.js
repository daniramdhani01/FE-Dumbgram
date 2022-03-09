import { Container } from "react-bootstrap"
import Profile from "../components/profile/Profile"
import CreatePostComponen from "../components/feed/CreatePostComponent"

function CreatePost() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3">
                <Profile />
            </div>
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <CreatePostComponen />
            </div>
        </Container>


    )
}

export default CreatePost