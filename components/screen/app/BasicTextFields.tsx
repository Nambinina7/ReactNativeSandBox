import * as React from 'react';
import { Provider as PaperProvider, Modal, Portal, Button, Text, DataTable } from 'react-native-paper';
import { View, StyleSheet, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window'); // For getting screen dimensions

const MyComponent = () => {
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);

    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const [selectedItem, setSelectedItem] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    const showModal = (item) => {
        setSelectedItem(item);
        setVisible(true);
    };

    const hideModal = () => setVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Dessert</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key} onPress={() => showModal(item)}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                    </DataTable.Row>
                ))}

                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>

            {/* Modal for displaying dessert details */}
            <Portal>
                <Modal
                    visible={visible}
                    onDismiss={hideModal}
                    contentContainerStyle={[styles.modalContainer, { width: width, bottom: 0 }]} // Full width and bottom position
                >
                    {selectedItem && (
                        <View>
                            <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                            <Text style={styles.modalText}>Calories: {selectedItem.calories}</Text>
                            <Text style={styles.modalText}>Fat: {selectedItem.fat}g</Text>

                            {/* Gradient Button */}
                            <View style={styles.buttonContainer}>
                                <LinearGradient
                                    colors={['#1F2CB4', '#2482DB']}
                                    style={styles.gradientButton}
                                >
                                    <Button
                                        mode="contained"
                                        onPress={hideModal}
                                        style={styles.button}
                                        labelStyle={styles.buttonText}
                                    >
                                        Close
                                    </Button>
                                </LinearGradient>
                            </View>
                        </View>
                    )}
                </Modal>
            </Portal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        padding: 20,
        backgroundColor: 'white',
        position: 'absolute',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        height: '40%',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    gradientButton: {
        borderRadius: 8,
        overflow: 'hidden',
        width: '70%',
    },
    button: {
        paddingVertical: 10,
        backgroundColor: 'transparent', // Transparent to show gradient
    },
    buttonText: {
        color: '#fff',
    },
});

export default function App() {
    return (
        <PaperProvider>
            <MyComponent />
        </PaperProvider>
    );
}
