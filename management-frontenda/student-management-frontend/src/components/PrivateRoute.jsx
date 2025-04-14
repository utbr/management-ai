import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Rota privada para proteger páginas que exigem autenticação
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/login" />; // Se estiver autenticado, renderiza o conteúdo; se não, redireciona para o login
};

export default PrivateRoute;
