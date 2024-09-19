import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import {colors} from "../components/utils/colors";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {useAuth} from "../context/AuthContext";

function CustomDrawerContent(props) {
    const { isAuthenticated, logout } = useAuth();

    return (
        <DrawerContentScrollView {...props}>
            <View style={{ padding: 20 }}>
                <SimpleLineIcons name={"lock"} size={30} color={colors.secondary} />
            </View>
            {isAuthenticated && (
                <>
                    <Text style={{ marginVertical: 10, fontSize: 18 }}>John Doe</Text>
                </>
            )}
            <DrawerItemList {...props} />
            {isAuthenticated && (
                <>
                    <TouchableOpacity
                        style={{ padding: 20, backgroundColor: '#f6f6f6', marginTop: 10 }}
                        onPress={logout}
                    >
                        <Text>Logout</Text>
                    </TouchableOpacity>
                </>
            )}
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
