import Signup from "./Account/Register";
import { useAuth } from "./firebase";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signin from "./Signin";
import Dashboard from "./Dashboard";

function App() {
  const currentUser = useAuth();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/signin"
            element={currentUser ? <Navigate to="/" /> : <Signin />}
          />
          <Route
            path="/signup"
            element={currentUser ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/"
            element={currentUser ? <Dashboard /> : <Navigate to="/signin" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
