import { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/userContext'
import { Routes, Route, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { API, setAuthToken } from "./config/api";


//pages
import LandingPage from './pages/LandingPage'
import Feed from './pages/Feed'
import Explore from './pages/Explore'
import ProfilePeople from './pages/ProfilePeople'
import CreatePost from './pages/CreatePost'
import Message from './pages/Message'
import EditProfile from './pages/EditProfile'

//components
import Login from './components/auth/Login'

// Init token on axios every time the app is refreshed here ...
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  const navigate = useNavigate()

  const [state, dispatch] = useContext(UserContext)
  // console.log(state)
  useEffect(() => {
    // Redirect Auth
    if (state.isLogin == false) {
      navigate("/");
    }
    else {
      navigate("/feed");
    }

  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 400) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      // Get user data
      let payload = response.data.data.user;

      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (

    <Routes>
      <Route exact path='/' element={<LandingPage />} />
      <Route exact path='/explore' element={<Explore />} />
      <Route exact path='/feed' element={<Feed />} />
      <Route exact path='/create-post' element={<CreatePost />} />
      <Route exact path='/profile-people/:id' element={<ProfilePeople />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/message' element={<Message />} />
      <Route exact path='/edit-profile' element={<EditProfile />} />
    </Routes>
  );
}

export default App;
