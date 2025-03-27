import { AuthProvider } from "./context/authContext";
import Login from "./components/Login";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>ASAP Project Authentication</h1>
        <Login />
      </div>
    </AuthProvider>
  );
};

export default App;
