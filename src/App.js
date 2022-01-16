// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
        </nav>
      <LandingPage />
    </div>
    </Router>
  );
}

export default App;
