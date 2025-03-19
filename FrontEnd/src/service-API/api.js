import axios from "axios";

const API_URL = "http://localhost:8080/route";

// Fetch items with optional user filtering
export const fetchItems = async (userId = "") => {
  try {
    const response = await axios.get(`${API_URL}/items`, {
      params: userId ? { userId } : {}, // Pass userId as query param
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Add a new item
export const addItem = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/items`, item, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

// Update an item
export const updateItem = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/items/${id}`, updatedData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

// Delete an item
export const deleteItem = async (id) => {
  try {
    await axios.delete(`${API_URL}/items/${id}`);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};
