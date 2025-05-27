import { useState, useEffect} from "react";
import { useNavigate } from "react-router";
import axios from "axios";

 
const NameColor = () => {
    const [nameColors, setNameColors] = useState([]);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [editId, setEditId] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
 
    useEffect(() => {
        fetchNameColors();
    }, []);
 
    const fetchNameColors = async () => {
        try {
            const response = await axios.get("/api/name-colors");
            setNameColors(response.data);
        } catch (err) {
            console.error("Failed to fetch entries", err);
        }
    };
 
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !color) {
            setError("Name and color are required");
            return;
        }
 
        try {
            if (editId) {
                await axios.put(`/api/name-colors/${editId}`, { name, color });
                setEditId(null);
            } else {
                await axios.post("/api/name-colors", { name, color });
            }
 
            setName("");
            setColor("");
            setError(null);
            fetchNameColors();
        } catch {
            setError("Failed to save entry");
        }
    };
 
    const handleEdit = (item) => {
        setName(item.name);
        setColor(item.color);
        setEditId(item.id);
    };
 
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/name-colors/${id}`);
            fetchNameColors();
        } catch {
            setError("Failed to delete entry");
        }
    };
 
    return (
        <div className="container">
 
            <h1 className="heading">Name and Color Manager</h1>
            {error && <p className="error">{error}</p>}
 
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"  
                    value={name}
                    placeholder="Name"  
                    className="input"
                    onChange={(e) => setName(e.target.value)} />
                <input
                    type="text"
                    placeholder="Color"
                    value={color}
                    className="input"
                    onChange={(e) => setColor(e.target.value)} />
                <button type="submit" className="add-button">
                    {editId ? "Update" : "Add"}
                </button>
            </form>
 
            <ul className="list">
                {nameColors.map((item) => (
                    <li key={item.id} className="list-item">
                        <span>
                            {item.name} - {item.color}
                        </span>
                        <div>
                            <button className="edit-button" onClick={() => handleEdit(item)} > Edit  </button>
                            <button  className="delete-button"  onClick={() => handleDelete(item.id)} > Delete </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    );
};
 
export default NameColor;