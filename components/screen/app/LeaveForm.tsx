import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

const LeaveForm = () => {
    const [requestDate, setRequestDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [totalLeave, setTotalLeave] = useState('');
    const [weekendsIncluded, setWeekendsIncluded] = useState('no'); // Use 'yes' or 'no'

    const [showRequestDatePicker, setShowRequestDatePicker] = useState(false);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

    const onChangeRequestDate = (event: any, selectedDate: Date | undefined) => {
        setShowRequestDatePicker(false);
        if (selectedDate) {
            setRequestDate(selectedDate.toLocaleDateString('fr-FR'));
        }
    };

    const onChangeStartDate = (event: any, selectedDate: Date | undefined) => {
        setShowStartDatePicker(false);
        if (selectedDate) {
            setStartDate(selectedDate.toLocaleDateString('fr-FR'));
        }
    };

    const onChangeEndDate = (event: any, selectedDate: Date | undefined) => {
        setShowEndDatePicker(false);
        if (selectedDate) {
            setEndDate(selectedDate.toLocaleDateString('fr-FR'));
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Title */}
                <Text style={styles.title}>Formulaire de demande de congé</Text>

                {/* Request Date */}
                <TextInput
                    label="Date de demande *"
                    value={requestDate}
                    mode="outlined"
                    onFocus={() => setShowRequestDatePicker(true)}
                    showSoftInputOnFocus={false}
                    style={styles.input}
                />
                {showRequestDatePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode="date"
                        display="default"
                        onChange={onChangeRequestDate}
                    />
                )}

                {/* Start Date and End Date */}
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

                {/* Include Weekends */}
                <Text style={styles.checkboxLabel}>
                    Vous voulez que les week-ends soient pris en compte dans votre congé?
                </Text>
                <RadioButton.Group
                    onValueChange={newValue => setWeekendsIncluded(newValue)}
                    value={weekendsIncluded}
                >
                    <View style={styles.radioRow}>
                        <View style={styles.radioItem}>
                            <RadioButton value="yes" />
                            <Text>Oui</Text>
                        </View>
                        <View style={styles.radioItem}>
                            <RadioButton value="no" />
                            <Text>Non</Text>
                        </View>
                    </View>
                </RadioButton.Group>

                {/* Total Leave */}
                <TextInput
                    label="Total congé *"
                    value={totalLeave}
                    mode="outlined"
                    onChangeText={setTotalLeave}
                    style={styles.input}
                />

                {/* Reason */}
                <TextInput
                    label="Raison *"
                    value={reason}
                    mode="outlined"
                    onChangeText={setReason}
                    multiline
                    numberOfLines={4}
                    style={styles.input}
                />

                {/* Submit Button */}
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
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#000',
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
        marginBottom: 16,
    },
    checkboxLabel: {
        marginTop: 16,
        fontSize: 16,
    },
    radioRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    gradientButton: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '70%',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 32,
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: '#fff',
    },
});

export default LeaveForm;
