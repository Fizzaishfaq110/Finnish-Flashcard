import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NameColor from "./Namecolor";
import FlashCard from "./Flashcard";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/namecolor" element={<NameColor />} />
                <Route path="/flashcard" element={<FlashCard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
