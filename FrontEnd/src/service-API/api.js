import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const fetchEntitiesByUser = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/entities/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching entities:", error);
    return [];
  }
};
