import { useState } from "react";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from '@react-navigation/native'; // Import navigation

export const useLogin = () => {
    const [secureEntry, setSecureEntry] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigation = useNavigation(); // Get navigation instance

    const handleLogin = async () => {
        try {
            const response = await axios.post("https://0d2b-102-17-58-149.ngrok-free.app/api/login_check", {
                username: username,
                password: password,
            });
            const { token } = response.data;
            await AsyncStorage.setItem('authToken', token); // Store the token
            console.log("Login Successful, Token: ", token);
            login();
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }], // Redirect to HomeScreen after login
            });
        } catch (error) {
            console.error("Login failed: ", error);
        }
    };

    return { secureEntry, setSecureEntry, username, setUsername, password, setPassword, handleLogin };
};
