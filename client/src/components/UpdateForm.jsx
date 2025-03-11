import { useState } from "react";
import { updateItem } from "../service-API/api";

const UpdateForm = ({ id, currentName, onUpdate, onClose }) => {
  const [newName, setNewName] = useState(currentName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newName.trim() === "") return;

    await updateItem(id, { name: newName });
    onUpdate(); 
    onClose(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default UpdateForm;
