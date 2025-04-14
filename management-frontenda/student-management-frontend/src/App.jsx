import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ExerciseGenerator from "./pages/ExerciseGenerator";
import Routine from "./pages/Routine";
import Profile from "./pages/Profile"; // Adicionando o import para o perfil
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Página de login */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />{" "}
          {/* Página Home (protegida) */}
          <Route
            path="/exercise-generator"
            element={
              <PrivateRoute>
                <ExerciseGenerator />
              </PrivateRoute>
            }
          />{" "}
          {/* Página de gerar exercícios (protegida) */}
          <Route
            path="/routine"
            element={
              <PrivateRoute>
                <Routine />
              </PrivateRoute>
            }
          />{" "}
          {/* Página de rotina (protegida) */}
          <Route
            path="/profile" // Adicionando a rota para o perfil
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />{" "}
          {/* Página de perfil (protegida) */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
