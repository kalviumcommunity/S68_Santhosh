import axios from "axios";

const API_URL = "http://localhost:8080/route/items"; // Ensure this matches your backend

// Fetch items from the server
export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};

// Add a new item to the server
export const addItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
  }
};
