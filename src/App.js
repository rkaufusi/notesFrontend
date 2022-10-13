import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import UserHome from "./pages/userHome";
import CreateNote from "./pages/createNote";
import ProtectedRoute from "./pages/ProtectedRoute";
import CreateUser from "./pages/createUser";
import ViewNote from "./pages/ViewNote";
import EditNote from "./pages/EditNote";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        Hello World
        <Route path="/" element={<Login />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="createnote"
          element={
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/viewnote"
          element={
            <ProtectedRoute>
              <ViewNote />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editnote"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
