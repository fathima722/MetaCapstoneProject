import logo from '../assets/orange.jpeg';
const Header = () => {
    return (
        <>
            <meta name="og:image" content={logo}/>
            <meta name="og:title" content="Homepage, Little restaurant"/>
            <header><img src={logo} style={{height: "50px"}} alt="Brand logo"/>Homepage</header>
        </>
    )
}
export default Header;