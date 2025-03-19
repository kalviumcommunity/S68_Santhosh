import { useState } from "react";
import { addItem } from "../service-API/api";

const EntityForm = ({ onEntityAdded, users }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !createdBy) return;

    await addItem({ name, description, created_by: createdBy });
    onEntityAdded();
    setName("");
    setDescription("");
    setCreatedBy("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter entity name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={createdBy} onChange={(e) => setCreatedBy(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Entity</button>
    </form>
  );
};

export default EntityForm;
