import { useState } from "react";
import UserDropdown from "./components/UserDropDown";
import EntityList from "./components/EntityList";

const App = () => {
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div>
      <h1>ASAP Project</h1>
      <UserDropdown onSelectUser={setSelectedUser} />
      {selectedUser && <EntityList userId={selectedUser} />}
    </div>
  );
};

export default App;
