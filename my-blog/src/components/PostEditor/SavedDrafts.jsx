import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SavedDrafts.css";

const SavedDrafts = () => {
  const navigate = useNavigate();
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const savedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    setDrafts(savedDrafts);
  }, []);

  const handleEdit = (draft) => {
    navigate("/newpost", { state: { draft } });
  };

  const handleDelete = (index) => {
    const updatedDrafts = drafts.filter((_, i) => i !== index);
    setDrafts(updatedDrafts);
    localStorage.setItem("drafts", JSON.stringify(updatedDrafts));
  };

  return (
    <div className="saved-drafts-container">
      <h1>Saved Drafts</h1>
      <ul className="saved-drafts-list">
        {drafts.map((draft, index) => (
          <li key={index} className="saved-draft-item">
            <h2>{draft.title}</h2>
            <p className="saved-draft-content">{draft.content}</p>
            <p>{draft.tags.join(", ")}</p>
            <p>{draft.author}</p>
            <p>{draft.date}</p>
            <button onClick={() => handleEdit(draft)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedDrafts;