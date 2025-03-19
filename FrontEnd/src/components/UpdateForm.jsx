import { useState } from "react";
import { updateItem } from "../service-API/api";

const UpdateForm = ({ feature, onEntityUpdated }) => {
  const [name, setName] = useState(feature.name);
  const [description, setDescription] = useState(feature.description);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateItem(feature._id, { name, description, created_by: feature.created_by });
    onEntityUpdated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
