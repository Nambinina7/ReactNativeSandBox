// components/containers/AppNavigator.js
import React, { useState, useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useAuth } from '../../../context/AuthContext';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomDrawerContent from "../../../layout/CustomDrawerContent";
import { colors } from "../../utils/colors";
import LoadingScreen from "./LoadingScreen";
import OfflineScreen from "./OfflineScreen";
import CodeEntryScreen from "./CodeEntryScreen";
import HomeScreen from "./HomeScreen.tsx";
import WebViewScreen from "./WebViewScreen.tsx";
import PhotoList from "./PhotoList.tsx";
import ImageCard from "./ImageCard.tsx";
import MyComponent from "./BasicTextFields.tsx";
import PermissionForm from "./MyForm.tsx";
import LeaveForm from "./LeaveForm.tsx";
import CustomHeaderBackground from "../../utils/CustomHeaderBackground";
import LoginScreen from "../auth/LoginScreen.tsx";
import SignupScreen from "../auth/SignupScreen.tsx";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
    const { isAuthenticated } = useAuth() || {};
    const [isConnected, setIsConnected] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isCodeEntered, setIsCodeEntered] = useState(false);
    const [inputCode, setInputCode] = useState('');
    const [isFirstTime, setIsFirstTime] = useState(false);
    const [savedCode, setSavedCode] = useState(null);

    // Surveiller la connexion réseau
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            // @ts-ignore
            setIsConnected(state.isConnected);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Check code from storage
    useEffect(() => {
        const checkCode = async () => {
            const storedCode = await AsyncStorage.getItem('userCode');
            if (!storedCode) {
                setIsFirstTime(true);
            } else {
                // @ts-ignore
                setSavedCode(storedCode);
            }
        };
        checkCode();
    }, []);

    const handleSubmit = async () => {
        if (isFirstTime) {
            await AsyncStorage.setItem('userCode', inputCode);
            alert("Code défini avec succès !");
            setIsCodeEntered(true);
        } else if (inputCode === savedCode) {
            setIsCodeEntered(true);
        } else {
            alert("Code incorrect, veuillez réessayer.");
        }
    };

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!isConnected) {
        return <OfflineScreen retry={() => NetInfo.fetch().then(state => setIsConnected(state.isConnected))} />;
    }

    if (!isCodeEntered) {
        return (
            <CodeEntryScreen
                isFirstTime={isFirstTime}
                inputCode={inputCode}
                setInputCode={setInputCode}
                handleSubmit={handleSubmit}
            />
        );
    }

    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <CustomDrawerContent
                    {...props}
                    isAuthenticated={isAuthenticated}
                />
            )}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: colors.gray,
                    width: 240,
                },
                drawerLabelStyle: {
                    fontSize: 18,
                    color: '#333',
                },
                drawerActiveTintColor: colors.gray,
                drawerInactiveTintColor: '#333',
                headerTitleAlign: 'center',
                headerBackground: () => <CustomHeaderBackground />,
            }}
        >
            {isAuthenticated ? (
                <>
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="WebViewScreen" component={WebViewScreen} />
                    <Drawer.Screen name="PhotoList" component={PhotoList} />
                    <Drawer.Screen name="ImageCard" component={ImageCard} />
                    <Drawer.Screen name="DataTable" component={MyComponent} />
                    <Drawer.Screen name="Permission" component={PermissionForm} />
                    <Drawer.Screen name="Leave" component={LeaveForm} />
                </>
            ) : (
                <>
                    <Drawer.Screen name="Login" component={LoginScreen} />
                    <Drawer.Screen name="Signup" component={SignupScreen} />
                </>
            )}
        </Drawer.Navigator>
    );
};

export default AppNavigator;
