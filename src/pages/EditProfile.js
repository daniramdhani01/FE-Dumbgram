import { Container } from "react-bootstrap"
import Profile from "../components/Profile"
import FeedDetail from "../components/FeedDetail"
import EditProfileComponent from "../components/EditProfileComponent"

function Feed() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3">
                <Profile />
            </div>
            {/* line */}
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <EditProfileComponent />
            </div>
        </Container >
    )
}

export default Feed