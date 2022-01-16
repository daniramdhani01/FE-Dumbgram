import { Container } from "react-bootstrap"
import Profile from "../components/Profile"
import CreatePostComponen from "../components/CreatePostComponent"



function CreatePost() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3">
                <Profile />
            </div>
            <div className="d-flex justify-content-center">
                <hr className="my-0 p-0" style={{ width: 1, height: '100%', minHeight:'100vh' }} />
            </div>
            <div className="col-9">
                <CreatePostComponen />
            </div>
        </Container>
    )
}

export default CreatePost