// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

//pages
import LandingPage from './pages/LandingPage'
import Feed from './pages/Feed'
import Explore from './pages/Explore'
import ProfilePeople from './pages/ProfilePeople'
import CreatePost from './pages/CreatePost'
import Message from './pages/Message'
import EditProfile from './pages/EditProfile'

//components
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/feed' element={<Feed />} />
        <Route exact path='/create-post' element={<CreatePost />} />
        <Route exact path='/profile-people' element={<ProfilePeople />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/message' element={<Message />} />
        <Route exact path='/edit-profile' element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
