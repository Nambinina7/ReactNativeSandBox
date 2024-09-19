// components/presentational/CodeEntryScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const CodeEntryScreen = ({ isFirstTime, inputCode, setInputCode, handleSubmit }) => (
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

export default CodeEntryScreen;
