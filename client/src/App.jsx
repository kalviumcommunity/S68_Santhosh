import React from "react";
import FeatureCard from "./components/FeatureCard";

const App = () => {
  return (
    <div>
      <h1>Welcome to My ASAP Project</h1>
      <FeatureCard title="AI Assistant" description="An AI-driven mental health assistant that helps users find solutions to their problems." />
      <FeatureCard title="24/7 Support" description="Always available to assist users with their queries and concerns." />
    </div>
  );
};

export default App;
