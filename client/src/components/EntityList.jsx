import { useState } from "react";
import { deleteItem } from "../service-API/api";
import UpdateForm from "./UpdateForm";

const EntityList = ({ features, onEntityUpdated }) => {
  const [editingId, setEditingId] = useState(null);

  const handleDelete = async (id) => {
    await deleteItem(id);
    onEntityUpdated();
  };

  return (
    <ul>
      {features.map((feature) => (
        <li key={feature._id}>
          <strong>{feature.name}</strong> - {feature.description}
          <button onClick={() => setEditingId(feature._id)}>Edit</button>
          <button onClick={() => handleDelete(feature._id)}>Delete</button>

          {editingId === feature._id && (
            <UpdateForm
              id={feature._id}
              currentName={feature.name}
              onUpdate={onEntityUpdated}
              onClose={() => setEditingId(null)}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default EntityList;
