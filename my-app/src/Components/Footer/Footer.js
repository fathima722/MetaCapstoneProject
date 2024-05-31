import logo from "../../assets/orange.jpeg";
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="container">
                <img src={logo} style={{height: "100px", padding: "10px"}} alt="Brand logo"/>
                <div>Doormat Navigation
                    <ul>
                        <li><a href="/" style={{textDecoration: "None"}}>About</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Menu</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Reservations</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Order Online</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Login</a></li>
                    </ul>
                </div>
                <div>Contact
                    <ul>
                        <li><a href="/" style={{textDecoration: "None"}}>Address</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Phone</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Email</a></li>
                    </ul>
                </div>
                <div>Social Media Links
                    <ul>
                        <li><a href="/" style={{textDecoration: "None"}}>Facebook</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Instagram</a></li>
                        <li><a href="/" style={{textDecoration: "None"}}>Twitter</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
export default Footer;