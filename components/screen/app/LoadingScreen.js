// components/presentational/LoadingScreen.js
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { colors } from '../../utils/colors';

const LoadingScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text>Chargement...</Text>
    </View>
);

export default LoadingScreen;
