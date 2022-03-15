import FeedPeople from "../components/feed/FeedPeople"
import ProfilePeopleComponent from "../components/profile/ProfilePeopleComponent"

function ProfilePeople() {
    return (
        <div className="d-flex">
            <div className="col-3 overflow-hidden">
                <ProfilePeopleComponent />
            </div>
            <div className="d-flex justify-content-center">
                <hr className="my-0 p-0" style={{ width: 1, height: '100%', minHeight: '100vh' }} />
            </div>
            <div className="col-9">
                <FeedPeople />
            </div>
        </div>
    )
}

export default ProfilePeople