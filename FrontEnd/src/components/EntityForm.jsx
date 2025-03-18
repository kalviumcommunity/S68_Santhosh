import { useState } from "react";
import { addItem } from "../service-API/api"; // ✅ Make sure this path is correct

const EntityForm = ({ onEntityAdded }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === "") return;

    await addItem({ name }); // ✅ Ensure addItem is used correctly
    onEntityAdded(); // Refresh the list
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter entity name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Entity</button>
    </form>
  );
};

export default EntityForm;
