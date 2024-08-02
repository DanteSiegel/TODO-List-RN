import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';
import TodoItem from './TodoItem'; 

const TodoList = ({ todos, toggleTodo, showFastest }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TodoItem
                        todo={item}
                        toggleTodo={() => toggleTodo(index)}
                    />
                )}
                ListEmptyComponent={<Text>No hay tareas disponibles.</Text>}
            />
            <TouchableOpacity style={styles.button} onPress={showFastest}>
                <Text style={styles.buttonText}>Mostrar Tarea Más Rápida</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 16,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default TodoList;
