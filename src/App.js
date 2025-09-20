import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import GuestRegister from './pages/GuestRegister';
import SignUp from './pages/SignUp';
import BookingDetails from './pages/BookingDetails';
import HomePage from './pages/HomePage';

function App() {
  return (

    <Router>
      <nav style={{ textAlign: "center", margin: "20px" }}>

        <Link to="/" state={{ margin: "0 10px" }} >Login</Link>
        <Link to="/home" state={{ margin: "0 10px" }} > HOME</Link>
        <Link to="/signup" state={{ margin: "0 10px" }} > Sign Up</Link>

      </nav>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />l̥
        <Route path="/register" element={<GuestRegister />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />

      </Routes>

    </Router>

  );
}

export default App;
