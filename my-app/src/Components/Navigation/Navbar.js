import './Navbar.css';
import {Link, Routes, Route} from "react-router-dom";
import Ratings from '../Ratings/Ratings';
import Main from '../Main';

const Navbar = () => {
    return (
        <>
           <nav>
            <ul class="flex-container">
                <li><Link to="/" style={{ textDecoration: "none" }}>Home</Link></li>
                <li><Link to="/about" style={{ textDecoration: "none" }}>About</Link></li>
                <li><Link to="/menu" style={{ textDecoration: "none" }}>Menu</Link></li>
                <li><Link to="/reservations" style={{ textDecoration: "none" }}>Reservations</Link></li>
                <li><Link to="/order-online" style={{ textDecoration: "none" }}>Order Online</Link></li>
                <li><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></li>
             </ul>
            </nav>
            <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Main />}
                    />
                    <Route
                        exact
                        path="/about"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/menu"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/reservations"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/order-online"
                        element={<Ratings />}
                    />
                    <Route
                        exact
                        path="/login"
                        element={<Ratings />}
                    />
                </Routes>
        </>
    )
}
export default Navbar;