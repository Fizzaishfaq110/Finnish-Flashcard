import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./Flashcard.css";
const FlashCard = () => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [flippedCards, setFlippedCards] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const apiWords = async () => {
            try {
                const response = await axios.get(
                    "http://namecolor.test/api/proxy/finnish-words"
                );
                console.log("Full response:", response);
                setWords(response.data.words);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the words:", err);
                setError("Failed to fetch words");
                setLoading(false);
            }
        };
        apiWords();
    }, []);

    const toggleFlip = (id) => {
        setFlippedCards((prev) => {
            const newState = {
                ...prev,
                [id]: !prev[id],
            };
            console.log(newState);
            return newState;
        });
    };
    const saveWord = async (word) => {
        try {
            await axios.post("/api/words", {
                finnish: word.finnish,
                english: word.english,
                example: word.example,
            });
            alert("Saved word to favorites!");
        } catch {
            setError("Failed to save word");
        }
    };

    return (
        <>
            <h1>Learn Finnish with Flash Cards!</h1>

            <div className="flashcards-container">
                {Array.isArray(words) &&
                    words.map((word, id) => (
                        <div
                            className="flashcard"
                            key={word.id}
                            onClick={() => toggleFlip(id)}
                        >
                            <div
                                className={`flashcard-inner ${
                                    flippedCards[id] ? "flipped" : ""
                                }`}
                            >
                                <div className="flashcard-front">
                                    <p>{word.finnish}</p>{" "}
                                    <button
                                        style={{ "font-size": "20px" }}
                                        onClick={() => saveWord(word)}
                                    >
                                        ❤️
                                    </button>
                                </div>
                                <div className="flashcard-back">
                                    <p>
                                        <strong>English: </strong>{" "}
                                        {word.english}
                                    </p>
                                    {word.example && (
                                        <p>
                                            <em>{word.example}</em>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <button className="back" onClick={() => navigate(-1)}>
                Back
            </button>
        </>
    );
};

export default FlashCard;
