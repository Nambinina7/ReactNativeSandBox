// components/presentational/OfflineScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const OfflineScreen = ({ retry }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Vous êtes hors ligne. Veuillez vérifier votre connexion internet.</Text>
        <Button title="Réessayer" onPress={retry} />
    </View>
);

export default OfflineScreen;
