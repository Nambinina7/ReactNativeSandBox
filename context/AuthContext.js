import React, { createContext, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = async () => {
        try {
            await AsyncStorage.removeItem('authToken'); // Clear the token
            setIsAuthenticated(false); // Update authentication state
            console.log("Logout Successful",);
        } catch (error) {
            console.error("Logout failed: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
