import { createContext, useState } from "react";

// Contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true); // Atualiza o estado de autenticação para true
  const logout = () => setIsAuthenticated(false); // Atualiza o estado de autenticação para false

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
