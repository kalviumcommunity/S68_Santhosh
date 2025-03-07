import React, { useEffect, useState } from "react";
import FeatureCard from "./components/FeatureCard";
import { fetchItems } from "./service-API/api";
import EntityForm from "./components/EntityForm"; 
import EntityList from "./components/EntityList"; 

const App = () => {
  const [features, setFeatures] = useState([]);

  const getItems = async () => {
    const data = await fetchItems();
    setFeatures(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <h1>Welcome to My ASAP Project</h1>

      
      <EntityForm onEntityAdded={getItems} />

      
      <EntityList features={features} />
    </div>
  );
};

export default App;
