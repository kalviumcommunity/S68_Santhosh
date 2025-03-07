const EntityList = ({ features }) => {
    return (
      <ul>
        {features.map((feature) => (
          <li key={feature._id}>
            <strong>{feature.name}</strong> - {feature.description}
          </li>
        ))}
      </ul>
    );
  };
  
  export default EntityList;
  