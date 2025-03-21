import { useState, useEffect } from "react";
import { fetchUsers } from "../service-API/api";

const UserDropdown = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <select onChange={(e) => onSelectUser(e.target.value)}>
      <option value="">Select a User</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>{user.name}</option>
      ))}
    </select>
  );
};

export default UserDropdown;
