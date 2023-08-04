import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Regirter from './pages/register/Regirter';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Routes>
      <Route path="/chat">
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Regirter />} />
      </Route>
    </Routes>
  );
}

export default App;
