import { Container } from "react-bootstrap"
import Profile from "../components/Profile"
import ExploreDetail from "../components/ExploreDetail"



function Explore() {
    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3 overflow-hidden">
                <Profile />
            </div>
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <ExploreDetail />
            </div>
        </Container>
    )
}

export default Explore