import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BookingDetails from './pages/BookingDetails';
import HomePage from './pages/HomePage';
import AllUserData from './pages/AllUserData';
import UpdateBooking from './pages/UpdateBooking';
import UpdatedUser from './pages/UpdateUser';
import Navbar from './Component/Navbar';
import Register from './pages/Register'
function Layout() {
  const location = useLocation();

  // Hide Navbar only on Login ("/")
  const hideNavbar = location.pathname === "/";

  return (
    <>
      {/* Show Navbar on all except login */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/bookingdetails" element={<BookingDetails />} />
        <Route path="/alluserdata" element={<AllUserData />} />
        <Route path="/updatebooking" element={<UpdateBooking />} />
        <Route path="/updateuser" element={<UpdatedUser />} />
        <Route path ="/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
