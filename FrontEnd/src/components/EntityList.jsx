import { useState, useEffect } from "react";
import { fetchEntitiesByUser } from "../service-API/api";

const EntityList = ({ userId }) => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const getEntities = async () => {
      const data = await fetchEntitiesByUser(userId);
      setEntities(data);
    };

    getEntities();
  }, [userId]);

  return (
    <ul>
      {entities.map((entity) => (
        <li key={entity.id}>
          <strong>{entity.name}</strong> - {entity.description}
        </li>
      ))}
    </ul>
  );
};

export default EntityList;
