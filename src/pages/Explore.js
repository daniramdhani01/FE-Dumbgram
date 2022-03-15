import Profile from "../components/profile/Profile"
import ExploreDetail from "../components/feed/ExploreDetail"



function Explore() {
    return (
        <div className="d-flex">
            <div className="col-3 overflow-hidden">
                <Profile />
            </div>
            <div>
                <hr style={{ width: 1, height: '100vh', minHeight: '100%', margin: 0 }} />
            </div>
            <div className="col-9">
                <ExploreDetail />
            </div>
        </div>
    )
}

export default Explore