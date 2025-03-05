import React, { useEffect, useState } from "react";
import FeatureCard from "./components/FeatureCard";
import { fetchItems } from "./service-API/api";

const App = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setFeatures(data);
    };
    getItems();
  }, []);

  return (
    <div>
      <h1>Welcome to My ASAP Project</h1>
      {features.length > 0 ? (
        features.map((feature) => (
          <FeatureCard key={feature._id} title={feature.name} description={feature.description} />
        ))
      ) : (
        <p>Loading features...</p>
      )}
    </div>
  );
};

export default App;
