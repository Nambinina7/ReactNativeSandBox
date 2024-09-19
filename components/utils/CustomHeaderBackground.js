// components/CustomHeaderBackground.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomHeaderBackground = () => {
    const insets = useSafeAreaInsets();

    return (
        <LinearGradient
            colors={['#1F2CB4', '#2482DB']}
            style={[styles.headerBackground, { paddingTop: insets.top }]}
        />
    );
};

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%'
    },
});

export default CustomHeaderBackground;
