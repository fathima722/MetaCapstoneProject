import { useNavigate } from 'react-router-dom';

const Main = () => {
    const styles={
        backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: "100px",
        paddingRight: "100px",

    }

    const navigate = useNavigate();

    return (
        <>
            <meta name="description" content="Meta tag description of the website"/>
            <meta name="og:description" content="Open Graph:Description - Little restaurant Main Page"/>
            <main style={styles}>
                <div>
                    <h2>Little Orange</h2>
                    <h4>Denver</h4>
                    <p>We are a family owned italian restaurant, focused on tradiotional recipes served with modern twist</p>
                    <button style={{ backgroundColor: "orange", maxWidth: "200px" }} onClick={() => navigate('/reservations')}>
                        Reserve a table
                    </button>
                </div>
                <div>
                    <img src="https://picsum.photos/200/300/?blur?2" alt="random"/>
                </div>
            </main>
        </>
    )
}
export default Main;