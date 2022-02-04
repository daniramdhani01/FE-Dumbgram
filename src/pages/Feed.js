import { useNavigate } from 'react-router-dom'
import { useContext } from "react"
import { Container } from "react-bootstrap"

import { UserContext } from '../context/userContext'
import Profile from "../components/Profile"
import FeedDetail from "../components/FeedDetail"

function Feed() {
    const navigate = useNavigate();

    const [state] = useContext(UserContext)

    const isLogin = false

    const checkAuth = () => {
        // if (state.isLogin === false) {
        if (isLogin === false) {
            // console.log('its work. isLogin =', state.isLogin)
            navigate("/login")
            console.log('its work')
        }
    }
    checkAuth()

    return (
        <Container fluid="xxl" className="d-flex">
            <div className="col-3 overflow-hidden">
                <Profile />
            </div>
            {/* line */}
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <FeedDetail />
            </div>
        </Container >
    )
}

export default Feed