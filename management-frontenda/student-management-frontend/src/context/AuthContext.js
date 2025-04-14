import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Aqui você poderia verificar um cookie ou localStorage
        const loggedIn = localStorage.getItem('loggedIn') === 'true';
        setIsAuthenticated(loggedIn);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('loggedIn', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('loggedIn');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
