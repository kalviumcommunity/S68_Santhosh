import { deleteItem } from "../service-API/api";
import UpdateForm from "./UpdateForm";

const EntityList = ({ features, onEntityUpdated }) => {
  const handleDelete = async (id) => {
    await deleteItem(id);
    onEntityUpdated();
  };

  return (
    <div>
      <h2>Item List</h2>
      {features.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {features.map((feature) => (
            <li key={feature._id}>
              <strong>{feature.name}</strong> - {feature.description}  
              <br />
              <em>Created by: {feature.created_by?.name || "Unknown"}</em>
              <br />
              <UpdateForm feature={feature} onEntityUpdated={onEntityUpdated} />
              <button onClick={() => handleDelete(feature._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EntityList;
