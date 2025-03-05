import axios from "axios";

const API_URL = "http://localhost:3000/route/items"; // Update if needed

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
};
