import { useNavigate } from 'react-router-dom'
import { useContext } from "react"

import { UserContext } from '../context/userContext'
import Profile from "../components/profile/Profile"
import FeedDetail from "../components/feed/FeedDetail"
import { setAuthToken } from '../config/api'

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function Feed() {
    const navigate = useNavigate();

    const [state] = useContext(UserContext)

    const checkAuth = () => {
        if (state.isLogin === false) {
            navigate("/")
        }
    }
    checkAuth()

    return (
        <div className="d-flex">
            <div className="col-3">
                <Profile />
            </div>
            {/* line */}
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <FeedDetail />
            </div>
        </div >
    )
}

export default Feed