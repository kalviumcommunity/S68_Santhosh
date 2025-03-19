import React, { useEffect, useState } from "react";
import { fetchItems, fetchUsers } from "./service-API/api";
import EntityForm from "./components/EntityForm";
import EntityList from "./components/EntityList";

const App = () => {
  const [features, setFeatures] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  const getItems = async () => {
    const data = await fetchItems(selectedUser);
    setFeatures(data);
  };

  const getUsers = async () => {
    const data = await fetchUsers();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
    getItems();
  }, [selectedUser]);

  return (
    <div>
      <h1>Welcome to My ASAP Project</h1>

      {/* User Selection Dropdown */}
      <label>Select User: </label>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">All Users</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <EntityForm onEntityAdded={getItems} users={users} />
      <EntityList features={features} onEntityUpdated={getItems} />
    </div>
  );
};

export default App;
