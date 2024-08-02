import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, CheckBox } from 'react-native';

const TodoItem = ({ todo, toggleTodo }) => {
    return (
        <View style={styles.container}>
            <CheckBox
                value={todo.completado}
                onValueChange={toggleTodo}
                style={styles.checkbox}
            />
            <Text style={[styles.label, todo.completado && styles.completed]}>
                {todo.texto} - Creado: {new Date(todo.fechaCreacion).toLocaleString()}
                {todo.fechaTachado && ` - Tachado: ${new Date(todo.fechaTachado).toLocaleString()}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    checkbox: {
        marginRight: 8,
    },
    label: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
    },
});

export default TodoItem;
