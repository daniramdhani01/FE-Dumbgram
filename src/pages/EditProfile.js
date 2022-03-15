import Profile from "../components/profile/Profile"
import EditProfileComponent from "../components/profile/EditProfileComponent"

export default function Feed() {
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
                <EditProfileComponent />
            </div>
        </div >
    )
}