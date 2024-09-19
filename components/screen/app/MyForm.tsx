import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

const PermissionForm = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [reason, setReason] = useState('');

    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [showStartTimePicker, setShowStartTimePicker] = useState(false);
    const [showEndTimePicker, setShowEndTimePicker] = useState(false);

    const onChangeStartDate = (event: any, selectedDate: { toLocaleDateString: (arg0: string) => React.SetStateAction<string>; }) => {
        setShowStartDatePicker(false);
        if (selectedDate) {
            setStartDate(selectedDate.toLocaleDateString('fr-FR'));
        }
    };

    const onChangeEndDate = (event: any, selectedDate: { toLocaleDateString: (arg0: string) => React.SetStateAction<string>; }) => {
        setShowEndDatePicker(false);
        if (selectedDate) {
            setEndDate(selectedDate.toLocaleDateString('fr-FR'));
        }
    };

    const onChangeStartTime = (event: any, selectedTime: { toLocaleTimeString: (arg0: never[], arg1: { hour: string; minute: string; }) => React.SetStateAction<string>; }) => {
        setShowStartTimePicker(false);
        if (selectedTime) {
            setStartTime(selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    };

    const onChangeEndTime = (event: any, selectedTime: { toLocaleTimeString: (arg0: never[], arg1: { hour: string; minute: string; }) => React.SetStateAction<string>; }) => {
        setShowEndTimePicker(false);
        if (selectedTime) {
            setEndTime(selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }
    };

    return (
        <View style={styles.container}>
            {/* Titre */}
            <Text style={styles.title}>Formulaire de demande de permission</Text>

            {/* Date de début et Date de fin sur la même ligne */}
            <View style={styles.row}>
                <View style={styles.inputHalf}>
                    <TextInput
                        label="Date de début *"
                        value={startDate}
                        mode="outlined"
                        onFocus={() => setShowStartDatePicker(true)}
                        showSoftInputOnFocus={false}
                        style={styles.input}
                    />
                    {showStartDatePicker && (
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeStartDate}
                        />
                    )}
                </View>

                <View style={styles.inputHalf}>
                    <TextInput
                        label="Date de fin *"
                        value={endDate}
                        mode="outlined"
                        onFocus={() => setShowEndDatePicker(true)}
                        showSoftInputOnFocus={false}
                        style={styles.input}
                    />
                    {showEndDatePicker && (
                        <DateTimePicker
                            value={new Date()}
                            mode="date"
                            display="default"
                            onChange={onChangeEndDate}
                        />
                    )}
                </View>
            </View>

            {/* Heure de début */}
            <TextInput
                label="Heure de début *"
                value={startTime}
                mode="outlined"
                onFocus={() => setShowStartTimePicker(true)}
                showSoftInputOnFocus={false}
                style={styles.input}
            />
            {showStartTimePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="default"
                    onChange={onChangeStartTime}
                />
            )}

            {/* Heure de fin */}
            <TextInput
                label="Heure de fin *"
                value={endTime}
                mode="outlined"
                onFocus={() => setShowEndTimePicker(true)}
                showSoftInputOnFocus={false}
                style={styles.input}
            />
            {showEndTimePicker && (
                <DateTimePicker
                    value={new Date()}
                    mode="time"
                    display="default"
                    onChange={onChangeEndTime}
                />
            )}

            {/* Raison */}
            <TextInput
                label="Raison *"
                value={reason}
                mode="outlined"
                onChangeText={setReason}
                multiline
                numberOfLines={4}
                style={styles.input}
            />

            {/* Bouton d'envoi avec gradient et image aux coins droits */}
            <View style={styles.buttonContainer}>
                <LinearGradient
                    colors={['#1F2CB4', '#2482DB']}
                    style={styles.gradientButton}
                >
                    <Button
                        mode="contained"
                        onPress={() => console.log('Form submitted')}
                        style={styles.button}
                        labelStyle={styles.buttonText}
                    >
                        Envoyer
                    </Button>
                </LinearGradient>
               {/* <Image
                    source={require("../../assets/tapaka.png")} // Remplace par le chemin de ton image
                    style={styles.cornerImage}
                />*/}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 24,
        textAlign: 'center',
        color: '#000000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputHalf: {
        width: '48%',
    },
    input: {
        marginTop: 16,
        marginBottom: 16, // Adding uniform space between inputs
    },
    gradientButton: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '70%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 32,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'transparent',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
    },
    // cornerImage: {
    //     position: 'absolute',
    //     bottom: -60,
    //     right: 0,
    //     width: 100,
    //     height: 130,
    // },
});

export default PermissionForm;
