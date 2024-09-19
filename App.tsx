import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AuthProvider, useAuth } from './context/AuthContext';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import HomeScreen from "./components/screen/app/HomeScreen.tsx";
import LoginScreen from "./components/screen/auth/LoginScreen.tsx";
import SignupScreen from "./components/screen/auth/SignupScreen.tsx";
import WebViewScreen from "./components/screen/app/WebViewScreen.tsx";
import PhotoList from "./components/screen/app/PhotoList.tsx";
import ImageCard from "./components/screen/app/ImageCard.tsx";
import CustomDrawerContent from "./layout/CustomDrawerContent.js";
import { colors } from "./components/utils/colors";
import { useAuthCheck } from './components/hooks/useAuthCheck';
import MyComponent from "./components/screen/app/BasicTextFields.tsx";
import PermissionForm from "./components/screen/app/MyForm.tsx";
import CustomHeaderBackground from "./components/utils/CustomHeaderBackground";
import LeaveForm from "./components/screen/app/LeaveForm.tsx";

const Drawer = createDrawerNavigator();

// Composant pour l'écran hors connexion
const OfflineScreen = ({ retry }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vous êtes hors ligne. Veuillez vérifier votre connexion internet.</Text>
        <Button title="Réessayer" onPress={retry} />
    </View>
);

// Composant pour l'écran de chargement
const LoadingScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Chargement...</Text>
    </View>
);

// Composant pour entrer un code ou définir un nouveau code
const CodeEntryScreen = ({ onSubmit }) => {
    const [inputCode, setInputCode] = React.useState('');
    const [isFirstTime, setIsFirstTime] = React.useState(false);
    const [savedCode, setSavedCode] = React.useState(null);

    React.useEffect(() => {
        const checkCode = async () => {
            const storedCode = await AsyncStorage.getItem('userCode');
            if (!storedCode) {
                setIsFirstTime(true); // Si aucun code n'est défini, l'utilisateur doit en créer un
            } else {
                setSavedCode(storedCode); // Récupérer le code stocké
            }
        };
        checkCode();
    }, []);

    const handleSubmit = async () => {
        if (isFirstTime) {
            await AsyncStorage.setItem('userCode', inputCode); // Stocker le code
            alert("Code défini avec succès !");
            onSubmit();
        } else {
            if (inputCode === savedCode) {
                onSubmit(); // Si le code est correct, ouvrir l'application
            } else {
                alert("Code incorrect, veuillez réessayer.");
            }
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{isFirstTime ? 'Définissez un code pour accéder à l\'application :' : 'Veuillez entrer votre code :'}</Text>
            <TextInput
                style={{
                    borderWidth: 1,
                    padding: 10,
                    margin: 10,
                    width: '80%',
                    borderRadius: 5,
                    borderColor: '#ccc',
                }}
                placeholder={isFirstTime ? 'Définir le code' : 'Entrer le code'}
                secureTextEntry={true}
                value={inputCode}
                onChangeText={setInputCode}
            />
            <Button title="Valider" onPress={handleSubmit} />
        </View>
    );
};

const AppNavigator = () => {
    useAuthCheck();
    const { isAuthenticated } = useAuth();
    const [isConnected, setIsConnected] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const [isCodeEntered, setIsCodeEntered] = React.useState(false);

    // Surveiller la connexion réseau
    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
            setIsLoading(false); // Stop loading when connection status is known
        });

        return () => unsubscribe();
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    if (!isConnected) {
        return <OfflineScreen retry={() => NetInfo.fetch().then(state => setIsConnected(state.isConnected))} />;
    }

    if (!isCodeEntered) {
        return <CodeEntryScreen onSubmit={() => setIsCodeEntered(true)} />; // Affiche l'écran de code avant tout
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
                headerBackground: () => <CustomHeaderBackground />, // Apply the gradient background
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

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <AppNavigator />
            </NavigationContainer>
        </AuthProvider>
    );
}
