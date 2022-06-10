
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import Record from './pages/Record';
import {useState} from "react";
import {signOut} from 'firebase/auth';

import {auth} from './firebaseConfig';


function App() {

  const [isAuth, setIsAuth] = useState(false);
 
  const signUserOut = () => {
    signOut( auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/";
    });
  };
  return (
    
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ? (<Link to="/Login">Sign in</Link>) : (
          <>
          <Link to="/CreatePost">Create Post</Link>
          <Link to="/Record">Pics</Link>
          <button onClick={signUserOut}>Log Out</button>
          
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Record" element={<Record />} />
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth}/>} />
        
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
