import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const TodoItem = ({ todo, toggleTodo, onDelete }) => {
    const renderRightActions = (progress, dragX) => {
        return (
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={onDelete}
            >
                <Text style={styles.deleteText}>Eliminar</Text>
            </TouchableOpacity>
        );
    };

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.container}>
                <TouchableOpacity onPress={toggleTodo}>
                    <View style={styles.item}>
                        <Text style={[styles.text, { textDecorationLine: todo.completado ? 'line-through' : 'none' }]}>
                            {todo.texto} - Creado: {new Date(todo.fechaCreacion).toLocaleString()}
                            {todo.fechaTachado && ` - Tachado: ${new Date(todo.fechaTachado).toLocaleString()}`}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    item: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    text: {
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    deleteText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default TodoItem;
