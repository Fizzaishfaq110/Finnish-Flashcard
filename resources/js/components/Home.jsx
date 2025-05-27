import { useNavigate } from "react-router";
import "./app.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className="body">
            <h1>Welcome</h1>
            <h2>Choose one option to begin</h2>
            <div className="flashcard">
                <button
                    className="homeBtn"
                    onClick={(e) => navigate("/flashcard")}
                >
                    Finnish Flashcards
                </button>
                <button
                    className="homeBtn"
                    onClick={(e) => navigate("/namecolor")}
                >
                    Name Color Manager
                </button>
            </div>
            </div>
        </>
    );
};

export default Home;
